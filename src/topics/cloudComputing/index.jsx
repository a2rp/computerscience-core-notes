// src/pages/topics/cloudComputing/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiCloud,
    FiLayers,
    FiBox,
    FiCpu,
    FiZap,
    FiTrendingUp,
    FiShield,
    FiChevronsDown,
    FiChevronsUp,
    FiClock,
    FiInfo,
    FiServer,
    FiLock,
} from "react-icons/fi";

const CloudComputing = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                id: "cloud-iaas",
                icon: <FiServer />,
                title: "IaaS",
                atGlance: [
                    "Infrastructure as a Service gives you virtual machines, networking, and storage.",
                    "You manage OS, runtime, patches, and your app.",
                    "Good when you need control and custom setups.",
                ],
                content: [
                    {
                        h: "What it means",
                        p: [
                            "IaaS provides the raw building blocks like compute (VMs), storage, and networks.",
                            "You choose OS, install software, configure security, and deploy your application.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "You rent a VM, install Ubuntu, set up Nginx, deploy Node app, and manage updates yourself.",
                            ],
                        },
                    },
                    {
                        h: "When to use",
                        p: [
                            "Use IaaS when you need full control over the server environment.",
                            "Useful for custom networking, legacy systems, or special performance tuning.",
                        ],
                        example: {
                            title: "Quick trade-off",
                            lines: [
                                "More control - more responsibility for maintenance and security.",
                            ],
                        },
                    },
                ],
                subList: {
                    title: "You manage vs provider manages",
                    items: [
                        {
                            k: "You manage",
                            v: "OS, patches, runtime, app code, configs, monitoring setup",
                        },
                        {
                            k: "Provider manages",
                            v: "Physical servers, virtualization layer, data center, base networking",
                        },
                    ],
                },
            },
            {
                id: "cloud-paas",
                icon: <FiLayers />,
                title: "PaaS",
                atGlance: [
                    "Platform as a Service gives you a managed runtime to deploy apps faster.",
                    "You focus on code and app config, platform handles servers and OS.",
                    "Great for rapid development and standard web apps.",
                ],
                content: [
                    {
                        h: "What it means",
                        p: [
                            "PaaS provides a platform where you deploy code and the platform handles OS, runtime, scaling basics, and infrastructure.",
                            "You configure environment variables, deployment settings, and app resources.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "You push your app, platform builds and runs it, handles HTTPS, restarts, and basic scaling.",
                            ],
                        },
                    },
                    {
                        h: "When to use",
                        p: [
                            "Use PaaS when you want faster deployment without managing servers.",
                            "Best for APIs, web apps, and standard workloads.",
                        ],
                        example: {
                            title: "Quick trade-off",
                            lines: [
                                "Less server control - faster shipping and easier ops.",
                            ],
                        },
                    },
                ],
                subList: {
                    title: "You manage vs provider manages",
                    items: [
                        {
                            k: "You manage",
                            v: "App code, app settings, env variables, database usage patterns",
                        },
                        {
                            k: "Provider manages",
                            v: "OS, runtime, patching, underlying infra, typical autoscaling hooks",
                        },
                    ],
                },
            },
            {
                id: "cloud-saas",
                icon: <FiBox />,
                title: "SaaS",
                atGlance: [
                    "Software as a Service is a ready product delivered over the internet.",
                    "You just use it, provider manages everything.",
                    "Best when you need a tool, not a platform.",
                ],
                content: [
                    {
                        h: "What it means",
                        p: [
                            "SaaS is a complete application delivered to users.",
                            "You do not manage infrastructure or runtime. You only configure usage and permissions.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Email service, project management tools, analytics dashboards, CRM systems.",
                            ],
                        },
                    },
                    {
                        h: "When to use",
                        p: [
                            "Use SaaS when you need a business capability quickly.",
                            "It saves time and reduces engineering overhead for non-core problems.",
                        ],
                        example: {
                            title: "Quick trade-off",
                            lines: [
                                "Fast adoption - less customization and less control.",
                            ],
                        },
                    },
                ],
                subList: {
                    title: "You manage vs provider manages",
                    items: [
                        {
                            k: "You manage",
                            v: "Users, roles, permissions, configuration and workflows",
                        },
                        {
                            k: "Provider manages",
                            v: "Everything else including app, updates, infra, security controls",
                        },
                    ],
                },
            },
            {
                id: "cloud-virtualization",
                icon: <FiCpu />,
                title: "Virtualization",
                atGlance: [
                    "Virtualization lets one physical machine run many virtual machines.",
                    "Hypervisor creates isolated VMs with their own OS.",
                    "Foundation of most IaaS systems.",
                ],
                content: [
                    {
                        h: "Core idea",
                        p: [
                            "A hypervisor slices CPU, memory, and storage to create multiple VMs.",
                            "Each VM runs its own OS and behaves like a real machine.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "One physical server runs 20 VMs, each hosting different applications.",
                            ],
                        },
                    },
                    {
                        h: "Why it matters",
                        p: [
                            "Improves hardware utilization and isolation.",
                            "Allows flexible provisioning, snapshots, and migration of workloads.",
                        ],
                        example: {
                            title: "Mental model",
                            lines: [
                                "VM is a full computer inside your computer.",
                            ],
                        },
                    },
                ],
            },
            {
                id: "cloud-containers",
                icon: <FiBox />,
                title: "Containers",
                atGlance: [
                    "Containers package app plus dependencies into a single unit.",
                    "They share the host OS kernel, so they are lighter than VMs.",
                    "Great for portability and consistent deployments.",
                ],
                content: [
                    {
                        h: "Core idea",
                        p: [
                            "Containers isolate apps using OS-level features while sharing the same kernel.",
                            "They start fast and consume fewer resources than VMs.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Docker image contains Node app, dependencies, and config. Runs the same on laptop and cloud.",
                            ],
                        },
                    },
                    {
                        h: "Containers vs VMs",
                        p: [
                            "VM includes full OS. Container shares OS kernel.",
                            "VM isolation is stronger, container is lighter and faster.",
                        ],
                        example: {
                            title: "Quick compare",
                            lines: [
                                "VM - heavier, strong isolation",
                                "Container - lighter, faster startup",
                            ],
                        },
                    },
                ],
                subList: {
                    title: "Why containers are loved",
                    items: [
                        { k: "Portability", v: "Same image runs everywhere" },
                        {
                            k: "Consistency",
                            v: "Dev, staging, production behave similarly",
                        },
                        {
                            k: "Speed",
                            v: "Fast startup and efficient resource usage",
                        },
                    ],
                },
            },
            {
                id: "cloud-serverless",
                icon: <FiZap />,
                title: "Serverless",
                atGlance: [
                    "You deploy functions, cloud runs them on demand.",
                    "You do not manage servers, scaling happens automatically.",
                    "Best for event-driven tasks and APIs with bursts.",
                ],
                content: [
                    {
                        h: "Core idea",
                        p: [
                            "Serverless means you write function code and the provider handles execution, scaling, and infrastructure.",
                            "Billing is often based on usage, not always-on servers.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "An API endpoint runs as a function. It wakes up when called and scales when traffic increases.",
                            ],
                        },
                    },
                    {
                        h: "Trade-offs",
                        p: [
                            "Cold start can add latency when the function is idle.",
                            "You must design for stateless behavior and external state storage.",
                        ],
                        example: {
                            title: "Quick trade-off",
                            lines: [
                                "Low ops - watch out for cold start and limits.",
                            ],
                        },
                    },
                ],
            },
            {
                id: "cloud-scaling",
                icon: <FiTrendingUp />,
                title: "Scaling strategies",
                atGlance: [
                    "Scale up means bigger machine. Scale out means more machines.",
                    "Autoscaling reacts to metrics like CPU, memory, request rate.",
                    "Caching and queues help handle spikes safely.",
                ],
                content: [
                    {
                        h: "Vertical scaling (scale up)",
                        p: [
                            "Increase resources of a single machine like CPU or RAM.",
                            "Simple but has limits and can require downtime.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Upgrade server from 2 CPU to 8 CPU when load grows.",
                            ],
                        },
                    },
                    {
                        h: "Horizontal scaling (scale out)",
                        p: [
                            "Add more instances and distribute load using a load balancer.",
                            "More reliable and scalable for big traffic.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Run 10 app instances behind a load balancer instead of 1 huge server.",
                            ],
                        },
                    },
                    {
                        h: "Support tools",
                        p: [
                            "Caching reduces repeated work and database load.",
                            "Queues smooth traffic spikes by buffering jobs.",
                            "CDNs speed up content delivery for global users.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Use cache for product list, queue for sending emails, CDN for images.",
                            ],
                        },
                    },
                ],
                subList: {
                    title: "Scaling checklist",
                    items: [
                        {
                            k: "Stateless services",
                            v: "Store sessions in shared storage or tokens",
                        },
                        {
                            k: "Health checks",
                            v: "Load balancer removes unhealthy instances",
                        },
                        {
                            k: "Rate limiting",
                            v: "Protect against abuse and sudden spikes",
                        },
                    ],
                },
            },
            {
                id: "cloud-security",
                icon: <FiShield />,
                title: "Cloud security",
                atGlance: [
                    "Security is shared responsibility between you and provider.",
                    "Identity and access control is the first line of defense.",
                    "Encryption + monitoring reduce risk and blast radius.",
                ],
                content: [
                    {
                        h: "Shared responsibility model",
                        p: [
                            "Provider secures the physical data center and core cloud services.",
                            "You secure your data, identity access, configurations, and app-level security.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "If your storage bucket is public by mistake, that is on you, not the provider.",
                            ],
                        },
                    },
                    {
                        h: "Identity and access management",
                        p: [
                            "Use least privilege. Give minimal permissions required for each role.",
                            "Use separate environments, rotate keys, and avoid long-lived secrets in code.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Backend service account can read one bucket only, not full admin access.",
                            ],
                        },
                    },
                    {
                        h: "Encryption and monitoring",
                        p: [
                            "Encrypt data at rest and in transit.",
                            "Enable logs and alerts for unusual access patterns.",
                            "Use network segmentation and firewall rules to reduce exposure.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "TLS for API traffic, encryption for database storage, alerts for failed logins.",
                            ],
                        },
                    },
                ],
                subList: {
                    title: "Common security checks",
                    items: [
                        {
                            k: "Public access",
                            v: "Ensure storage and databases are not publicly exposed",
                        },
                        {
                            k: "Secrets",
                            v: "Use secret manager, do not hardcode keys",
                        },
                        {
                            k: "Network rules",
                            v: "Restrict inbound traffic to only required ports",
                        },
                        {
                            k: "Backups",
                            v: "Enable backups and test recovery",
                        },
                    ],
                },
                callout: {
                    icon: <FiLock />,
                    title: "Practical mindset",
                    lines: [
                        "Assume misconfigurations will happen.",
                        "Reduce blast radius using least privilege and network segmentation.",
                        "Detect fast with logs and alerts.",
                    ],
                },
            },
        ];
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="cloud-computing">
            <div className="top">
                <div className="titleRow">
                    <div className="titleIcon">
                        <FiCloud />
                    </div>
                    <div className="titleText">
                        <h2 className="title">Cloud Computing</h2>
                        <p className="sub">
                            At-a-glance revision notes for cloud models,
                            deployment styles, scaling, and security basics.
                        </p>
                    </div>
                </div>

                <button
                    type="button"
                    className={open ? "toggleBtn open" : "toggleBtn"}
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="cloud-content"
                    title={open ? "Collapse Cloud notes" : "Expand Cloud notes"}
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
                id="cloud-content"
                className={open ? "content open" : "content"}
            >
                <div className="hintBar">
                    <FiClock className="hintIcon" />
                    <div className="hintText">
                        Scan the "At a glance" bullets first. Then read examples
                        for real understanding.
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
                            </div>
                        );
                    })}
                </div>

                <div className="footerNote">
                    <div className="footerIcon">
                        <FiInfo />
                    </div>
                    <div className="footerText">
                        Interview tip - Always explain cloud choices using
                        trade-offs like control vs convenience, cost vs
                        performance, and security vs speed.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default CloudComputing;
