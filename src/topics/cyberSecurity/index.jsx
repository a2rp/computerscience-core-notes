import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiShield,
    FiAlertTriangle,
    FiLock,
    FiDatabase,
    FiUserCheck,
    FiCode,
    FiWifi,
    FiInfo,
    FiChevronsDown,
    FiChevronsUp,
} from "react-icons/fi";

const CyberSecurity = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                id: "owasp",
                icon: <FiAlertTriangle />,
                title: "OWASP Top 10",
                atGlance: [
                    "OWASP Top 10 lists the most critical web security risks.",
                    "It is updated periodically based on real-world vulnerability data.",
                    "Understanding it makes you interview-ready and production-aware.",
                ],
                content: [
                    {
                        h: "What is OWASP",
                        p: [
                            "OWASP stands for Open Worldwide Application Security Project.",
                            "It is a global community that publishes security standards and best practices.",
                        ],
                        example: {
                            title: "Common categories",
                            lines: [
                                "Broken access control",
                                "Cryptographic failures",
                                "Injection attacks",
                                "Security misconfiguration",
                                "Vulnerable components",
                            ],
                        },
                    },
                ],
            },

            {
                id: "xss",
                icon: <FiCode />,
                title: "XSS - Cross Site Scripting",
                atGlance: [
                    "XSS allows attackers to inject malicious scripts into web pages.",
                    "Happens when user input is rendered without proper escaping.",
                    "Main types are Stored, Reflected, and DOM-based.",
                ],
                content: [
                    {
                        h: "How XSS works",
                        p: [
                            "If a web app inserts user input directly into HTML without sanitizing it, an attacker can inject JavaScript.",
                            "The browser executes it as if it came from the trusted website.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "User submits: <script>alert('Hacked')</script>",
                                "If not escaped, the script runs in other users' browsers.",
                            ],
                        },
                    },
                    {
                        h: "Prevention",
                        p: [
                            "Escape output before rendering.",
                            "Use frameworks that auto-sanitize.",
                            "Implement Content Security Policy.",
                        ],
                    },
                ],
            },

            {
                id: "csrf",
                icon: <FiLock />,
                title: "CSRF - Cross Site Request Forgery",
                atGlance: [
                    "CSRF tricks users into performing unwanted actions.",
                    "Relies on authenticated sessions.",
                    "Uses hidden forms or malicious links.",
                ],
                content: [
                    {
                        h: "How CSRF works",
                        p: [
                            "If a user is logged into a bank site and visits a malicious site, that site can send a forged request to the bank.",
                            "Because cookies are automatically included, the bank thinks the request is valid.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Hidden form auto-submits transfer request.",
                                "Bank processes it because user session is valid.",
                            ],
                        },
                    },
                    {
                        h: "Prevention",
                        p: [
                            "Use CSRF tokens.",
                            "SameSite cookies.",
                            "Double-submit cookie strategy.",
                        ],
                    },
                ],
            },

            {
                id: "sql-injection",
                icon: <FiDatabase />,
                title: "SQL Injection",
                atGlance: [
                    "SQL Injection occurs when input is concatenated into SQL queries.",
                    "Allows attackers to read, modify, or delete database data.",
                    "Parameterized queries prevent this.",
                ],
                content: [
                    {
                        h: "How it happens",
                        p: [
                            "If user input is directly inserted into a query string, attacker can manipulate SQL logic.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Input: ' OR 1=1 --",
                                "Query becomes always true, returning all users.",
                            ],
                        },
                    },
                    {
                        h: "Prevention",
                        p: [
                            "Use prepared statements.",
                            "Use ORM frameworks safely.",
                            "Validate and sanitize inputs.",
                        ],
                    },
                ],
            },

            {
                id: "auth-flaws",
                icon: <FiUserCheck />,
                title: "Authentication Flaws",
                atGlance: [
                    "Weak passwords and poor session management cause breaches.",
                    "Broken authentication exposes user accounts.",
                    "Multi-factor authentication improves security.",
                ],
                content: [
                    {
                        h: "Common flaws",
                        p: [
                            "Weak password policies.",
                            "Session IDs not rotated.",
                            "No rate limiting on login attempts.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Brute force attack tries many passwords.",
                                "Without rate limiting, attacker eventually succeeds.",
                            ],
                        },
                    },
                    {
                        h: "Prevention",
                        p: [
                            "Hash passwords with bcrypt or Argon2.",
                            "Enable MFA.",
                            "Implement account lockout and rate limiting.",
                        ],
                    },
                ],
            },

            {
                id: "secure-coding",
                icon: <FiShield />,
                title: "Secure Coding",
                atGlance: [
                    "Security should be built into code from day one.",
                    "Validate input, sanitize output.",
                    "Follow least privilege principle.",
                ],
                content: [
                    {
                        h: "Best practices",
                        p: [
                            "Never trust user input.",
                            "Use HTTPS everywhere.",
                            "Keep dependencies updated.",
                            "Apply principle of least privilege.",
                        ],
                        example: {
                            title: "Mental model",
                            lines: [
                                "Assume attackers will try to break your app.",
                                "Design defensively.",
                            ],
                        },
                    },
                ],
            },

            {
                id: "network-attacks",
                icon: <FiWifi />,
                title: "Network Attacks",
                atGlance: [
                    "Attackers exploit network weaknesses.",
                    "Includes MITM, DDoS, and packet sniffing.",
                    "Encryption and monitoring reduce risk.",
                ],
                content: [
                    {
                        h: "Common attacks",
                        p: [
                            "Man-in-the-Middle intercepts communication.",
                            "DDoS overwhelms servers with traffic.",
                            "Packet sniffing captures unencrypted data.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Public WiFi without HTTPS allows traffic inspection.",
                            ],
                        },
                    },
                    {
                        h: "Prevention",
                        p: [
                            "Use TLS encryption.",
                            "Deploy firewalls.",
                            "Use intrusion detection systems.",
                        ],
                    },
                ],
            },
        ];
    }, []);

    return (
        <Styled.Wrapper id="cyber-security">
            <div className="top">
                <div className="titleRow">
                    <div className="titleIcon">
                        <FiShield />
                    </div>
                    <div>
                        <h2 className="title">Cyber Security</h2>
                        <p className="sub">
                            At-a-glance revision for web security, secure
                            coding, authentication, and network threats.
                        </p>
                    </div>
                </div>

                <button
                    className={open ? "toggleBtn open" : "toggleBtn"}
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? <FiChevronsUp /> : <FiChevronsDown />}
                    {open ? "Collapse" : "Expand"}
                </button>
            </div>

            <div className={open ? "content open" : "content"}>
                <div className="grid">
                    {sections.map((sec) => (
                        <div key={sec.id} className="card">
                            <div className="cardHead">
                                <div className="cardIcon">{sec.icon}</div>
                                <div className="cardTitle">{sec.title}</div>
                            </div>

                            <ul className="atGlance">
                                {sec.atGlance.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>

                            {sec.content.map((block, i) => (
                                <div key={i} className="block">
                                    <div className="blockTitle">{block.h}</div>
                                    {block.p.map((line, j) => (
                                        <p key={j}>{line}</p>
                                    ))}
                                    {block.example && (
                                        <div className="example">
                                            <div className="exTitle">
                                                {block.example.title}
                                            </div>
                                            <ul>
                                                {block.example.lines.map(
                                                    (l, k) => (
                                                        <li key={k}>{l}</li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default CyberSecurity;
