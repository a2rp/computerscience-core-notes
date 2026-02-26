// src/pages/topics/theoryOfComputation/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiCpu,
    FiLayers,
    FiShuffle,
    FiActivity,
    FiChevronsDown,
    FiChevronsUp,
    FiInfo,
    FiZap,
    FiCode,
    FiHash,
} from "react-icons/fi";

const TheoryOfComputation = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                id: "toc-automata",
                icon: <FiShuffle />,
                title: "Automata",
                atGlance: [
                    "Automata are abstract machines that read input symbols and change states.",
                    "Finite Automata are used for pattern matching and tokenization.",
                    "Different automata have different power: DFA < NFA < PDA < TM.",
                ],
                content: [
                    {
                        h: "What is an automaton",
                        p: [
                            "An automaton is a mathematical model of a machine that processes input step by step.",
                            "It has states and rules for moving between states based on input symbols.",
                            "It helps us formally define what problems a machine can solve.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "A simple login validator can be seen as a state machine: start -> reading -> valid or invalid.",
                            ],
                        },
                    },
                    {
                        h: "Finite Automata (DFA and NFA)",
                        p: [
                            "DFA (Deterministic Finite Automaton) has exactly one transition for each input symbol from a state.",
                            "NFA (Non-deterministic Finite Automaton) can have multiple possible transitions for the same symbol.",
                            "DFA and NFA accept the same class of languages called regular languages.",
                        ],
                        example: {
                            title: "Quick intuition",
                            lines: [
                                "NFA is easier to design.",
                                "DFA is easier to execute directly.",
                                "Compilers usually convert NFA to DFA internally.",
                            ],
                        },
                    },
                ],
                subList: {
                    title: "Common automata types",
                    items: [
                        {
                            k: "DFA",
                            v: "Deterministic, one path only. Used for fast matching.",
                        },
                        {
                            k: "NFA",
                            v: "Non-deterministic, multiple paths. Same power as DFA.",
                        },
                        {
                            k: "PDA",
                            v: "Pushdown Automaton with a stack. Used for CFG languages.",
                        },
                        {
                            k: "TM",
                            v: "Turing Machine. Most powerful classical model.",
                        },
                    ],
                },
            },

            {
                id: "toc-regex",
                icon: <FiHash />,
                title: "Regular expressions",
                atGlance: [
                    "Regex describes regular languages.",
                    "Regex is equivalent in power to DFA and NFA.",
                    "Used heavily in lexers, search, validation, and parsing preparation.",
                ],
                content: [
                    {
                        h: "What regex is",
                        p: [
                            "Regular expressions are patterns that describe sets of strings.",
                            "They are not just a programming feature. They come from formal language theory.",
                            "Regex patterns can be converted to automata, and automata can be converted back to regex.",
                        ],
                        example: {
                            title: "Example patterns",
                            lines: [
                                "a* means empty or many a",
                                "(ab)* means repeating ab blocks",
                                "a|b means either a or b",
                                "a.b means a then any char then b (programming regex style)",
                            ],
                        },
                    },
                    {
                        h: "Where regex fits in real systems",
                        p: [
                            "Lexical analysis in compilers uses regex to define tokens like identifiers and numbers.",
                            "Search tools, log filters, and input validators use regex for quick matching.",
                            "Regex cannot match nested structures properly, that requires CFG.",
                        ],
                        example: {
                            title: "Limitation example",
                            lines: [
                                "Matching balanced parentheses is not regular, so pure regex cannot do it correctly.",
                            ],
                        },
                    },
                ],
            },

            {
                id: "toc-cfg",
                icon: <FiCode />,
                title: "Context free grammar",
                atGlance: [
                    "CFG describes languages with nested structure.",
                    "Used for programming language syntax, parsers, and compilers.",
                    "CFG is more powerful than regex because it can represent recursion.",
                ],
                content: [
                    {
                        h: "What CFG is",
                        p: [
                            "A Context Free Grammar is a set of rules that generate strings by expanding non-terminals.",
                            "It is called context free because a rule can be applied regardless of surrounding symbols.",
                            "CFG is the foundation for parsing and syntax checking.",
                        ],
                        example: {
                            title: "Mini CFG example",
                            lines: [
                                "E -> E + E | E * E | (E) | id",
                                "This generates arithmetic expressions like id+id*id.",
                            ],
                        },
                    },
                    {
                        h: "PDA connection",
                        p: [
                            "CFG languages are accepted by Pushdown Automata (PDA).",
                            "The stack helps handle nesting like parentheses and function calls.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Balanced parentheses can be recognized using a stack, push on '(' and pop on ')'.",
                            ],
                        },
                    },
                ],
                subList: {
                    title: "Key CFG terms",
                    items: [
                        {
                            k: "Terminal",
                            v: "Actual symbols that appear in output string.",
                        },
                        {
                            k: "Non-terminal",
                            v: "Variables like E, S used for expansions.",
                        },
                        {
                            k: "Production",
                            v: "Rules like S -> aSb | ab.",
                        },
                        {
                            k: "Parse tree",
                            v: "Tree showing grammar expansions for a string.",
                        },
                    ],
                },
            },

            {
                id: "toc-tm",
                icon: <FiCpu />,
                title: "Turing machine",
                atGlance: [
                    "Turing Machine is a mathematical model of a general-purpose computer.",
                    "Has an infinite tape, a head, and a state machine controller.",
                    "Used to define what it means for a problem to be computable.",
                ],
                content: [
                    {
                        h: "Core idea",
                        p: [
                            "A Turing Machine reads and writes symbols on a tape and moves left or right.",
                            "It can simulate any algorithm, given enough time and tape space.",
                            "This model is used to define the limits of computation.",
                        ],
                        example: {
                            title: "Mental model",
                            lines: [
                                "Tape = memory",
                                "Head = pointer that reads and writes",
                                "State machine = program logic",
                            ],
                        },
                    },
                    {
                        h: "Why TM matters",
                        p: [
                            "It helps answer: can a machine solve this problem at all, even with infinite time.",
                            "This separates computable problems from non-computable problems.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Halting problem is not computable, no TM can solve it for all programs.",
                            ],
                        },
                    },
                ],
            },

            {
                id: "toc-decidability",
                icon: <FiZap />,
                title: "Decidability",
                atGlance: [
                    "Decidable means there exists an algorithm that always halts with yes or no.",
                    "Undecidable means no algorithm can solve it for all inputs.",
                    "Halting problem is the classic undecidable example.",
                ],
                content: [
                    {
                        h: "Decidable problems",
                        p: [
                            "A problem is decidable if some Turing Machine halts on every input and answers correctly.",
                            "If it always finishes, we say the language is recursive.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Checking if a number is even is decidable, algorithm halts quickly.",
                            ],
                        },
                    },
                    {
                        h: "Undecidable problems",
                        p: [
                            "A problem is undecidable if no algorithm exists that always halts and answers correctly for every input.",
                            "These are not problems of speed, they are problems of possibility.",
                        ],
                        example: {
                            title: "Classic example",
                            lines: [
                                "Halting problem: given a program and input, decide whether it stops or runs forever.",
                            ],
                        },
                    },
                ],
                callout: {
                    icon: <FiInfo />,
                    title: "Key difference",
                    lines: [
                        "Decidable means always halts with correct yes or no.",
                        "Recognizable means may loop forever on some inputs but halts on accepted ones.",
                    ],
                },
            },

            {
                id: "toc-pnp",
                icon: <FiActivity />,
                title: "P vs NP",
                atGlance: [
                    "P problems are solvable fast.",
                    "NP problems have solutions verifiable fast.",
                    "Big open question: Is P equal to NP.",
                ],
                content: [
                    {
                        h: "What is P",
                        p: [
                            "P is the set of decision problems solvable in polynomial time, like O(n), O(n^2), O(n^3).",
                            "These are considered efficiently solvable.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Shortest path in a graph can be solved in polynomial time.",
                            ],
                        },
                    },
                    {
                        h: "What is NP",
                        p: [
                            "NP is the set of decision problems where a proposed solution can be verified in polynomial time.",
                            "Important point: NP does not mean not polynomial. It means verifiable fast.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Given a Sudoku solution, checking it is correct is fast, but finding it may be hard.",
                            ],
                        },
                    },
                    {
                        h: "NP-complete intuition",
                        p: [
                            "NP-complete problems are the hardest problems in NP.",
                            "If you solve one NP-complete problem in polynomial time, you can solve all NP problems in polynomial time.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "SAT is NP-complete. Many problems reduce to SAT.",
                            ],
                        },
                    },
                ],
                subList: {
                    title: "Fast revision table",
                    items: [
                        {
                            k: "P",
                            v: "Solve fast (polynomial time).",
                        },
                        {
                            k: "NP",
                            v: "Verify fast (polynomial time).",
                        },
                        {
                            k: "NP-complete",
                            v: "Hardest in NP, all NP problems reduce to these.",
                        },
                        {
                            k: "NP-hard",
                            v: "At least as hard as NP-complete, may not be in NP.",
                        },
                    ],
                },
            },
        ];
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="theory-of-computation">
            <div className="top">
                <div className="titleRow">
                    <div className="titleIcon">
                        <FiLayers />
                    </div>
                    <div className="titleText">
                        <h2 className="title">Theory of Computation</h2>
                        <p className="sub">
                            Automata, regex, CFG, Turing machine, decidability,
                            and P vs NP - structured for quick revision.
                        </p>
                    </div>
                </div>

                <button
                    type="button"
                    className={open ? "toggleBtn open" : "toggleBtn"}
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="toc-content"
                    title={open ? "Collapse ToC notes" : "Expand ToC notes"}
                >
                    <span className="btnIcon">
                        {open ? <FiChevronsUp /> : <FiChevronsDown />}
                    </span>
                    <span className="btnText">
                        {open ? "Collapse" : "Expand"}
                    </span>
                </button>
            </div>

            <div id="toc-content" className={open ? "content open" : "content"}>
                <div className="hintBar">
                    <FiInfo className="hintIcon" />
                    <div className="hintText">
                        Start with "At a glance". Then read examples to lock the
                        mental model.
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
                                            At-a-glance summary and beginner
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
                        <FiZap />
                    </div>
                    <div className="footerText">
                        Interview tip - Explain power levels using the ladder:
                        regex and DFA handle regular patterns, CFG handles
                        nested structures, Turing machine defines full
                        computability.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default TheoryOfComputation;
