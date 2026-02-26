// src/pages/topics/cryptography/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiKey,
    FiLock,
    FiRefreshCw,
    FiShield,
    FiGlobe,
    FiLayers,
    FiChevronsDown,
    FiChevronsUp,
    FiInfo,
    FiActivity,
    FiZap,
    FiCheckCircle,
} from "react-icons/fi";

const Cryptography = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                id: "crypto-symmetric",
                icon: <FiKey />,
                title: "Symmetric encryption",
                atGlance: [
                    "Same secret key is used to encrypt and decrypt.",
                    "Very fast, best for large data like files and streams.",
                    "Key sharing is the main problem - you must deliver the secret safely.",
                ],
                content: [
                    {
                        h: "What it is",
                        p: [
                            "Symmetric encryption uses one shared secret key for both encryption and decryption.",
                            "If both sides have the same key, they can protect data from eavesdroppers.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "You encrypt a file with key K.",
                                "Anyone with key K can decrypt it.",
                                "If K leaks, security is gone.",
                            ],
                        },
                    },
                    {
                        h: "Where it is used",
                        p: [
                            "Disk encryption, backups, secure messaging payloads, VPN data channels, HTTPS session data.",
                            "In TLS, symmetric keys are used after a secure handshake because symmetric encryption is fast.",
                        ],
                        example: {
                            title: "Practical intuition",
                            lines: [
                                "Symmetric is like one locker key shared by two people. Fast and simple, but you must hand over the key safely.",
                            ],
                        },
                    },
                    {
                        h: "Important idea - key distribution",
                        p: [
                            "The hardest part is sharing the secret key without attackers seeing it.",
                            "That is why we combine symmetric encryption with asymmetric encryption in modern systems.",
                        ],
                        example: {
                            title: "Real-world pattern",
                            lines: [
                                "Asymmetric is used to exchange a symmetric session key.",
                                "Then symmetric is used for the actual data.",
                            ],
                        },
                    },
                ],
                subList: {
                    title: "Common terms",
                    items: [
                        {
                            k: "Block cipher",
                            v: "Encrypts fixed-size blocks. Example: AES. Often used with a mode like GCM.",
                        },
                        {
                            k: "Stream cipher",
                            v: "Encrypts data as a stream. Useful for continuous data.",
                        },
                        {
                            k: "Nonce / IV",
                            v: "Random or unique value used to make encryption safe even for repeated messages.",
                        },
                    ],
                },
            },

            {
                id: "crypto-asymmetric",
                icon: <FiLock />,
                title: "Asymmetric encryption",
                atGlance: [
                    "Uses a public key and a private key.",
                    "Public key can be shared openly, private key must stay secret.",
                    "Great for key exchange and identity, slower than symmetric encryption.",
                ],
                content: [
                    {
                        h: "What it is",
                        p: [
                            "Asymmetric encryption uses a pair of keys: public and private.",
                            "Data encrypted with the public key can be decrypted only with the matching private key.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "You publish your public key on your website.",
                                "People encrypt secrets for you using that public key.",
                                "Only you can decrypt them using your private key.",
                            ],
                        },
                    },
                    {
                        h: "Why it matters",
                        p: [
                            "It solves the key distribution problem for symmetric encryption.",
                            "It also enables identity and trust mechanisms using digital signatures.",
                        ],
                        example: {
                            title: "Practical intuition",
                            lines: [
                                "Asymmetric is like a mailbox slot: anyone can drop a letter in, only the owner can open it.",
                            ],
                        },
                    },
                    {
                        h: "Where it is used",
                        p: [
                            "TLS handshakes, secure key exchange, encrypting small secrets, signing software updates, SSH authentication.",
                            "It is usually not used to encrypt large files directly because it is slower.",
                        ],
                        example: {
                            title: "Common real use",
                            lines: [
                                "Asymmetric sets up trust and exchanges keys.",
                                "Symmetric does the heavy lifting for bulk data.",
                            ],
                        },
                    },
                ],
                subList: {
                    title: "Common terms",
                    items: [
                        {
                            k: "Public key",
                            v: "Shared key used to encrypt or verify signatures.",
                        },
                        {
                            k: "Private key",
                            v: "Secret key used to decrypt or create signatures.",
                        },
                        {
                            k: "Key exchange",
                            v: "Process to establish a shared secret securely over an insecure network.",
                        },
                    ],
                },
            },

            {
                id: "crypto-hashing",
                icon: <FiRefreshCw />,
                title: "Hashing",
                atGlance: [
                    "Hashing is one-way, not reversible.",
                    "Same input produces the same output, but you cannot go backward.",
                    "Used for integrity checks and password storage (with salt).",
                ],
                content: [
                    {
                        h: "What it is",
                        p: [
                            "A hash function converts input data into a fixed-size output (hash or digest).",
                            "Good cryptographic hashes are fast to compute but extremely hard to reverse or collide.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "hash('hello') = some digest",
                                "hash('hello') will always produce the same digest",
                                "hash('Hello') produces a different digest",
                            ],
                        },
                    },
                    {
                        h: "Integrity checks",
                        p: [
                            "If you download a file, you can compare its hash with the expected hash to detect tampering.",
                            "Even a 1-bit change creates a very different hash (avalanche effect).",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Vendor posts SHA-256 hash of an installer.",
                                "You compute SHA-256 locally and compare.",
                                "If it matches, file is likely intact.",
                            ],
                        },
                    },
                    {
                        h: "Password storage basics",
                        p: [
                            "Passwords should not be encrypted and stored.",
                            "Instead store a slow hash of the password with a unique salt.",
                            "Salt prevents attackers from using precomputed tables.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Store: salt + hash(salt + password)",
                                "On login: compute again and compare hashes",
                            ],
                        },
                    },
                ],
                subList: {
                    title: "Key properties",
                    items: [
                        {
                            k: "One-way",
                            v: "You cannot reverse a hash to get the original input.",
                        },
                        {
                            k: "Collision resistance",
                            v: "Hard to find two different inputs with the same hash.",
                        },
                        {
                            k: "Avalanche effect",
                            v: "Small input change causes huge output change.",
                        },
                    ],
                },
            },

            {
                id: "crypto-signatures",
                icon: <FiCheckCircle />,
                title: "Digital signatures",
                atGlance: [
                    "Proves who created a message and that it was not altered.",
                    "Uses private key to sign, public key to verify.",
                    "Gives authenticity and integrity, not secrecy.",
                ],
                content: [
                    {
                        h: "What it is",
                        p: [
                            "A digital signature is created using a private key and verified using a public key.",
                            "It proves the sender owned the private key and the message was not modified.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Sender signs the hash of a message with private key.",
                                "Receiver verifies signature using sender's public key.",
                            ],
                        },
                    },
                    {
                        h: "What it gives you",
                        p: [
                            "Integrity - message not changed.",
                            "Authenticity - message came from holder of private key.",
                            "Non-repudiation concept - signer cannot easily deny signing later.",
                        ],
                        example: {
                            title: "Practical intuition",
                            lines: [
                                "Signature is like a tamper-proof seal plus identity stamp.",
                            ],
                        },
                    },
                    {
                        h: "Common uses",
                        p: [
                            "Signed software updates, package registries, document signing, certificates, blockchain transactions.",
                            "TLS uses server certificates and signatures to prove server identity.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "When you install a package, signature verification helps ensure it was published by the real author.",
                            ],
                        },
                    },
                ],
                subList: {
                    title: "Remember this",
                    items: [
                        {
                            k: "Sign",
                            v: "Private key signs.",
                        },
                        {
                            k: "Verify",
                            v: "Public key verifies.",
                        },
                        {
                            k: "Not encryption",
                            v: "Signature does not hide data. It proves integrity and identity.",
                        },
                    ],
                },
            },

            {
                id: "crypto-tls",
                icon: <FiGlobe />,
                title: "TLS basics",
                atGlance: [
                    "TLS secures network communication like HTTPS.",
                    "Handshake sets up identity and shared keys.",
                    "After handshake, fast symmetric encryption protects data.",
                ],
                content: [
                    {
                        h: "What TLS does",
                        p: [
                            "TLS provides privacy, integrity, and server authenticity for network traffic.",
                            "It prevents attackers from reading or modifying data in transit.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "HTTPS is HTTP running inside a TLS tunnel.",
                            ],
                        },
                    },
                    {
                        h: "High-level handshake flow",
                        p: [
                            "Client connects and asks server to prove identity.",
                            "Server sends certificate containing its public key.",
                            "Client verifies certificate using trusted CAs.",
                            "Client and server establish a shared session key.",
                            "All application data after this uses symmetric encryption.",
                        ],
                        example: {
                            title: "Mental model",
                            lines: [
                                "Handshake is about trust and key setup.",
                                "Session is about fast encrypted data transfer.",
                            ],
                        },
                    },
                    {
                        h: "What can go wrong",
                        p: [
                            "If certificate validation is skipped, attackers can do man-in-the-middle attacks.",
                            "Bad random number generation can weaken security.",
                            "Outdated TLS versions can have known vulnerabilities.",
                        ],
                        example: {
                            title: "Developer tip",
                            lines: [
                                "Never disable TLS verification in production code.",
                            ],
                        },
                    },
                ],
                callout: {
                    icon: <FiShield />,
                    title: "TLS gives you",
                    lines: [
                        "Confidentiality - attackers cannot read your data.",
                        "Integrity - attackers cannot silently modify your data.",
                        "Authenticity - you can verify you are talking to the right server.",
                    ],
                },
            },

            {
                id: "crypto-pki",
                icon: <FiLayers />,
                title: "Public key infrastructure",
                atGlance: [
                    "PKI is the system that makes public keys trustworthy.",
                    "Certificates bind identity to a public key.",
                    "Certificate Authorities (CAs) act as trusted issuers.",
                ],
                content: [
                    {
                        h: "What PKI is",
                        p: [
                            "PKI is a set of rules, roles, and processes to create, manage, and verify digital certificates.",
                            "It answers the question: how do you know this public key really belongs to this website or person?",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "A certificate says: this public key belongs to example.com and is signed by a trusted CA.",
                            ],
                        },
                    },
                    {
                        h: "Certificates",
                        p: [
                            "A certificate contains the public key and identity details like domain name.",
                            "It is signed by a CA so clients can verify it using the CA public key that is already trusted.",
                        ],
                        example: {
                            title: "Mental model",
                            lines: [
                                "Certificate is an ID card for a public key.",
                            ],
                        },
                    },
                    {
                        h: "Trust chain",
                        p: [
                            "Browsers and operating systems ship with a list of trusted root CAs.",
                            "A website certificate is verified by walking a chain up to a trusted root.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Server cert -> intermediate cert -> root cert (trusted).",
                            ],
                        },
                    },
                ],
                subList: {
                    title: "Key PKI terms",
                    items: [
                        {
                            k: "CA",
                            v: "Certificate Authority. Issues certificates and signs them.",
                        },
                        {
                            k: "Certificate",
                            v: "Binds identity to a public key, signed by CA.",
                        },
                        {
                            k: "Trust store",
                            v: "List of trusted root CA certificates in OS/browser.",
                        },
                    ],
                },
            },
        ];
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="cryptography">
            <div className="top">
                <div className="titleRow">
                    <div className="titleIcon">
                        <FiShield />
                    </div>
                    <div className="titleText">
                        <h2 className="title">Cryptography</h2>
                        <p className="sub">
                            At-a-glance revision notes for encryption, hashing,
                            signatures, TLS, and PKI.
                        </p>
                    </div>
                </div>

                <button
                    type="button"
                    className={open ? "toggleBtn open" : "toggleBtn"}
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="crypto-content"
                    title={
                        open
                            ? "Collapse cryptography notes"
                            : "Expand cryptography notes"
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

            <div
                id="crypto-content"
                className={open ? "content open" : "content"}
            >
                <div className="hintBar">
                    <FiActivity className="hintIcon" />
                    <div className="hintText">
                        Scan the "At a glance" bullets first. Then read examples
                        to build real intuition.
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
                        Revision tip - Always separate goals: confidentiality
                        (hide data), integrity (detect changes), authenticity
                        (prove identity). TLS combines all three using
                        encryption, hashing, and certificates.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Cryptography;
