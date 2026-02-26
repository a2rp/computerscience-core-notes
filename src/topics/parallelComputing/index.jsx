// src/pages/topics/parallelComputing/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiCpu,
    FiGrid,
    FiGitMerge,
    FiActivity,
    FiZap,
    FiChevronsDown,
    FiChevronsUp,
    FiInfo,
    FiLayers,
    FiBox,
} from "react-icons/fi";

const ParallelComputing = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                id: "pc-parallel-vs-concurrent",
                icon: <FiGitMerge />,
                title: "Parallel vs Concurrent",
                atGlance: [
                    "Concurrency is about dealing with many things at once.",
                    "Parallelism is about doing many things at the same time.",
                    "You can have concurrency without parallelism on a single core.",
                ],
                content: [
                    {
                        h: "Parallelism",
                        p: [
                            "Parallelism means tasks literally run at the same time using multiple CPU cores or GPUs.",
                            "Goal is to reduce total time by splitting work into parts that can execute simultaneously.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Rendering 4K video by splitting frames across multiple cores.",
                                "Processing a large array by dividing it into chunks and computing each chunk on different cores.",
                            ],
                        },
                    },
                    {
                        h: "Concurrency",
                        p: [
                            "Concurrency means making progress on multiple tasks by switching between them.",
                            "Even on one CPU core, OS can switch tasks quickly so the system feels like it runs many tasks together.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "A browser handling UI events while also downloading data.",
                                "Node.js event loop doing many I/O tasks by switching callbacks.",
                            ],
                        },
                    },
                    {
                        h: "Key difference (memory intuition)",
                        p: [
                            "Concurrency is about structure and coordination.",
                            "Parallelism is about hardware speedup.",
                            "Parallelism usually introduces shared data issues, so synchronization matters.",
                        ],
                        example: {
                            title: "Quick check",
                            lines: [
                                "Single core - can be concurrent, cannot be truly parallel.",
                                "Multi core - can be both concurrent and parallel.",
                            ],
                        },
                    },
                ],
            },
            {
                id: "pc-amdahl",
                icon: <FiActivity />,
                title: "Amdahl's Law",
                atGlance: [
                    "Speedup is limited by the serial part you cannot parallelize.",
                    "Even 1000 cores cannot fix a big serial bottleneck.",
                    "Optimize the serial part first for real gains.",
                ],
                content: [
                    {
                        h: "What it says",
                        p: [
                            "Amdahl's Law states that the maximum speedup of a program from parallelization is limited by the fraction that must run sequentially.",
                            "If a fraction of your code is serial, that part becomes the ceiling on speedup.",
                        ],
                        example: {
                            title: "Beginner formula intuition",
                            lines: [
                                "If 10% is serial, best possible speedup is about 10x, even with infinite processors.",
                                "If 30% is serial, best possible speedup is about 3.33x.",
                            ],
                        },
                    },
                    {
                        h: "Why it matters",
                        p: [
                            "Parallel optimization only helps the parallel portion.",
                            "Real systems often have serial bottlenecks like I/O, locks, or a single-threaded coordinator.",
                        ],
                        example: {
                            title: "Real-world example",
                            lines: [
                                "A database query might be parallel, but final aggregation or locking can be serial and limit speed.",
                            ],
                        },
                    },
                    {
                        h: "Practical takeaway",
                        p: [
                            "Measure before adding threads.",
                            "Reduce serial work, reduce lock contention, batch I/O, and avoid unnecessary synchronization.",
                        ],
                        example: {
                            title: "Checklist",
                            lines: [
                                "Reduce critical sections.",
                                "Avoid a single global lock.",
                                "Use chunked processing to reduce coordination overhead.",
                            ],
                        },
                    },
                ],
                callout: {
                    icon: <FiInfo />,
                    title: "Mental model",
                    lines: [
                        "Parallelism is not magic.",
                        "If your program spends time waiting on one slow step, more cores just wait faster.",
                    ],
                },
            },
            {
                id: "pc-simd",
                icon: <FiGrid />,
                title: "SIMD",
                atGlance: [
                    "SIMD means one instruction processes multiple data items.",
                    "Great for arrays, vectors, images, and signal processing.",
                    "It is parallelism inside the CPU itself.",
                ],
                content: [
                    {
                        h: "What is SIMD",
                        p: [
                            "SIMD stands for Single Instruction Multiple Data.",
                            "CPU executes one instruction that applies to a vector of data values at once.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Add 8 integers in one CPU instruction using vector registers.",
                                "Apply the same brightness change to many pixels in one step.",
                            ],
                        },
                    },
                    {
                        h: "Where it shines",
                        p: [
                            "SIMD is strongest when the same operation repeats across large data sets.",
                            "Common in image filters, audio processing, machine learning inference, and physics simulations.",
                        ],
                        example: {
                            title: "Quick intuition",
                            lines: [
                                "Loops over arrays can sometimes be auto-vectorized by compilers.",
                            ],
                        },
                    },
                    {
                        h: "Limitations",
                        p: [
                            "SIMD does not help much when logic is branch-heavy or each element needs different work.",
                            "Memory alignment and data layout matter for best performance.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "If each element has different if-else decisions, SIMD lanes become inefficient.",
                            ],
                        },
                    },
                ],
            },
            {
                id: "pc-multithreading",
                icon: <FiLayers />,
                title: "Multithreading",
                atGlance: [
                    "Multiple threads run inside one process.",
                    "Threads share memory so coordination and locking matter.",
                    "Too many threads can slow things down due to context switching and contention.",
                ],
                content: [
                    {
                        h: "What multithreading gives",
                        p: [
                            "Threads can run in parallel on multiple CPU cores.",
                            "Threads can also overlap work like computation plus I/O to improve responsiveness.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "UI thread stays responsive while a worker thread loads data.",
                                "A server handles many requests using a thread pool.",
                            ],
                        },
                    },
                    {
                        h: "Costs and risks",
                        p: [
                            "Shared memory can cause race conditions if not protected.",
                            "Locks can cause contention and reduce speedup.",
                            "Context switching has overhead, especially with too many active threads.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "A single global mutex can make 16 threads behave like 1 thread.",
                            ],
                        },
                    },
                    {
                        h: "Beginner tips",
                        p: [
                            "Prefer a fixed-size thread pool instead of creating unlimited threads.",
                            "Keep critical sections small.",
                            "Batch work into chunks to reduce synchronization overhead.",
                        ],
                        example: {
                            title: "Rule of thumb",
                            lines: [
                                "If CPU-bound, keep threads near number of cores.",
                                "If I/O-bound, you can have more, but still avoid extreme counts.",
                            ],
                        },
                    },
                ],
            },
            {
                id: "pc-gpu-basics",
                icon: <FiCpu />,
                title: "GPU Basics",
                atGlance: [
                    "GPU is built for massive parallel work on many small tasks.",
                    "Best for data-parallel workloads like vectors, matrices, images.",
                    "GPU has high throughput but higher latency and transfer overhead.",
                ],
                content: [
                    {
                        h: "CPU vs GPU mindset",
                        p: [
                            "CPU has few powerful cores optimized for low-latency, complex control flow.",
                            "GPU has many smaller cores optimized for throughput and doing the same operation across lots of data.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "CPU is like a few expert workers.",
                                "GPU is like thousands of fast workers doing the same simple task.",
                            ],
                        },
                    },
                    {
                        h: "Where GPU helps most",
                        p: [
                            "Matrix multiplication, image processing, physics simulation, deep learning training and inference.",
                            "Anything that can be expressed as the same operation over big arrays is a good match.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Multiply two large matrices for ML workloads.",
                                "Apply blur filter to an image across millions of pixels.",
                            ],
                        },
                    },
                    {
                        h: "GPU overhead and limitations",
                        p: [
                            "Moving data from CPU memory to GPU memory costs time.",
                            "Branch-heavy code performs poorly on GPUs.",
                            "Small jobs may be faster on CPU because GPU setup overhead dominates.",
                        ],
                        example: {
                            title: "Quick intuition",
                            lines: [
                                "GPU is worth it when the workload is large and repetitive.",
                            ],
                        },
                    },
                ],
                callout: {
                    icon: <FiZap />,
                    title: "Interview edge",
                    lines: [
                        "When talking about GPU, always mention trade-off.",
                        "High throughput, but transfer overhead and branch divergence can reduce gains.",
                    ],
                },
            },
        ];
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="parallel-computing">
            <div className="top">
                <div className="titleRow">
                    <div className="titleIcon">
                        <FiBox />
                    </div>
                    <div className="titleText">
                        <h2 className="title">Parallel Computing</h2>
                        <p className="sub">
                            At-a-glance revision for parallelism, speedup
                            limits, SIMD, multithreading, and GPU basics.
                        </p>
                    </div>
                </div>

                <button
                    type="button"
                    className={open ? "toggleBtn open" : "toggleBtn"}
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="pc-content"
                    title={
                        open
                            ? "Collapse Parallel Computing notes"
                            : "Expand Parallel Computing notes"
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

            <div id="pc-content" className={open ? "content open" : "content"}>
                <div className="hintBar">
                    <FiCpu className="hintIcon" />
                    <div className="hintText">
                        Start with "At a glance" bullets, then read examples to
                        build intuition.
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
                            </div>
                        );
                    })}
                </div>

                <div className="footerNote">
                    <div className="footerIcon">
                        <FiInfo />
                    </div>
                    <div className="footerText">
                        Interview tip - Always mention speedup limits and
                        overheads like synchronization, communication, and data
                        transfer when discussing parallel performance.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ParallelComputing;
