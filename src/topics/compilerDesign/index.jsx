// src/pages/topics/compilerDesign/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiCode,
    FiLayers,
    FiSearch,
    FiGitMerge,
    FiCheckCircle,
    FiShuffle,
    FiZap,
    FiCpu,
    FiSettings,
    FiChevronsDown,
    FiChevronsUp,
    FiInfo,
    FiActivity,
} from "react-icons/fi";

const CompilerDesign = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                id: "cd-phases",
                icon: <FiLayers />,
                title: "Compiler Phases",
                atGlance: [
                    "Compiler converts source code into machine code step by step.",
                    "Each phase produces output for the next phase.",
                    "Errors are found at different phases like syntax vs semantics.",
                ],
                content: [
                    {
                        h: "What is a compiler",
                        p: [
                            "A compiler is a program that translates high-level source code into a lower-level form like assembly or machine code.",
                            "It also checks errors and tries to optimize code for better performance.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "C or C++ code is compiled into an executable.",
                                "Java is compiled into bytecode that runs on the JVM.",
                            ],
                        },
                    },
                    {
                        h: "Lexical analysis",
                        p: [
                            "Lexical analysis breaks the source code into tokens like keywords, identifiers, numbers, and operators.",
                            "This phase removes whitespace and comments and produces a token stream for the parser.",
                        ],
                        example: {
                            title: "Example tokenization",
                            lines: [
                                "Code: int x = 10;",
                                "Tokens: [int] [identifier:x] [=] [number:10] [;]",
                            ],
                        },
                    },
                    {
                        h: "Syntax analysis and parsing",
                        p: [
                            "Syntax analysis checks whether the token sequence follows grammar rules.",
                            "Parsing builds a parse tree or syntax tree that represents the structure of the program.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Code: x = 10 + 2",
                                "Parser checks that assignment and expression rules are valid.",
                            ],
                        },
                    },
                    {
                        h: "Semantic analysis",
                        p: [
                            "Semantic analysis checks meaning, not just grammar.",
                            "It checks types, variable declarations, scope rules, and function argument matching.",
                        ],
                        example: {
                            title: "Example semantic errors",
                            lines: [
                                "int x = 'hello' - type mismatch",
                                "y = 5 - y not declared",
                            ],
                        },
                    },
                    {
                        h: "Intermediate code generation",
                        p: [
                            "Compiler converts the syntax tree into an intermediate representation (IR).",
                            "IR is easier to optimize and can be reused for different target machines.",
                        ],
                        example: {
                            title: "Example IR idea",
                            lines: [
                                "Expression: a = b + c",
                                "IR: t1 = b + c, a = t1",
                            ],
                        },
                    },
                    {
                        h: "Optimization",
                        p: [
                            "Optimization improves performance or reduces memory without changing program output.",
                            "It can remove dead code, reduce redundant calculations, and simplify expressions.",
                        ],
                        example: {
                            title: "Example optimization",
                            lines: [
                                "x = 2 * 8 can become x = 16",
                                "Repeated: (a + b) used many times can be computed once",
                            ],
                        },
                    },
                    {
                        h: "Code generation",
                        p: [
                            "Final phase converts IR into target code like assembly or machine instructions.",
                            "It includes register allocation and instruction selection.",
                        ],
                        example: {
                            title: "Example output",
                            lines: [
                                "IR becomes assembly instructions like MOV, ADD, JMP",
                                "Then assembler turns it into machine code bytes",
                            ],
                        },
                    },
                ],
            },

            {
                id: "cd-parsing",
                icon: <FiGitMerge />,
                title: "Parsing Types",
                atGlance: [
                    "LL parsing is top-down. It predicts productions from left to right.",
                    "LR parsing is bottom-up. It reduces input into grammar rules.",
                    "LR is more powerful than LL for many grammars.",
                ],
                content: [
                    {
                        h: "Parsing in simple words",
                        p: [
                            "Parsing is the process of taking tokens and building structure.",
                            "The parser tries to match token sequences to grammar rules so the compiler understands code.",
                        ],
                        example: {
                            title: "Beginner mental model",
                            lines: [
                                "Tokens are like words.",
                                "Grammar is like sentence rules.",
                                "Parser checks if the sentence is valid and builds a tree.",
                            ],
                        },
                    },
                ],
                subList: {
                    title: "Common parser families",
                    items: [
                        {
                            k: "LL parser",
                            v: "Top-down parsing. Reads input Left to right and produces Leftmost derivation. Often easier to implement but less powerful.",
                        },
                        {
                            k: "LR parser",
                            v: "Bottom-up parsing. Reads input Left to right and produces Rightmost derivation in reverse. More powerful and common in real compilers.",
                        },
                    ],
                },
                callout: {
                    icon: <FiInfo />,
                    title: "Quick intuition",
                    lines: [
                        "LL tries to expand rules to match input.",
                        "LR tries to reduce input back into rules.",
                        "If grammar is complex, LR usually handles it better.",
                    ],
                },
            },

            {
                id: "cd-automata",
                icon: <FiActivity />,
                title: "Automata Basics",
                atGlance: [
                    "Automata are machines that recognize patterns.",
                    "Lexer often uses automata to recognize tokens.",
                    "DFA is deterministic, NFA is nondeterministic.",
                ],
                content: [
                    {
                        h: "Why automata matters in compilers",
                        p: [
                            "Lexical analysis needs a fast way to recognize patterns like identifiers, numbers, and keywords.",
                            "Regular expressions define token patterns, and automata can implement them efficiently.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Identifier pattern: letter followed by letters or digits",
                                "Number pattern: digits with optional decimal part",
                            ],
                        },
                    },
                ],
                subList: {
                    title: "DFA vs NFA",
                    items: [
                        {
                            k: "NFA",
                            v: "Nondeterministic Finite Automaton. Can have multiple possible next states for the same input. Easier to build from regex.",
                        },
                        {
                            k: "DFA",
                            v: "Deterministic Finite Automaton. Only one next state per input. Faster to run. NFA can be converted to DFA.",
                        },
                    ],
                },
                callout: {
                    icon: <FiZap />,
                    title: "Common interview note",
                    lines: [
                        "Regex to NFA is straightforward.",
                        "NFA to DFA uses subset construction.",
                        "DFA is usually preferred for fast tokenizing.",
                    ],
                },
            },

            {
                id: "cd-mini-map",
                icon: <FiSettings />,
                title: "At a Glance Map",
                atGlance: [
                    "Lexer turns text into tokens.",
                    "Parser turns tokens into a tree.",
                    "Semantic phase checks meaning and types.",
                ],
                content: [],
                subList: {
                    title: "One-line flow",
                    items: [
                        {
                            k: "Lexical",
                            v: "Characters to tokens",
                        },
                        {
                            k: "Parsing",
                            v: "Tokens to parse tree or AST",
                        },
                        {
                            k: "Semantic",
                            v: "AST plus symbol table checks",
                        },
                        {
                            k: "IR",
                            v: "AST to intermediate code",
                        },
                        {
                            k: "Optimize",
                            v: "IR improvements",
                        },
                        {
                            k: "Generate",
                            v: "IR to assembly or machine code",
                        },
                    ],
                },
            },
        ];
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="compiler-design">
            <div className="top">
                <div className="titleRow">
                    <div className="titleIcon">
                        <FiCode />
                    </div>
                    <div className="titleText">
                        <h2 className="title">Compiler Design</h2>
                        <p className="sub">
                            At-a-glance revision notes for compiler phases,
                            parsing, and automata used in lexing.
                        </p>
                    </div>
                </div>

                <button
                    type="button"
                    className={open ? "toggleBtn open" : "toggleBtn"}
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="cd-content"
                    title={
                        open
                            ? "Collapse compiler notes"
                            : "Expand compiler notes"
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

            <div id="cd-content" className={open ? "content open" : "content"}>
                <div className="hintBar">
                    <FiCpu className="hintIcon" />
                    <div className="hintText">
                        Scan "At a glance" first. Then read examples to connect
                        grammar and automata ideas to real code behavior.
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
                        <FiSearch />
                    </div>
                    <div className="footerText">
                        Interview tip - Explain the pipeline with one small
                        example and show where each error type is caught:
                        lexical, syntax, semantic.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default CompilerDesign;
