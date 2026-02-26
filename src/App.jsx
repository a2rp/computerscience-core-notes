// App.jsx
import React from "react";
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

const App = () => {
    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>
            <Styled.Main>
                <div className="contentWrapper">
                    <AboutComputerScience />

                    <OperatingSystems />
                    <ComputerNetworks />
                    <DBMS />
                    <SystemDesign />
                    <SoftwareEngineering />
                    <CompilerDesign />
                    <DistributedSystems />
                    <ParallelComputing />
                    <TheoryOfComputation />
                    <Cryptography />
                    <CyberSecurity />
                    <CloudComputing />
                </div>

                <div className="footerWrapper">
                    <Footer />
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default App;
