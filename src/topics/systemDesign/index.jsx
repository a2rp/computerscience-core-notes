// src/pages/topics/systemDesign/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiGrid,
    FiTrendingUp,
    FiShield,
    FiCheckCircle,
    FiShuffle,
    FiLayers,
    FiServer,
    FiRepeat,
    FiDatabase,
    FiZap,
    FiInbox,
    FiActivity,
    FiSliders,
    FiChevronsDown,
    FiChevronsUp,
    FiInfo,
    FiClock,
} from "react-icons/fi";

const SystemDesign = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                id: "sd-basics",
                icon: <FiTrendingUp />,
                title: "Basics",
                atGlance: [
                    "Scalability is about handling growth smoothly.",
                    "Availability is about being up when users need you.",
                    "Reliability is about doing correct work consistently.",
                    "CAP theorem explains trade-offs in distributed systems.",
                ],
                content: [
                    {
                        h: "Scalability",
                        p: [
                            "Scalability means your system can handle more load by adding resources without breaking.",
                            "Two common types are vertical scaling (bigger machine) and horizontal scaling (more machines).",
                            "A scalable design avoids single bottlenecks and supports adding capacity gradually.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "If traffic doubles, you can add 2 more app servers behind a load balancer.",
                                "If a single database is the bottleneck, you may add read replicas or shard the data.",
                            ],
                        },
                    },
                    {
                        h: "Availability",
                        p: [
                            "Availability means the system is reachable and usable when needed.",
                            "High availability uses redundancy so if one part fails, another takes over.",
                            "Downtime can come from deployments, crashes, network issues, or bad configuration.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Two app servers in different zones. If one zone goes down, users still get responses.",
                                "Health checks remove unhealthy servers automatically.",
                            ],
                        },
                    },
                    {
                        h: "Reliability",
                        p: [
                            "Reliability means the system works correctly over time and produces correct results.",
                            "A system can be available but not reliable if it returns wrong data or loses requests.",
                            "Reliability comes from good testing, safe deployments, retries with limits, idempotency, and strong observability.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Payment API returns success only after the transaction is confirmed and recorded safely.",
                                "Using idempotency keys prevents double charging if clients retry.",
                            ],
                        },
                    },
                    {
                        h: "CAP theorem",
                        p: [
                            "CAP says a distributed system cannot guarantee Consistency, Availability, and Partition tolerance at the same time.",
                            "Partition tolerance means the system continues operating even if network splits happen.",
                            "In real distributed systems, partitions can happen, so the main trade-off becomes Consistency vs Availability during partition.",
                        ],
                        example: {
                            title: "Quick intuition",
                            lines: [
                                "CP system: prefers correctness, may reject or delay requests during partition.",
                                "AP system: prefers staying available, may serve slightly stale data during partition.",
                            ],
                        },
                    },
                ],
            },

            {
                id: "sd-architecture",
                icon: <FiLayers />,
                title: "Architecture",
                atGlance: [
                    "Monolith is simpler to start, microservices scale teams and domains.",
                    "Client-server is the baseline for most apps.",
                    "Load balancer spreads traffic, reverse proxy protects and routes traffic.",
                ],
                content: [
                    {
                        h: "Monolith vs Microservices",
                        p: [
                            "Monolith is one codebase and usually one deployable unit. It is easier to build and debug early.",
                            "Microservices split the system into smaller services. Each service owns a domain and can be deployed independently.",
                            "Microservices add complexity: network calls, distributed tracing, deployment coordination, and versioning.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Monolith: ecommerce app in one backend.",
                                "Microservices: auth service, catalog service, orders service, payments service.",
                            ],
                        },
                    },
                    {
                        h: "Client-server",
                        p: [
                            "Client is the app that requests data, server is the app that processes requests and returns responses.",
                            "Clients can be web, mobile, desktop, or other services.",
                            "APIs define how clients talk to servers. HTTP with JSON is common.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Browser requests /products, server returns product list as JSON.",
                            ],
                        },
                    },
                    {
                        h: "Load balancer",
                        p: [
                            "A load balancer distributes incoming requests across multiple servers.",
                            "It improves availability and scalability by avoiding a single overloaded server.",
                            "It also performs health checks and can stop sending traffic to unhealthy instances.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Round robin sends each request to the next server.",
                                "Least connections sends to the server with fewer active connections.",
                            ],
                        },
                    },
                    {
                        h: "Reverse proxy",
                        p: [
                            "A reverse proxy sits in front of your servers and routes requests to the correct backend.",
                            "It can handle SSL termination, caching, compression, security headers, and rate limiting.",
                            "It hides internal server structure from the public internet.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Reverse proxy routes /api to backend and / to frontend static site.",
                                "It can block suspicious traffic before it reaches your app servers.",
                            ],
                        },
                    },
                ],
            },

            {
                id: "sd-db-scaling",
                icon: <FiDatabase />,
                title: "Database Scaling",
                atGlance: [
                    "Replication improves read capacity and availability.",
                    "Sharding splits data across databases to scale writes and storage.",
                    "Partitioning splits data inside a database to manage large tables.",
                ],
                content: [
                    {
                        h: "Replication",
                        p: [
                            "Replication copies data from a primary database to one or more replicas.",
                            "Read replicas increase read throughput and can help during failover.",
                            "Replication can be synchronous (stronger consistency, slower writes) or asynchronous (faster, can be slightly stale).",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Primary handles writes, replicas handle reads for product browsing.",
                                "During failover, a replica can be promoted to primary.",
                            ],
                        },
                    },
                    {
                        h: "Sharding",
                        p: [
                            "Sharding splits data across multiple databases so each shard stores only a subset of data.",
                            "It helps when a single database cannot handle write load or storage size.",
                            "Sharding requires a shard key, like userId, to decide where data lives.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Users with userId 0-1M in shard A, 1M-2M in shard B.",
                                "Orders are routed to shard based on customerId.",
                            ],
                        },
                    },
                    {
                        h: "Partitioning",
                        p: [
                            "Partitioning splits a large table into smaller parts within the same database.",
                            "It improves query performance and maintenance by scanning smaller partitions.",
                            "Common strategies are range partitioning by date and hash partitioning by id.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Logs table partitioned by month so queries for last 7 days scan only current partition.",
                            ],
                        },
                    },
                ],
            },

            {
                id: "sd-caching",
                icon: <FiZap />,
                title: "Caching",
                atGlance: [
                    "Caching reduces latency and database load.",
                    "Redis is a common in-memory cache and data structure store.",
                    "Eviction decides what to remove when cache is full.",
                ],
                content: [
                    {
                        h: "Redis basics",
                        p: [
                            "Redis is an in-memory key-value store often used for caching, sessions, rate limiting, queues, and leaderboards.",
                            "It is fast because data lives in memory, but you must handle eviction and persistence settings carefully.",
                            "Common cache pattern is cache-aside: check cache first, fallback to DB, then fill cache.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Read product details: key = product:123, value = JSON of product.",
                                "Cache-aside: if miss, fetch from DB, set in Redis with TTL.",
                            ],
                        },
                    },
                    {
                        h: "Cache eviction strategies",
                        p: [
                            "Eviction strategy decides what to remove when cache is full.",
                            "LRU removes least recently used items.",
                            "LFU removes least frequently used items.",
                            "TTL based eviction removes expired items first and keeps fresh data.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Trending products stay in cache due to frequent access.",
                                "Old rarely accessed product entries get evicted.",
                            ],
                        },
                    },
                ],
                subList: {
                    title: "Common caching patterns",
                    items: [
                        {
                            k: "Cache-aside",
                            v: "App checks cache, on miss reads DB and writes to cache. Simple and common.",
                        },
                        {
                            k: "Write-through",
                            v: "Writes go to cache and DB together. Cache stays consistent but writes are slower.",
                        },
                        {
                            k: "Write-back",
                            v: "Writes go to cache first, DB later. Faster but risk of data loss if cache fails.",
                        },
                    ],
                },
            },

            {
                id: "sd-messaging",
                icon: <FiInbox />,
                title: "Messaging",
                atGlance: [
                    "Queues decouple services and smooth traffic spikes.",
                    "Event-driven systems react to events instead of direct calls.",
                    "Messaging improves reliability using retries and dead letter queues.",
                ],
                content: [
                    {
                        h: "Message queues",
                        p: [
                            "Message queues store tasks so producers and consumers can work independently.",
                            "They help handle spikes by buffering work and processing at a stable rate.",
                            "Queues improve reliability by allowing retries and tracking failed messages.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Order placed sends a message to queue, worker processes inventory update.",
                                "Email sending runs asynchronously so user request stays fast.",
                            ],
                        },
                    },
                    {
                        h: "Event driven architecture",
                        p: [
                            "In event-driven architecture, services publish events and other services subscribe to react.",
                            "Events represent facts like 'OrderCreated' or 'PaymentSucceeded'.",
                            "This reduces tight coupling but requires good event schemas and observability.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Orders service emits OrderCreated event.",
                                "Analytics service consumes it and updates dashboards.",
                            ],
                        },
                    },
                ],
                callout: {
                    icon: <FiInfo />,
                    title: "Queue terms that interviewers like",
                    lines: [
                        "At least once delivery means messages can be delivered more than once, consumers must be idempotent.",
                        "Dead letter queue stores messages that fail repeatedly.",
                        "Backpressure means slowing producers when consumers cannot keep up.",
                    ],
                },
            },

            {
                id: "sd-patterns",
                icon: <FiSliders />,
                title: "Design Patterns",
                atGlance: [
                    "Rate limiter protects your system from abuse and spikes.",
                    "API gateway is the front door for microservices.",
                    "Circuit breaker prevents cascading failures.",
                ],
                content: [
                    {
                        h: "Rate limiter",
                        p: [
                            "Rate limiting controls how many requests a client can make in a time window.",
                            "It protects against abuse and prevents one client from taking all resources.",
                            "Common algorithms include token bucket and leaky bucket.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Limit login attempts to 5 per minute per IP.",
                                "Allow 100 requests per minute per userId for public API.",
                            ],
                        },
                    },
                    {
                        h: "API gateway",
                        p: [
                            "API gateway is a single entry point for client requests in microservices.",
                            "It can handle routing, authentication, rate limiting, caching, and request aggregation.",
                            "It keeps clients simple because they call one endpoint instead of many services.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Mobile app calls gateway, gateway calls user service and orders service and combines response.",
                            ],
                        },
                    },
                    {
                        h: "Circuit breaker",
                        p: [
                            "Circuit breaker stops calling a failing service for a short time to prevent overload.",
                            "It has states: closed (normal), open (blocked), half-open (test requests).",
                            "This prevents cascading failure where one broken service takes down the entire system.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "If payment service is failing, circuit opens and app returns a friendly error quickly instead of hanging.",
                            ],
                        },
                    },
                ],
                subList: {
                    title: "Practical usage notes",
                    items: [
                        {
                            k: "Rate limiter",
                            v: "Use at edge like reverse proxy or gateway. Store counters in Redis.",
                        },
                        {
                            k: "API gateway",
                            v: "Good for authentication and routing. Avoid too much business logic inside gateway.",
                        },
                        {
                            k: "Circuit breaker",
                            v: "Pair with timeouts and retries. Unlimited retries can kill systems.",
                        },
                    ],
                },
            },
        ];
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="system-design">
            <div className="top">
                <div className="titleRow">
                    <div className="titleIcon">
                        <FiGrid />
                    </div>

                    <div className="titleText">
                        <h2 className="title">System Design</h2>
                        <p className="sub">
                            At-a-glance revision notes for scalability,
                            reliability, databases, caching, messaging, and
                            architecture patterns.
                        </p>
                    </div>
                </div>

                <button
                    type="button"
                    className={open ? "toggleBtn open" : "toggleBtn"}
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="system-design-content"
                    title={
                        open
                            ? "Collapse system design notes"
                            : "Expand system design notes"
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

            <div
                id="system-design-content"
                className={open ? "content open" : "content"}
            >
                <div className="hintBar">
                    <FiClock className="hintIcon" />
                    <div className="hintText">
                        Scan "At a glance" first, then read examples. In
                        interviews, always explain trade-offs.
                    </div>
                </div>

                <div className="grid">
                    {sections.map((sec) => {
                        return (
                            <div key={sec.id} className="card">
                                <div className="cardHead">
                                    <div className="cardIcon">{sec.icon}</div>
                                    <div className="cardTitleWrap">
                                        <div className="cardTitle">
                                            {sec.title}
                                        </div>
                                        <div className="cardMini">
                                            Beginner notes with short examples
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
                                                        <p
                                                            key={idx}
                                                            className="p"
                                                        >
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

                                {sec.subList && (
                                    <div className="miniTable">
                                        <div className="miniTitle">
                                            {sec.subList.title}
                                        </div>
                                        <div className="rows">
                                            {sec.subList.items.map((row) => (
                                                <div
                                                    key={row.k}
                                                    className="row"
                                                >
                                                    <div className="k mono">
                                                        {row.k}
                                                    </div>
                                                    <div className="v">
                                                        {row.v}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="miniTip">
                                    <FiShield className="miniTipIcon" />
                                    <div className="miniTipText">
                                        Practical tip: always add timeouts,
                                        retries with limits, and monitoring.
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="footerNote">
                    <div className="footerIcon">
                        <FiCheckCircle />
                    </div>
                    <div className="footerText">
                        Interview tip: describe system design using components
                        like load balancer, cache, queue, database, and then
                        explain bottlenecks and trade-offs.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default SystemDesign;
