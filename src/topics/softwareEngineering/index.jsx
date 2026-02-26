// src/pages/topics/softwareEngineering/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiTool,
    FiChevronsDown,
    FiChevronsUp,
    FiInfo,
    FiClock,
    FiGitBranch,
    FiRepeat,
    FiUsers,
    FiCheckCircle,
    FiPlayCircle,
    FiShield,
    FiEdit3,
    FiBookOpen,
    FiAlertTriangle,
    FiTrendingUp,
} from "react-icons/fi";

const SoftwareEngineering = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                id: "se-sdlc",
                icon: <FiRepeat />,
                title: "SDLC models",
                atGlance: [
                    "SDLC is the step-by-step process to build and maintain software.",
                    "Different models fit different risk levels and project clarity.",
                    "Pick model based on uncertainty, compliance needs, and speed.",
                ],
                content: [
                    {
                        h: "What is SDLC",
                        p: [
                            "SDLC stands for Software Development Life Cycle.",
                            "It describes how a product moves from idea to development, testing, release, and maintenance.",
                            "A clear SDLC reduces chaos and makes delivery predictable.",
                        ],
                        example: {
                            title: "Typical phases",
                            lines: [
                                "Requirements - What problem to solve",
                                "Design - How to solve it",
                                "Implementation - Build it",
                                "Testing - Verify it",
                                "Deployment - Release it",
                                "Maintenance - Fix and improve",
                            ],
                        },
                    },
                    {
                        h: "Common SDLC models",
                        p: [
                            "Waterfall: linear phases. Good when requirements are stable and compliance-heavy.",
                            "Iterative: build in repeated cycles, learn, improve.",
                            "Incremental: deliver feature chunks over time.",
                            "Spiral: iterative with strong risk analysis each cycle.",
                        ],
                        example: {
                            title: "When to use",
                            lines: [
                                "Waterfall - government or compliance projects with fixed scope",
                                "Iterative - product development with changing requirements",
                                "Spiral - high risk systems like safety or financial systems",
                            ],
                        },
                    },
                ],
                subList: {
                    title: "Model quick compare",
                    items: [
                        {
                            k: "Waterfall",
                            v: "Simple planning, slower feedback, expensive changes later.",
                        },
                        {
                            k: "Iterative",
                            v: "Fast feedback, improves over cycles, needs good planning discipline.",
                        },
                        {
                            k: "Incremental",
                            v: "Ship in parts, reduces risk, requires solid integration strategy.",
                        },
                        {
                            k: "Spiral",
                            v: "Risk-first approach, good for complex systems, heavier process.",
                        },
                    ],
                },
            },

            {
                id: "se-agile",
                icon: <FiTrendingUp />,
                title: "Agile",
                atGlance: [
                    "Agile is a mindset for fast feedback and continuous improvement.",
                    "Deliver small increments, learn from users, and adapt quickly.",
                    "Works best when requirements evolve and teams collaborate closely.",
                ],
                content: [
                    {
                        h: "Agile basics",
                        p: [
                            "Agile focuses on short cycles, frequent delivery, and reacting to change instead of rigid long-term plans.",
                            "Agile is not just meetings. It is about measurable delivery and feedback loops.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Instead of planning 6 months and launching once, ship every 1 to 2 weeks and improve using real user feedback.",
                            ],
                        },
                    },
                    {
                        h: "Key Agile ideas",
                        p: [
                            "Small batches: deliver small features quickly.",
                            "Transparency: everyone knows progress and blockers.",
                            "Continuous improvement: regularly improve process and code.",
                        ],
                        example: {
                            title: "Quick mental model",
                            lines: [
                                "Agile is like steering a bike with frequent small corrections, not like steering a ship with one huge turn.",
                            ],
                        },
                    },
                ],
            },

            {
                id: "se-scrum",
                icon: <FiUsers />,
                title: "Scrum",
                atGlance: [
                    "Scrum is a popular Agile framework with sprints and roles.",
                    "Sprints are short fixed-time cycles with a clear goal.",
                    "Daily sync keeps blockers visible and progress real.",
                ],
                content: [
                    {
                        h: "Scrum roles",
                        p: [
                            "Product Owner: owns priority and product direction.",
                            "Scrum Master: removes blockers and protects process.",
                            "Development Team: builds and delivers increment.",
                        ],
                        example: {
                            title: "Simple example",
                            lines: [
                                "PO says: build login first.",
                                "Team estimates and commits to sprint goal.",
                                "Scrum Master helps remove dependency or delay.",
                            ],
                        },
                    },
                    {
                        h: "Scrum events",
                        p: [
                            "Sprint planning: choose work for sprint.",
                            "Daily scrum: short daily sync.",
                            "Sprint review: demo what is done.",
                            "Sprint retrospective: improve the process.",
                        ],
                        example: {
                            title: "Why it works",
                            lines: [
                                "Because it forces regular delivery and honest reflection.",
                            ],
                        },
                    },
                ],
                subList: {
                    title: "Scrum terms",
                    items: [
                        {
                            k: "Sprint",
                            v: "Fixed time box, often 1 to 2 weeks, focused delivery window.",
                        },
                        {
                            k: "Backlog",
                            v: "Ordered list of work items.",
                        },
                        {
                            k: "Increment",
                            v: "Potentially shippable output at sprint end.",
                        },
                        {
                            k: "Definition of Done",
                            v: "Clear checklist for when work is considered complete.",
                        },
                    ],
                },
            },

            {
                id: "se-version-control",
                icon: <FiGitBranch />,
                title: "Version control",
                atGlance: [
                    "Version control tracks changes and enables safe collaboration.",
                    "Branches allow parallel work without breaking main line.",
                    "Good commit history reduces debugging pain later.",
                ],
                content: [
                    {
                        h: "Why version control matters",
                        p: [
                            "It keeps a history of changes, so you can roll back mistakes and understand what changed.",
                            "It supports collaboration by merging work from multiple people safely.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "A bug appears today. You use git blame and commit history to find the exact change that caused it.",
                            ],
                        },
                    },
                    {
                        h: "Branching and merging basics",
                        p: [
                            "Branch is an isolated line of development.",
                            "Merge combines changes from branches.",
                            "Pull request is a review step before merging.",
                        ],
                        example: {
                            title: "Healthy workflow",
                            lines: [
                                "main stays stable",
                                "feature branch for each task",
                                "PR review before merge",
                            ],
                        },
                    },
                ],
            },

            {
                id: "se-testing",
                icon: <FiCheckCircle />,
                title: "Testing types",
                atGlance: [
                    "Testing reduces risk and increases confidence in changes.",
                    "Different tests catch different failures at different cost.",
                    "Aim for fast feedback with unit tests, plus coverage with integration tests.",
                ],
                content: [
                    {
                        h: "Testing overview",
                        p: [
                            "Testing verifies expected behavior and prevents regressions.",
                            "A good test strategy balances speed, coverage, and maintainability.",
                        ],
                        example: {
                            title: "Key idea",
                            lines: [
                                "Unit tests are fast and cheap.",
                                "End-to-end tests are slow and expensive but catch real user flows.",
                            ],
                        },
                    },
                ],
                subList: {
                    title: "Common testing types",
                    items: [
                        {
                            k: "Unit testing",
                            v: "Test a small function or module in isolation.",
                        },
                        {
                            k: "Integration testing",
                            v: "Test multiple modules together like API + DB.",
                        },
                        {
                            k: "End-to-end testing",
                            v: "Test full user flow like login -> checkout.",
                        },
                        {
                            k: "Regression testing",
                            v: "Ensure old features still work after changes.",
                        },
                        {
                            k: "Smoke testing",
                            v: "Quick check that the app starts and core paths work.",
                        },
                        {
                            k: "Performance testing",
                            v: "Measure speed, throughput, latency under load.",
                        },
                        {
                            k: "Security testing",
                            v: "Check vulnerabilities like injection and auth flaws.",
                        },
                    ],
                },
            },

            {
                id: "se-cicd",
                icon: <FiPlayCircle />,
                title: "CI/CD basics",
                atGlance: [
                    "CI means automatically building and testing changes.",
                    "CD means automatically delivering changes to environments.",
                    "Automation reduces human mistakes and speeds delivery.",
                ],
                content: [
                    {
                        h: "CI and CD",
                        p: [
                            "Continuous Integration means every push triggers build and tests.",
                            "Continuous Delivery means changes are always ready to deploy.",
                            "Continuous Deployment means changes go live automatically after passing checks.",
                        ],
                        example: {
                            title: "Example pipeline",
                            lines: [
                                "push to repo",
                                "run lint + tests",
                                "build",
                                "deploy to staging",
                                "optional approval",
                                "deploy to production",
                            ],
                        },
                    },
                    {
                        h: "Why CI/CD matters",
                        p: [
                            "It catches bugs early, reduces integration problems, and speeds release cycles.",
                            "It also enforces consistent checks across the team.",
                        ],
                        example: {
                            title: "Real-world win",
                            lines: [
                                "Without CI, bugs pile up and integration becomes painful near release time.",
                            ],
                        },
                    },
                ],
            },

            {
                id: "se-code-reviews",
                icon: <FiShield />,
                title: "Code reviews",
                atGlance: [
                    "Code reviews improve quality and reduce bugs.",
                    "They are also knowledge sharing and consistency enforcement.",
                    "Best reviews focus on correctness, readability, and maintainability.",
                ],
                content: [
                    {
                        h: "What to check in a review",
                        p: [
                            "Correctness: does it do what it claims.",
                            "Edge cases: nulls, errors, retries, timeouts.",
                            "Readability: naming, structure, clear intent.",
                            "Security: input validation, auth checks.",
                            "Performance: avoid accidental O(n^2) and unnecessary calls.",
                        ],
                        example: {
                            title: "Example comment style",
                            lines: [
                                "Instead of saying 'wrong', say 'this can fail when input is empty, add a guard'.",
                            ],
                        },
                    },
                    {
                        h: "Review anti-patterns",
                        p: [
                            "Only style nitpicks and ignoring logic issues.",
                            "Huge PRs that are impossible to review properly.",
                            "Personal attacks or unclear feedback.",
                        ],
                        example: {
                            title: "Healthy practice",
                            lines: [
                                "Small PRs, clear descriptions, and objective feedback.",
                            ],
                        },
                    },
                ],
            },

            {
                id: "se-documentation",
                icon: <FiBookOpen />,
                title: "Documentation",
                atGlance: [
                    "Docs reduce onboarding time and prevent repeated mistakes.",
                    "Good docs explain why, not just what.",
                    "Keep docs close to code and update them with changes.",
                ],
                content: [
                    {
                        h: "What to document",
                        p: [
                            "Setup steps, environment variables, and run commands.",
                            "Architecture overview and key decisions.",
                            "API contracts and error handling rules.",
                            "Deployment steps and rollback strategy.",
                        ],
                        example: {
                            title: "Example docs",
                            lines: [
                                "README for quick start",
                                "ADR for decision logs",
                                "API docs for endpoints and payloads",
                            ],
                        },
                    },
                    {
                        h: "Common doc mistakes",
                        p: [
                            "Docs that go stale because they are not maintained.",
                            "Docs that are too long but still miss critical info.",
                            "Docs that explain commands but not the reasoning.",
                        ],
                        example: {
                            title: "Rule",
                            lines: [
                                "If docs do not match reality, developers stop trusting them.",
                            ],
                        },
                    },
                ],
            },

            {
                id: "se-technical-debt",
                icon: <FiAlertTriangle />,
                title: "Technical debt",
                atGlance: [
                    "Tech debt is future cost caused by shortcuts today.",
                    "Not all debt is bad if it is planned and paid back.",
                    "Uncontrolled debt slows development and increases bugs.",
                ],
                content: [
                    {
                        h: "What is technical debt",
                        p: [
                            "Technical debt is the long-term cost of quick fixes, messy architecture, missing tests, or rushed decisions.",
                            "It usually shows up as slower delivery, higher bug rate, and fear of changing code.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Hardcoding values to ship quickly works today, but later every change becomes risky and slow.",
                            ],
                        },
                    },
                    {
                        h: "How to manage it",
                        p: [
                            "Track debt like a backlog item, not like a hidden problem.",
                            "Refactor in small steps, with tests.",
                            "Set a rule: every sprint allocate time to pay debt.",
                        ],
                        example: {
                            title: "Simple tactic",
                            lines: [
                                "When you touch a messy file, improve one small part while keeping behavior same.",
                            ],
                        },
                    },
                ],
                callout: {
                    icon: <FiInfo />,
                    title: "Quick warning signs",
                    lines: [
                        "Developers avoid touching certain files.",
                        "Build times and deploy times keep increasing.",
                        "Small changes break unrelated features.",
                        "Same bugs keep coming back.",
                    ],
                },
            },
        ];
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="software-engineering">
            <div className="top">
                <div className="titleRow">
                    <div className="titleIcon">
                        <FiTool />
                    </div>
                    <div className="titleText">
                        <h2 className="title">Software Engineering</h2>
                        <p className="sub">
                            At-a-glance revision notes for SDLC, Agile, Scrum,
                            Git workflows, testing, CI/CD, reviews, docs, and
                            technical debt.
                        </p>
                    </div>
                </div>

                <button
                    type="button"
                    className={open ? "toggleBtn open" : "toggleBtn"}
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="se-content"
                    title={
                        open
                            ? "Collapse Software Engineering notes"
                            : "Expand Software Engineering notes"
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

            <div id="se-content" className={open ? "content open" : "content"}>
                <div className="hintBar">
                    <FiClock className="hintIcon" />
                    <div className="hintText">
                        Scan the "At a glance" bullets first. Use examples to
                        lock the idea into memory.
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
                        <FiEdit3 />
                    </div>
                    <div className="footerText">
                        Interview tip - Talk like an engineer. Mention
                        trade-offs like speed vs safety, quality vs time, and
                        automation vs manual risk.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default SoftwareEngineering;
