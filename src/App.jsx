import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import AboutComputerScience from "./components/aboutComputerScience";

const OperatingSystems = lazy(() => import("./topics/operatingSystems"));
const ComputerNetworks = lazy(() => import("./topics/computerNetworks"));
const DBMS = lazy(() => import("./topics/dbms"));
const SystemDesign = lazy(() => import("./topics/systemDesign"));
const SoftwareEngineering = lazy(() => import("./topics/softwareEngineering"));
const CompilerDesign = lazy(() => import("./topics/compilerDesign"));
const DistributedSystems = lazy(() => import("./topics/distributedSystems"));
const ParallelComputing = lazy(() => import("./topics/parallelComputing"));
const TheoryOfComputation = lazy(() => import("./topics/theoryOfComputation"));
const Cryptography = lazy(() => import("./topics/cryptography"));
const CyberSecurity = lazy(() => import("./topics/cyberSecurity"));
const CloudComputing = lazy(() => import("./topics/cloudComputing"));

const topics = [
    ["about", "Overview", AboutComputerScience],
    ["os", "Operating Systems", OperatingSystems],
    ["networks", "Computer Networks", ComputerNetworks],
    ["dbms", "DBMS", DBMS],
    ["design", "System Design", SystemDesign],
    ["software", "Software Engineering", SoftwareEngineering],
    ["compiler", "Compiler Design", CompilerDesign],
    ["distributed", "Distributed Systems", DistributedSystems],
    ["parallel", "Parallel Computing", ParallelComputing],
    ["theory", "Theory of Computation", TheoryOfComputation],
    ["crypto", "Cryptography", Cryptography],
    ["security", "Cyber Security", CyberSecurity],
    ["cloud", "Cloud Computing", CloudComputing],
];

const App = () => {
    const [activeTopic, setActiveTopic] = useState("about");
    const [showScrollTop, setShowScrollTop] = useState(false);
    const mainRef = useRef(null);
    const ActiveTopic = topics.find(([id]) => id === activeTopic)?.[2] || AboutComputerScience;

    useEffect(() => {
        mainRef.current?.scrollTo({ top: 0, behavior: "auto" });
        setShowScrollTop(false);
    }, [activeTopic]);

    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>
            <Styled.Main
                ref={mainRef}
                onScroll={(event) => setShowScrollTop(event.currentTarget.scrollTop > 160)}
            >
                <div className="workspaceLayout">
                    <aside className="sideMenu" aria-label="Computer science topics">
                        <p className="menuLabel">Study guide</p>
                        <nav>
                            {topics.map(([id, label]) => (
                                <button
                                    key={id}
                                    type="button"
                                    className={activeTopic === id ? "active" : ""}
                                    aria-current={activeTopic === id ? "page" : undefined}
                                    onClick={() => setActiveTopic(id)}
                                >
                                    {label}
                                </button>
                            ))}
                        </nav>
                    </aside>
                    <section className="contentWrapper" aria-live="polite">
                        <Suspense
                            fallback={
                                <p className="topicLoading" role="status">
                                    Loading study notes...
                                </p>
                            }
                        >
                            <ActiveTopic />
                        </Suspense>
                    </section>
                </div>
                {showScrollTop && (
                    <button
                        type="button"
                        className="scrollTopButton"
                        aria-label="Scroll content to top"
                        title="Scroll to top"
                        onClick={() => mainRef.current?.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                        <FiArrowUp />
                    </button>
                )}
                <div className="footerWrapper">
                    <Footer />
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default App;
