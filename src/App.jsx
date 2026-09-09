import React, { useEffect, useRef, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import AboutComputerScience from "./components/aboutComputerScience";
import OperatingSystems from "./topics/operatingSystems";
import ComputerNetworks from "./topics/computerNetworks";
import DBMS from "./topics/dbms";
import SystemDesign from "./topics/systemDesign";
import SoftwareEngineering from "./topics/softwareEngineering";
import CompilerDesign from "./topics/compilerDesign";
import DistributedSystems from "./topics/distributedSystems";
import ParallelComputing from "./topics/parallelComputing";
import TheoryOfComputation from "./topics/theoryOfComputation";
import Cryptography from "./topics/cryptography";
import CyberSecurity from "./topics/cyberSecurity";
import CloudComputing from "./topics/cloudComputing";

const topics = [
    ["about", "Overview", AboutComputerScience], ["os", "Operating Systems", OperatingSystems], ["networks", "Computer Networks", ComputerNetworks], ["dbms", "DBMS", DBMS], ["design", "System Design", SystemDesign], ["software", "Software Engineering", SoftwareEngineering], ["compiler", "Compiler Design", CompilerDesign], ["distributed", "Distributed Systems", DistributedSystems], ["parallel", "Parallel Computing", ParallelComputing], ["theory", "Theory of Computation", TheoryOfComputation], ["crypto", "Cryptography", Cryptography], ["security", "Cyber Security", CyberSecurity], ["cloud", "Cloud Computing", CloudComputing],
];

const App = () => {
    const [activeTopic, setActiveTopic] = useState("about");
    const mainRef = useRef(null);
    const ActiveTopic = topics.find(([id]) => id === activeTopic)?.[2] || AboutComputerScience;
    useEffect(() => {
        mainRef.current?.scrollTo({ top: 0, behavior: "auto" });
        requestAnimationFrame(() => mainRef.current?.querySelector('[aria-expanded="false"]')?.click());
    }, [activeTopic]);
    return <Styled.Wrapper><Styled.Header><Header /></Styled.Header><Styled.Main ref={mainRef}><div className="workspaceLayout"><aside className="sideMenu" aria-label="Computer science topics"><p className="menuLabel">Study guide</p><nav>{topics.map(([id, label]) => <button key={id} type="button" className={activeTopic === id ? "active" : ""} onClick={() => setActiveTopic(id)}>{label}</button>)}</nav></aside><section className="contentWrapper" aria-live="polite"><ActiveTopic /></section></div><button type="button" className="scrollTopButton" aria-label="Scroll content to top" title="Scroll to top" onClick={() => mainRef.current?.scrollTo({ top: 0, behavior: "smooth" })}><FiArrowUp /></button><div className="footerWrapper"><Footer /></div></Styled.Main></Styled.Wrapper>;
};

export default App;
