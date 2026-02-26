// src/pages/topics/dbms/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiDatabase,
    FiLayers,
    FiGrid,
    FiCode,
    FiShuffle,
    FiShield,
    FiRepeat,
    FiLock,
    FiGitBranch,
    FiTrendingUp,
    FiChevronsDown,
    FiChevronsUp,
    FiInfo,
    FiActivity,
} from "react-icons/fi";

const Dbms = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                id: "dbms-fundamentals",
                icon: <FiDatabase />,
                title: "Fundamentals",
                atGlance: [
                    "DBMS stores data safely and lets you query it efficiently.",
                    "A database is the data, DBMS is the software managing it.",
                    "ACID makes transactions reliable even with failures.",
                ],
                content: [
                    {
                        h: "What is DBMS",
                        p: [
                            "DBMS stands for Database Management System. It is software that stores data, organizes it, and provides a safe way to read and write it.",
                            "It handles data consistency, security, backup, concurrency, and performance so apps do not reinvent these problems.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "A shopping app uses a DBMS to store users, products, orders, and payments.",
                                "DBMS ensures two users can place orders at the same time without corrupting stock counts.",
                            ],
                        },
                    },
                    {
                        h: "Types of databases",
                        p: [
                            "Databases can be relational or non-relational depending on how they store and query data.",
                            "Each type is good for certain workloads and trade-offs.",
                        ],
                        example: {
                            title: "Common types",
                            lines: [
                                "Relational (SQL): tables, strict schema, strong consistency",
                                "Document: JSON-like documents, flexible schema",
                                "Key-Value: fast lookups by key",
                                "Columnar: analytics and reporting",
                                "Graph: relationships and traversals",
                            ],
                        },
                    },
                    {
                        h: "ACID properties",
                        p: [
                            "ACID describes reliability rules for transactions.",
                            "Transactions are groups of operations that should behave like one unit of work.",
                        ],
                        example: {
                            title: "ACID in one line each",
                            lines: [
                                "Atomicity: all-or-nothing",
                                "Consistency: rules remain true",
                                "Isolation: transactions do not break each other",
                                "Durability: committed data survives crashes",
                            ],
                        },
                    },
                ],
            },

            {
                id: "dbms-data-models",
                icon: <FiLayers />,
                title: "Data Models",
                atGlance: [
                    "Relational model stores data in tables with rows and columns.",
                    "ER model is a design tool to plan tables and relationships.",
                    "Modeling decides clarity and future flexibility.",
                ],
                content: [
                    {
                        h: "Relational model",
                        p: [
                            "Data is stored in relations (tables). Rows are records, columns are attributes.",
                            "Relationships are represented using keys and constraints.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Users(id, name)",
                                "Orders(id, userId, total)",
                                "Orders.userId references Users.id",
                            ],
                        },
                    },
                    {
                        h: "ER model",
                        p: [
                            "ER model stands for Entity-Relationship model.",
                            "It is used during design to map entities, attributes, and relationships before writing SQL tables.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Entity: Student",
                                "Entity: Course",
                                "Relationship: Student enrolls in Course",
                            ],
                        },
                    },
                ],
            },

            {
                id: "dbms-sql",
                icon: <FiCode />,
                title: "SQL",
                atGlance: [
                    "DDL defines structure, DML manipulates data.",
                    "Joins combine rows from multiple tables.",
                    "Indexes speed reads but cost extra writes and storage.",
                ],
                content: [],
                subList: {
                    title: "SQL essentials",
                    items: [
                        {
                            k: "DDL",
                            v: "Data Definition Language. Used to create or change schema. Example: CREATE, ALTER, DROP.",
                        },
                        {
                            k: "DML",
                            v: "Data Manipulation Language. Used to read and modify data. Example: SELECT, INSERT, UPDATE, DELETE.",
                        },
                        {
                            k: "Joins",
                            v: "Combine rows across tables using a condition. Common: INNER, LEFT, RIGHT, FULL (DB dependent).",
                        },
                        {
                            k: "Indexes",
                            v: "Extra data structure to speed up reads. Great for WHERE and JOIN keys.",
                        },
                        {
                            k: "Constraints",
                            v: "Rules to keep data valid. Examples: PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK.",
                        },
                    ],
                },
                callout: {
                    icon: <FiInfo />,
                    title: "Beginner join intuition",
                    lines: [
                        "INNER JOIN returns only matches.",
                        "LEFT JOIN returns all left rows and matches from right, missing becomes NULL.",
                        "Most real bugs come from wrong join key or missing indexes on join columns.",
                    ],
                },
            },

            {
                id: "dbms-normalization",
                icon: <FiGrid />,
                title: "Normalization",
                atGlance: [
                    "Normalization reduces redundancy and update bugs.",
                    "It splits tables so one fact lives in one place.",
                    "BCNF is a stronger form of 3NF.",
                ],
                content: [],
                subList: {
                    title: "Normal forms",
                    items: [
                        {
                            k: "1NF",
                            v: "Atomic values. No repeating groups. Each cell holds a single value.",
                        },
                        {
                            k: "2NF",
                            v: "No partial dependency on a composite key. Every non-key depends on full key.",
                        },
                        {
                            k: "3NF",
                            v: "No transitive dependency. Non-key should not depend on another non-key.",
                        },
                        {
                            k: "BCNF",
                            v: "For every dependency X -> Y, X should be a super key. Stronger than 3NF.",
                        },
                    ],
                },
                exampleBox: {
                    title: "Quick example",
                    lines: [
                        "Bad: Orders(orderId, userName, userPhone, total)",
                        "Better: Users(userId, name, phone) and Orders(orderId, userId, total)",
                        "Now updating phone happens in one place only.",
                    ],
                },
            },

            {
                id: "dbms-transactions",
                icon: <FiRepeat />,
                title: "Transactions",
                atGlance: [
                    "Isolation decides how much transactions can see each other.",
                    "Locking prevents conflicts but can reduce concurrency.",
                    "Deadlocks happen when locks form a cycle.",
                ],
                content: [],
                subList: {
                    title: "Transaction building blocks",
                    items: [
                        {
                            k: "Isolation levels",
                            v: "Rules for visibility between transactions. Lower isolation is faster but can show anomalies.",
                        },
                        {
                            k: "Locking",
                            v: "Shared locks for reads, exclusive locks for writes. Used to protect data correctness.",
                        },
                        {
                            k: "Deadlock",
                            v: "Two transactions each wait for a lock held by the other. DB detects and aborts one.",
                        },
                    ],
                },
                callout: {
                    icon: <FiLock />,
                    title: "Practical deadlock reduction",
                    lines: [
                        "Lock rows in a consistent order in all code paths.",
                        "Keep transactions short, do not hold locks while calling external services.",
                        "Use proper indexes so queries lock fewer rows.",
                    ],
                },
            },

            {
                id: "dbms-indexing",
                icon: <FiGitBranch />,
                title: "Indexing",
                atGlance: [
                    "Indexes trade storage and write cost for faster reads.",
                    "B Tree and B+ Tree handle range queries well.",
                    "Hash indexing is great for exact match lookups.",
                ],
                content: [],
                subList: {
                    title: "Index types",
                    items: [
                        {
                            k: "B Tree",
                            v: "Balanced tree. Good general-purpose index structure. Supports range queries.",
                        },
                        {
                            k: "B+ Tree",
                            v: "Leaf nodes contain sorted data pointers and are linked. Very efficient for range scans.",
                        },
                        {
                            k: "Hash indexing",
                            v: "Fast equality lookups like key = value. Not ideal for range queries like BETWEEN.",
                        },
                    ],
                },
                exampleBox: {
                    title: "Index intuition",
                    lines: [
                        "WHERE email = 'x' benefits from hash or B+ tree.",
                        "WHERE createdAt BETWEEN ... benefits strongly from B+ tree.",
                        "Too many indexes make writes slower because DB must update all indexes on insert or update.",
                    ],
                },
            },

            {
                id: "dbms-query-optimization",
                icon: <FiTrendingUp />,
                title: "Query Optimization",
                atGlance: [
                    "DB chooses a plan to execute SQL efficiently.",
                    "Execution plan shows how DB will scan, join, and filter.",
                    "Cost estimation picks the cheapest plan based on stats.",
                ],
                content: [],
                subList: {
                    title: "Optimization basics",
                    items: [
                        {
                            k: "Execution plan",
                            v: "Step-by-step strategy DB uses. Examples: index scan, full table scan, hash join, nested loop.",
                        },
                        {
                            k: "Cost estimation",
                            v: "DB guesses runtime cost using table size, indexes, and statistics to choose the best plan.",
                        },
                    ],
                },
                callout: {
                    icon: <FiActivity />,
                    title: "Beginner debugging steps",
                    lines: [
                        "Check if WHERE and JOIN columns are indexed.",
                        "Avoid SELECT * in heavy queries.",
                        "Look for full table scans on big tables.",
                        "Reduce rows early using filters before joins.",
                    ],
                },
            },
        ];
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="dbms">
            <div className="top">
                <div className="titleRow">
                    <div className="titleIcon">
                        <FiDatabase />
                    </div>
                    <div className="titleText">
                        <h2 className="title">DBMS</h2>
                        <p className="sub">
                            At-a-glance revision notes for DBMS fundamentals -
                            models, SQL, normalization, transactions, indexing,
                            and optimization.
                        </p>
                    </div>
                </div>

                <button
                    type="button"
                    className={open ? "toggleBtn open" : "toggleBtn"}
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="dbms-content"
                    title={open ? "Collapse DBMS notes" : "Expand DBMS notes"}
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
                id="dbms-content"
                className={open ? "content open" : "content"}
            >
                <div className="hintBar">
                    <FiShuffle className="hintIcon" />
                    <div className="hintText">
                        Start with "At a glance", then read examples. This is
                        designed for quick revision before interviews.
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
                                            Quick revision and beginner
                                            intuition
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

                                {sec.exampleBox && (
                                    <div className="exampleBox">
                                        <div className="exbTitle">
                                            {sec.exampleBox.title}
                                        </div>
                                        <ul className="exbList">
                                            {sec.exampleBox.lines.map(
                                                (x, i) => (
                                                    <li
                                                        key={i}
                                                        className="mono"
                                                    >
                                                        {x}
                                                    </li>
                                                ),
                                            )}
                                        </ul>
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
                        <FiShield />
                    </div>
                    <div className="footerText">
                        Interview tip - Always connect DBMS answers to
                        trade-offs like consistency vs availability, indexes vs
                        write cost, and isolation vs performance.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Dbms;
