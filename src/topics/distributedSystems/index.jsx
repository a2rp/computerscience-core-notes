// src/pages/topics/distributedSystems/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiGlobe,
    FiGitPullRequest,
    FiLayers,
    FiShuffle,
    FiCheckCircle,
    FiAlertTriangle,
    FiLock,
    FiActivity,
    FiChevronsDown,
    FiChevronsUp,
    FiInfo,
    FiZap,
    FiCpu,
    FiRepeat,
} from "react-icons/fi";

const DistributedSystems = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                id: "ds-models",
                icon: <FiGlobe />,
                title: "Distributed models",
                atGlance: [
                    "Distributed system means multiple machines working together as one system.",
                    "Main pain is failures and network delays, not just code.",
                    "Design is about trade-offs: consistency, availability, latency.",
                ],
                content: [
                    {
                        h: "What is a distributed model",
                        p: [
                            "A distributed model describes how components communicate and coordinate when they are running on different machines.",
                            "Unlike single-machine programs, distributed systems must handle partial failures, slow networks, and out-of-order messages.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "A chat app uses multiple servers: one for authentication, one for messaging, one for storage. They coordinate over the network.",
                            ],
                        },
                    },
                    {
                        h: "Common models",
                        p: [
                            "Client-server is the most common model where clients request and servers respond.",
                            "Peer-to-peer systems allow nodes to act as both client and server.",
                            "Microservices is a distributed model where each service owns a small responsibility and communicates via APIs or events.",
                        ],
                        example: {
                            title: "Quick intuition",
                            lines: [
                                "Client-server is simpler.",
                                "Peer-to-peer can scale but is harder to coordinate.",
                                "Microservices improve isolation but increase coordination complexity.",
                            ],
                        },
                    },
                    {
                        h: "Why distributed is hard",
                        p: [
                            "Network is unreliable: packets can be lost, delayed, duplicated, or arrive out of order.",
                            "You cannot assume all machines share the same clock or fail at the same time.",
                            "Some nodes may be alive but unreachable, creating split-brain situations.",
                        ],
                        example: {
                            title: "Classic headache",
                            lines: [
                                "A service times out and retries, but the original request actually succeeded, causing duplicate operations.",
                            ],
                        },
                    },
                ],
            },

            {
                id: "ds-rpc",
                icon: <FiGitPullRequest />,
                title: "RPC",
                atGlance: [
                    "RPC makes a remote call look like a local function call.",
                    "Failures are normal: timeouts and retries must be designed carefully.",
                    "Idempotency is your best friend for safe retries.",
                ],
                content: [
                    {
                        h: "What is RPC",
                        p: [
                            "RPC (Remote Procedure Call) lets a program call a function on another machine as if it was local.",
                            "Under the hood it does serialization, networking, and deserialization.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "orderService.createOrder(userId, items) calls a remote service over the network.",
                            ],
                        },
                    },
                    {
                        h: "Timeouts and retries",
                        p: [
                            "Timeout does not mean failure, it means you did not get a response in time.",
                            "Retries can cause duplicate work if the server actually processed the request.",
                        ],
                        example: {
                            title: "Safe retry example",
                            lines: [
                                "Use an idempotency key like orderId so repeating the same request does not create multiple orders.",
                            ],
                        },
                    },
                    {
                        h: "At-least-once vs at-most-once",
                        p: [
                            "At-least-once delivery means retries happen and duplicates are possible.",
                            "At-most-once delivery tries to avoid duplicates but can drop requests if not careful.",
                            "Exactly-once is extremely hard and usually simulated with idempotency and deduplication.",
                        ],
                        example: {
                            title: "Mental model",
                            lines: [
                                "In distributed systems, you usually choose between occasional duplicates or occasional drops, then build safety around it.",
                            ],
                        },
                    },
                ],
            },

            {
                id: "ds-consensus",
                icon: <FiCheckCircle />,
                title: "Consensus algorithms",
                atGlance: [
                    "Consensus means nodes agree on one value, even with failures.",
                    "Used for leader election and replicated logs.",
                    "Raft is easier to understand, Paxos is more theoretical.",
                ],
                content: [
                    {
                        h: "What is consensus",
                        p: [
                            "Consensus algorithms help a group of machines agree on a single decision like who is leader or what the next log entry is.",
                            "This is critical when nodes can fail or messages can be delayed.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "A database cluster needs one leader to accept writes. Consensus elects that leader.",
                            ],
                        },
                    },
                    {
                        h: "When you need consensus",
                        p: [
                            "Leader election: choose one leader among many nodes.",
                            "Replicated state machine: keep multiple copies of data in sync using a shared log of operations.",
                            "Coordination services: configuration, locks, membership.",
                        ],
                        example: {
                            title: "Real-world systems",
                            lines: [
                                "ZooKeeper and etcd use consensus-like mechanisms for coordination.",
                            ],
                        },
                    },
                ],
            },

            {
                id: "ds-2pc",
                icon: <FiRepeat />,
                title: "Two phase commit",
                atGlance: [
                    "2PC coordinates a transaction across multiple services or databases.",
                    "Phase 1 asks if everyone can commit, Phase 2 commits or aborts.",
                    "Main downside is blocking if coordinator fails.",
                ],
                content: [
                    {
                        h: "What is Two Phase Commit",
                        p: [
                            "Two Phase Commit (2PC) is a protocol to make multiple participants commit a transaction together.",
                            "It is used when one logical operation touches multiple databases or services and you want all-or-nothing behavior.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Transfer money: debit account service and credit another service must both commit or both rollback.",
                            ],
                        },
                    },
                    {
                        h: "How it works",
                        p: [
                            "Phase 1 (prepare): coordinator asks participants to prepare and vote yes or no.",
                            "Phase 2 (commit): if all vote yes, coordinator tells everyone to commit, else abort.",
                        ],
                        example: {
                            title: "Simple flow",
                            lines: [
                                "Coordinator -> prepare",
                                "Participants -> yes/no",
                                "Coordinator -> commit/abort",
                            ],
                        },
                    },
                    {
                        h: "Why it can block",
                        p: [
                            "If coordinator crashes after participants prepared, they may be stuck waiting.",
                            "This makes 2PC a blocking protocol and less ideal under failures.",
                        ],
                        example: {
                            title: "Practical note",
                            lines: [
                                "Modern systems often prefer sagas and compensating actions instead of strict 2PC across services.",
                            ],
                        },
                    },
                ],
            },

            {
                id: "ds-paxos",
                icon: <FiLayers />,
                title: "Paxos",
                atGlance: [
                    "Paxos is a family of consensus algorithms.",
                    "It is correct but hard to implement and explain.",
                    "Often learned for theory, not written from scratch in apps.",
                ],
                content: [
                    {
                        h: "What is Paxos",
                        p: [
                            "Paxos is a consensus protocol that ensures safety even with failures and message delays.",
                            "It uses roles like proposer, acceptor, and learner to agree on values.",
                        ],
                        example: {
                            title: "Beginner intuition",
                            lines: [
                                "Nodes propose values, acceptors choose one based on rules that prevent conflicting decisions.",
                            ],
                        },
                    },
                    {
                        h: "Why Paxos is famous",
                        p: [
                            "It proved that consensus can be achieved safely in unreliable networks under certain assumptions.",
                            "Many practical systems are inspired by Paxos or use simplified variants.",
                        ],
                        example: {
                            title: "Practical reality",
                            lines: [
                                "You usually use existing libraries or systems rather than implementing Paxos directly.",
                            ],
                        },
                    },
                ],
            },

            {
                id: "ds-raft",
                icon: <FiCpu />,
                title: "Raft",
                atGlance: [
                    "Raft is designed to be understandable and practical.",
                    "It uses leader-based replication with a replicated log.",
                    "Main parts: leader election, log replication, safety.",
                ],
                content: [
                    {
                        h: "What is Raft",
                        p: [
                            "Raft is a consensus algorithm that keeps multiple nodes consistent by using a single leader.",
                            "The leader replicates a log of operations to followers.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "A config store like etcd can use Raft so all nodes agree on the same configuration changes.",
                            ],
                        },
                    },
                    {
                        h: "Leader election",
                        p: [
                            "Nodes start as followers. If they do not hear from a leader, they become candidates.",
                            "Candidates ask for votes. Majority vote wins and becomes leader.",
                        ],
                        example: {
                            title: "Key idea",
                            lines: [
                                "Majority quorum prevents split-brain decisions.",
                            ],
                        },
                    },
                    {
                        h: "Log replication",
                        p: [
                            "Clients send writes to leader. Leader appends to its log and replicates to followers.",
                            "Once a majority confirms, the entry is committed and applied.",
                        ],
                        example: {
                            title: "Why it works",
                            lines: [
                                "Majority confirmation ensures the committed history survives node failures.",
                            ],
                        },
                    },
                ],
            },

            {
                id: "ds-consistency",
                icon: <FiActivity />,
                title: "Consistency models",
                atGlance: [
                    "Consistency is about what values reads can return in a distributed system.",
                    "Strong consistency feels like a single database.",
                    "Weaker models allow stale reads but reduce latency and improve availability.",
                ],
                content: [
                    {
                        h: "Strong consistency",
                        p: [
                            "After a write completes, all reads return the latest value.",
                            "Often needs coordination like consensus or synchronous replication.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Bank balance reads should usually be strongly consistent to avoid showing wrong money.",
                            ],
                        },
                    },
                    {
                        h: "Eventual consistency",
                        p: [
                            "If no new updates happen, all replicas will eventually converge to the same value.",
                            "Reads can be stale for a short time, but system stays available under partitions.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Social media like counts can be eventually consistent because slight delay is acceptable.",
                            ],
                        },
                    },
                    {
                        h: "Trade-off mindset",
                        p: [
                            "Strong consistency often increases latency because nodes must coordinate.",
                            "Eventual consistency improves availability and speed but needs conflict handling.",
                        ],
                        example: {
                            title: "Rule of thumb",
                            lines: [
                                "Money and security need stronger consistency.",
                                "Analytics and feeds can accept eventual consistency.",
                            ],
                        },
                    },
                ],
            },

            {
                id: "ds-locking",
                icon: <FiLock />,
                title: "Distributed locking",
                atGlance: [
                    "Distributed lock coordinates access to a shared resource across machines.",
                    "Hard because locks can get stuck if node crashes.",
                    "Leases and timeouts help prevent permanent locks.",
                ],
                content: [
                    {
                        h: "What is a distributed lock",
                        p: [
                            "A distributed lock ensures only one node performs a critical operation at a time, across a cluster.",
                            "This is useful for leader-only jobs, scheduled tasks, or preventing double processing.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Only one worker should run daily billing job even if 5 instances are running.",
                            ],
                        },
                    },
                    {
                        h: "Why it is tricky",
                        p: [
                            "If a node holding the lock crashes, the lock can remain stuck unless there is a timeout or lease.",
                            "Network partitions can cause two nodes to think they have the lock if design is weak.",
                        ],
                        example: {
                            title: "Classic failure",
                            lines: [
                                "Node A acquires lock, network splits, Node B also acquires lock and both process same job.",
                            ],
                        },
                    },
                    {
                        h: "Leases and fencing tokens",
                        p: [
                            "Lease means lock expires after time unless renewed.",
                            "Fencing token is a monotonically increasing number that prevents old lock holders from making writes.",
                        ],
                        example: {
                            title: "Simple safety idea",
                            lines: [
                                "Resource only accepts operations with the newest token, so stale nodes cannot damage data.",
                            ],
                        },
                    },
                ],
                callout: {
                    icon: <FiAlertTriangle />,
                    title: "Locking is expensive",
                    lines: [
                        "Prefer designs that avoid distributed locks when possible.",
                        "If you must lock, use proven systems like etcd or ZooKeeper and design for failure.",
                    ],
                },
            },
        ];
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="distributed-systems">
            <div className="top">
                <div className="titleRow">
                    <div className="titleIcon">
                        <FiGlobe />
                    </div>

                    <div className="titleText">
                        <h2 className="title">Distributed Systems</h2>
                        <p className="sub">
                            At-a-glance revision notes for distributed models,
                            RPC, consensus, 2PC, Paxos, Raft, consistency, and
                            distributed locking.
                        </p>
                    </div>
                </div>

                <button
                    type="button"
                    className={open ? "toggleBtn open" : "toggleBtn"}
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="ds-content"
                    title={
                        open
                            ? "Collapse Distributed Systems notes"
                            : "Expand Distributed Systems notes"
                    }
                >
                    <span className="btnIcon">
                        {open ? <FiChevronsUp /> : <FiChevronsDown />}
                    </span>
                    <span className="btnText">
                        {open ? "Collapse" : "Expand"}
                    </span>
                </button>
            </div>

            <div id="ds-content" className={open ? "content open" : "content"}>
                <div className="hintBar">
                    <FiInfo className="hintIcon" />
                    <div className="hintText">
                        Scan "At a glance" first. Then read examples.
                        Distributed systems are mostly about failure cases and
                        trade-offs.
                    </div>
                </div>

                <div className="grid">
                    {sections.map((sec) => (
                        <div key={sec.id} className="card">
                            <div className="cardHead">
                                <div className="cardIcon">{sec.icon}</div>
                                <div className="cardTitleWrap">
                                    <div className="cardTitle">{sec.title}</div>
                                    <div className="cardMini">
                                        Quick revision points and beginner
                                        examples
                                    </div>
                                </div>
                            </div>

                            <div className="atGlance">
                                <div className="atTitle">At a glance</div>
                                <ul className="bullets">
                                    {sec.atGlance.map((t, i) => (
                                        <li key={i}>{t}</li>
                                    ))}
                                </ul>
                            </div>

                            {sec.content && sec.content.length > 0 && (
                                <div className="details">
                                    {sec.content.map((b, i) => (
                                        <div key={i} className="block">
                                            <div className="blockTitle">
                                                {b.h}
                                            </div>

                                            <div className="blockBody">
                                                {b.p.map((line, idx) => (
                                                    <p key={idx} className="p">
                                                        {line}
                                                    </p>
                                                ))}
                                            </div>

                                            {b.example && (
                                                <div className="example">
                                                    <div className="exTitle">
                                                        {b.example.title}
                                                    </div>
                                                    <ul className="exList">
                                                        {b.example.lines.map(
                                                            (line, j) => (
                                                                <li
                                                                    key={j}
                                                                    className="mono"
                                                                >
                                                                    {line}
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {sec.callout && (
                                <div className="callout">
                                    <div className="calloutHead">
                                        <span className="calloutIcon">
                                            {sec.callout.icon}
                                        </span>
                                        <span className="calloutTitle">
                                            {sec.callout.title}
                                        </span>
                                    </div>

                                    <ul className="calloutList">
                                        {sec.callout.lines.map((x, i) => (
                                            <li key={i}>{x}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="footerNote">
                    <div className="footerIcon">
                        <FiZap />
                    </div>
                    <div className="footerText">
                        Interview tip - Always mention network failures,
                        timeouts, retries, and trade-offs. In distributed
                        systems, "works on my machine" is a joke, not a plan.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default DistributedSystems;
