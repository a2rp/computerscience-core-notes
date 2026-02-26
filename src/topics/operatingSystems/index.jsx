// src/pages/topics/operatingSystems/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiCpu,
    FiLayers,
    FiGitPullRequest,
    FiClock,
    FiShuffle,
    FiLock,
    FiHardDrive,
    FiDatabase,
    FiActivity,
    FiChevronsDown,
    FiChevronsUp,
    FiInfo,
    FiZap,
} from "react-icons/fi";

const OperatingSystems = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                id: "os-fundamentals",
                icon: <FiLayers />,
                title: "Fundamentals",
                atGlance: [
                    "OS is the manager between hardware and apps.",
                    "Kernel runs with full privileges, user space runs with limited privileges.",
                    "System calls are the official door from user programs to kernel services.",
                ],
                content: [
                    {
                        h: "What is an OS",
                        p: [
                            "An Operating System (OS) is the core software that manages hardware and provides services to programs.",
                            "It controls CPU time, memory, storage, devices, and keeps programs isolated and secure.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "When you open Chrome, the OS creates a process, gives it memory, schedules CPU time, and lets it read files and use the network safely.",
                            ],
                        },
                    },
                    {
                        h: "OS goals and types",
                        p: [
                            "Common goals are performance, fairness, security, and stability.",
                            "Types include batch OS, time-sharing OS, real-time OS, distributed OS, and mobile OS.",
                        ],
                        example: {
                            title: "Quick intuition",
                            lines: [
                                "Real-time OS cares about deadlines.",
                                "Time-sharing OS cares about responsive multi-user experience.",
                            ],
                        },
                    },
                    {
                        h: "Kernel vs User space",
                        p: [
                            "Kernel space has full control over the machine and can run privileged instructions.",
                            "User space is where normal apps run with restrictions to prevent crashes from taking down the whole system.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "A buggy game can crash, but your OS should stay alive because the game runs in user space.",
                            ],
                        },
                    },
                    {
                        h: "Monolithic vs Microkernel",
                        p: [
                            "Monolithic kernel keeps most services (drivers, filesystem, networking) inside the kernel for speed.",
                            "Microkernel keeps the kernel small and moves many services to user space for better isolation.",
                        ],
                        example: {
                            title: "Trade-off",
                            lines: [
                                "Monolithic is often faster.",
                                "Microkernel can be safer and easier to isolate faults.",
                            ],
                        },
                    },
                    {
                        h: "System calls",
                        p: [
                            "System calls are APIs provided by the OS to request services like file access, process creation, network operations, and memory allocation.",
                            "They switch execution from user mode to kernel mode safely.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "open() - open a file",
                                "read() - read from file",
                                "fork() - create a new process (Unix-like)",
                            ],
                        },
                    },
                ],
            },

            {
                id: "os-process-management",
                icon: <FiGitPullRequest />,
                title: "Process Management",
                atGlance: [
                    "Process is a running program with its own memory and state.",
                    "Context switch is when CPU stops one process and starts another.",
                    "Scheduling decides who gets CPU next.",
                ],
                content: [
                    {
                        h: "Process vs Program",
                        p: [
                            "A program is a passive file on disk (like an .exe).",
                            "A process is an active execution of that program with its own memory, CPU registers, and resources.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "You can open the same program twice. That creates two processes.",
                            ],
                        },
                    },
                    {
                        h: "Process states",
                        p: [
                            "Typical states are new, ready, running, waiting (blocked), and terminated.",
                            "Ready means it can run but is waiting for CPU.",
                            "Waiting means it is paused for I/O or some event.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "When an app is downloading a file, it may be waiting for network I/O.",
                            ],
                        },
                    },
                    {
                        h: "PCB structure",
                        p: [
                            "PCB (Process Control Block) stores everything the OS needs to manage a process.",
                            "It usually includes PID, state, registers, program counter, scheduling info, memory mappings, and open files.",
                        ],
                        example: {
                            title: "Mental model",
                            lines: [
                                "PCB is like the OS notebook page for each process.",
                            ],
                        },
                    },
                    {
                        h: "Context switching",
                        p: [
                            "Context switch saves the current process state (registers, program counter) and loads another process state.",
                            "It has overhead, so too many switches reduce performance.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Round Robin uses frequent switches to keep UI responsive, but switching too often wastes CPU time.",
                            ],
                        },
                    },
                    {
                        h: "Scheduling algorithms",
                        p: [
                            "Scheduling decides the order and duration processes get CPU.",
                            "Different algorithms optimize different goals like fairness, throughput, or response time.",
                        ],
                        example: {
                            title: "Real-world note",
                            lines: [
                                "Time-sharing systems often use Round Robin-like ideas for responsiveness.",
                            ],
                        },
                    },
                ],
                subList: {
                    title: "Common scheduling algorithms",
                    items: [
                        {
                            k: "FCFS",
                            v: "First Come First Serve. Simple. Can cause convoy effect where short jobs wait behind long jobs.",
                        },
                        {
                            k: "SJF",
                            v: "Shortest Job First. Minimizes average waiting time. Needs job length estimate.",
                        },
                        {
                            k: "Round Robin",
                            v: "Each process gets a time slice (quantum). Fair and responsive.",
                        },
                        {
                            k: "Priority",
                            v: "Higher priority runs first. Risk of starvation for low priority tasks.",
                        },
                        {
                            k: "Multilevel queue",
                            v: "Separate queues for different task types (system, interactive, batch). Each queue may have its own algorithm.",
                        },
                    ],
                },
            },

            {
                id: "os-threads",
                icon: <FiShuffle />,
                title: "Threads",
                atGlance: [
                    "Thread is a lightweight execution path inside a process.",
                    "Threads share process memory, so they are faster to switch but need synchronization.",
                    "User threads are managed by libraries, kernel threads are managed by OS.",
                ],
                content: [
                    {
                        h: "Process vs Thread",
                        p: [
                            "A process has its own address space and resources.",
                            "Threads inside a process share memory and resources, but each thread has its own stack and registers.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "A browser process may have threads for UI, network, and rendering working at the same time.",
                            ],
                        },
                    },
                    {
                        h: "User vs Kernel threads",
                        p: [
                            "User-level threads are created and managed in user space, often faster to create.",
                            "Kernel-level threads are known to the OS scheduler and can run truly in parallel on multiple CPU cores.",
                        ],
                        example: {
                            title: "Quick intuition",
                            lines: [
                                "Kernel threads are more powerful for real parallelism.",
                                "User threads can be lighter but depend on runtime support.",
                            ],
                        },
                    },
                    {
                        h: "Multithreading models",
                        p: [
                            "Many-to-one, one-to-one, many-to-many are classic models.",
                            "Modern systems commonly use one-to-one or many-to-many depending on runtime and OS.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Some language runtimes map many lightweight tasks onto a smaller pool of OS threads.",
                            ],
                        },
                    },
                    {
                        h: "Thread synchronization",
                        p: [
                            "Because threads share memory, they can corrupt shared data if they write at the same time.",
                            "Synchronization tools (mutex, semaphore) protect shared resources and enforce safe ordering.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Two threads updating the same counter must lock or use atomic operations to avoid wrong values.",
                            ],
                        },
                    },
                ],
            },

            {
                id: "os-metrics",
                icon: <FiActivity />,
                title: "CPU Scheduling Metrics",
                atGlance: [
                    "These metrics tell you whether scheduling is fair and responsive.",
                    "Response time matters for interactive apps.",
                    "Throughput matters for batch workloads.",
                ],
                content: [],
                subList: {
                    title: "Metrics",
                    items: [
                        {
                            k: "Turnaround time",
                            v: "Total time from submission to completion.",
                        },
                        {
                            k: "Waiting time",
                            v: "Total time spent waiting in ready queue.",
                        },
                        {
                            k: "Response time",
                            v: "Time until the first response, important for UI and interactive tasks.",
                        },
                        {
                            k: "Throughput",
                            v: "Number of processes completed per unit time.",
                        },
                    ],
                },
            },

            {
                id: "os-sync",
                icon: <FiLock />,
                title: "Synchronization",
                atGlance: [
                    "Race conditions happen when timing changes the result.",
                    "Critical section is the part that must not be executed by multiple threads at once.",
                    "Mutex and semaphores are common protection tools.",
                ],
                content: [
                    {
                        h: "Race condition",
                        p: [
                            "Race condition occurs when multiple threads access shared data and the final result depends on who runs first.",
                            "It can produce random bugs that disappear when you add logs or debugging.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Two threads read balance = 100, both add 10, both write 110. Correct answer should be 120.",
                            ],
                        },
                    },
                    {
                        h: "Critical section",
                        p: [
                            "Critical section is the code region that reads or writes shared data.",
                            "Only one thread should enter at a time to maintain correctness.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Updating a shared queue, shared counter, or shared cache entry is a critical section.",
                            ],
                        },
                    },
                    {
                        h: "Mutex",
                        p: [
                            "Mutex is a lock that allows only one thread to enter a critical section.",
                            "Lock before entering, unlock after leaving.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Thread A locks, updates shared map, unlocks. Thread B waits until unlock.",
                            ],
                        },
                    },
                    {
                        h: "Semaphore",
                        p: [
                            "Semaphore is a counter-based synchronization tool.",
                            "Binary semaphore acts like a mutex. Counting semaphore allows N threads to enter (like limited resources).",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "A connection pool of size 10 can be protected by a counting semaphore of 10.",
                            ],
                        },
                    },
                ],
                callout: {
                    icon: <FiInfo />,
                    title: "Deadlock snapshot",
                    lines: [
                        "Deadlock is when two or more threads wait forever because each holds a resource the other needs.",
                        "Typical case is Thread A holds Lock 1 and waits for Lock 2, while Thread B holds Lock 2 and waits for Lock 1.",
                    ],
                },
            },

            {
                id: "os-deadlock",
                icon: <FiZap />,
                title: "Deadlock",
                atGlance: [
                    "Deadlock needs 4 conditions. Break one to prevent it.",
                    "Avoidance is proactive, detection is reactive.",
                    "Banker’s Algorithm is a classic avoidance idea.",
                ],
                content: [],
                subList: {
                    title: "Deadlock essentials",
                    items: [
                        {
                            k: "Necessary conditions",
                            v: "Mutual exclusion, hold and wait, no preemption, circular wait.",
                        },
                        {
                            k: "Detection",
                            v: "System checks for cycles and stuck waits, then recovers by killing or rolling back processes.",
                        },
                        {
                            k: "Prevention",
                            v: "Design system to break at least one necessary condition, like ordering locks to avoid circular wait.",
                        },
                        {
                            k: "Avoidance",
                            v: "Decide at runtime if granting a resource keeps system in a safe state.",
                        },
                        {
                            k: "Banker’s Algorithm",
                            v: "Classic avoidance approach. Only grant if resources remain enough for all processes to eventually finish.",
                        },
                    ],
                },
            },

            {
                id: "os-memory",
                icon: <FiDatabase />,
                title: "Memory Management",
                atGlance: [
                    "OS must give each process an isolated view of memory.",
                    "Virtual memory makes it look like you have more memory than RAM.",
                    "Paging and page replacement decide how memory is used efficiently.",
                ],
                content: [
                    {
                        h: "Logical vs Physical address",
                        p: [
                            "Logical (virtual) address is what the process uses.",
                            "Physical address is the real RAM address.",
                            "OS and hardware translate logical to physical using page tables.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Two processes can both use address 0x1000, but they map to different physical locations.",
                            ],
                        },
                    },
                    {
                        h: "Paging",
                        p: [
                            "Memory is divided into fixed-size pages and frames.",
                            "Paging reduces external fragmentation and simplifies allocation.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Process pages can be placed into any free frames in RAM.",
                            ],
                        },
                    },
                    {
                        h: "Segmentation",
                        p: [
                            "Memory is divided by logical segments like code, stack, heap.",
                            "Segmentation matches program structure but can suffer from external fragmentation.",
                        ],
                        example: {
                            title: "Quick compare",
                            lines: [
                                "Paging is fixed-size blocks.",
                                "Segmentation is variable-size blocks based on meaning.",
                            ],
                        },
                    },
                    {
                        h: "Virtual memory",
                        p: [
                            "Virtual memory uses disk as an extension of RAM.",
                            "Only needed parts stay in RAM, rest can remain on disk until accessed.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Opening many apps works because inactive pages can be moved out of RAM.",
                            ],
                        },
                    },
                    {
                        h: "Page replacement algorithms",
                        p: [
                            "When RAM is full and a new page is needed, OS must pick a page to evict.",
                            "Good eviction choices reduce page faults and improve performance.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "If you keep evicting pages you need soon, system becomes slow and can start thrashing.",
                            ],
                        },
                    },
                ],
                subList: {
                    title: "Page replacement",
                    items: [
                        {
                            k: "FIFO",
                            v: "Evict the oldest loaded page. Simple but not always smart.",
                        },
                        {
                            k: "LRU",
                            v: "Evict the least recently used page. Often performs better but needs tracking.",
                        },
                        {
                            k: "Optimal",
                            v: "Evict the page not needed for the longest time in future. Best in theory, not possible to implement perfectly.",
                        },
                    ],
                },
            },

            {
                id: "os-file-systems",
                icon: <FiHardDrive />,
                title: "File Systems and Disk Scheduling",
                atGlance: [
                    "File system organizes files and directories on storage.",
                    "Allocation method affects performance and fragmentation.",
                    "Disk scheduling reduces head movement and improves throughput.",
                ],
                content: [
                    {
                        h: "File allocation methods",
                        p: [
                            "Contiguous allocation is simple and fast but can fragment.",
                            "Linked allocation reduces fragmentation but can be slower for random access.",
                            "Indexed allocation uses an index block for fast random access.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Video files often benefit from contiguous allocation style because sequential reads are common.",
                            ],
                        },
                    },
                    {
                        h: "Directory structures",
                        p: [
                            "Directories map names to file metadata locations.",
                            "Common structures include single-level, two-level, tree, and DAG-like structures.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "A typical OS uses a tree structure: /home/user/docs.",
                            ],
                        },
                    },
                ],
                subList: {
                    title: "Disk scheduling",
                    items: [
                        {
                            k: "SCAN",
                            v: "Disk head moves like an elevator, serving requests in one direction then reverses.",
                        },
                        {
                            k: "C-SCAN",
                            v: "Like SCAN but returns to start without serving on the way back, gives more uniform wait times.",
                        },
                    ],
                },
            },
        ];
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="operating-systems">
            <div className="top">
                <div className="titleRow">
                    <div className="titleIcon">
                        <FiCpu />
                    </div>
                    <div className="titleText">
                        <h2 className="title">Operating Systems</h2>
                        <p className="sub">
                            At-a-glance revision notes for OS fundamentals -
                            processes, threads, scheduling, synchronization,
                            memory, file systems, and disk scheduling.
                        </p>
                    </div>
                </div>

                <button
                    type="button"
                    className={open ? "toggleBtn open" : "toggleBtn"}
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="os-content"
                    title={open ? "Collapse OS notes" : "Expand OS notes"}
                >
                    <span className="btnIcon">
                        {open ? <FiChevronsUp /> : <FiChevronsDown />}
                    </span>
                    <span className="btnText">
                        {open ? "Collapse" : "Expand"}
                    </span>
                </button>
            </div>

            <div id="os-content" className={open ? "content open" : "content"}>
                <div className="hintBar">
                    <FiClock className="hintIcon" />
                    <div className="hintText">
                        Scan the "At a glance" bullets first. Then read examples
                        for real understanding.
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
                        <FiInfo />
                    </div>
                    <div className="footerText">
                        Interview tip - Always explain OS topics using
                        trade-offs like performance vs safety, throughput vs
                        latency, and isolation vs sharing.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default OperatingSystems;
