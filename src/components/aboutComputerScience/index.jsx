// src/components/aboutComputerScience/index.jsx
import React from "react";
import { Styled } from "./styled";
import {
    FiCpu,
    FiCloud,
    FiDatabase,
    FiGlobe,
    FiShield,
    FiLayers,
    FiActivity,
} from "react-icons/fi";

const AboutComputerScience = () => {
    return (
        <Styled.Wrapper id="about-computer-science">
            <Styled.Container>
                <div className="top">
                    <div className="badgeRow">
                        <span className="badge">
                            <FiActivity />
                            Core Notes
                        </span>

                        <span className="badge ghost">
                            <FiLayers />
                            At-a-glance revision
                        </span>
                    </div>

                    <h2 className="title">Computer Science</h2>

                    <p className="sub">
                        Computer Science is not just writing programs. It is the
                        study of how computation works across layers - hardware,
                        OS, networks, databases, distributed systems, and
                        scalable architectures.
                    </p>
                </div>

                <div className="grid">
                    <div className="card">
                        <div className="cardHead">
                            <span className="icon">
                                <FiCpu />
                            </span>
                            <div className="headText">
                                <div className="cardTitle">
                                    System-level thinking
                                </div>
                                <div className="cardMini">
                                    Mental models over memorization
                                </div>
                            </div>
                        </div>

                        <p className="p">
                            These notes focus on how systems behave in real
                            life. Scheduling, memory, concurrency, I/O and the
                            trade-offs that decide performance and safety.
                        </p>

                        <div className="chips">
                            <span className="chip">Processes</span>
                            <span className="chip">Threads</span>
                            <span className="chip">Scheduling</span>
                            <span className="chip">Memory</span>
                            <span className="chip">Deadlocks</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="cardHead">
                            <span className="icon">
                                <FiGlobe />
                            </span>
                            <div className="headText">
                                <div className="cardTitle">
                                    Data moving across networks
                                </div>
                                <div className="cardMini">
                                    Protocols and latency intuition
                                </div>
                            </div>
                        </div>

                        <p className="p">
                            Understand how packets move, why TCP behaves the way
                            it does, what DNS really does, and how latency and
                            bandwidth impact system design decisions.
                        </p>

                        <div className="chips">
                            <span className="chip">OSI</span>
                            <span className="chip">TCP</span>
                            <span className="chip">UDP</span>
                            <span className="chip">HTTP</span>
                            <span className="chip">DNS</span>
                            <span className="chip">TLS</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="cardHead">
                            <span className="icon">
                                <FiDatabase />
                            </span>
                            <div className="headText">
                                <div className="cardTitle">
                                    Databases and correctness
                                </div>
                                <div className="cardMini">
                                    Transactions, indexing, consistency
                                </div>
                            </div>
                        </div>

                        <p className="p">
                            Learn how data is stored and retrieved efficiently.
                            Indexes, normalization, transactions, isolation
                            levels, and why ACID is not just theory.
                        </p>

                        <div className="chips">
                            <span className="chip">SQL</span>
                            <span className="chip">Joins</span>
                            <span className="chip">Indexes</span>
                            <span className="chip">ACID</span>
                            <span className="chip">Locks</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="cardHead">
                            <span className="icon">
                                <FiCloud />
                            </span>
                            <div className="headText">
                                <div className="cardTitle">
                                    Scale and architecture
                                </div>
                                <div className="cardMini">
                                    Reliability under real load
                                </div>
                            </div>
                        </div>

                        <p className="p">
                            System design is about trade-offs. Caching,
                            replication, sharding, queues, load balancing and
                            choosing the simplest architecture that meets the
                            requirements.
                        </p>

                        <div className="chips">
                            <span className="chip">Caching</span>
                            <span className="chip">Sharding</span>
                            <span className="chip">Queues</span>
                            <span className="chip">CDN</span>
                            <span className="chip">LB</span>
                        </div>
                    </div>
                </div>

                <div className="callout">
                    <div className="callHead">
                        <span className="callIcon">
                            <FiShield />
                        </span>
                        <div className="callTitle">
                            What you get from this project
                        </div>
                    </div>

                    <ul className="callList">
                        <li>
                            Interview-ready revision with clean structure and
                            fast scanning
                        </li>
                        <li>
                            Strong mental models for debugging and performance
                            thinking
                        </li>
                        <li>
                            Clear trade-offs: latency vs throughput, safety vs
                            speed, isolation vs sharing
                        </li>
                        <li>
                            Practical system intuition for real-world software
                            engineering
                        </li>
                    </ul>
                </div>
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default AboutComputerScience;
