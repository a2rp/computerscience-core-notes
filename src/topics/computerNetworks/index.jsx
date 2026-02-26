// src/pages/topics/computerNetworks/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiWifi,
    FiLayers,
    FiBox,
    FiActivity,
    FiHardDrive,
    FiShuffle,
    FiGlobe,
    FiShield,
    FiChevronsDown,
    FiChevronsUp,
    FiInfo,
    FiZap,
    FiCpu,
} from "react-icons/fi";

const ComputerNetworks = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                id: "cn-basics",
                icon: <FiLayers />,
                title: "Basics",
                atGlance: [
                    "Networks connect devices so they can share data and resources.",
                    "OSI is a conceptual 7-layer model, TCP/IP is the practical internet stack.",
                    "Encapsulation is wrapping data with headers as it moves down the stack.",
                ],
                content: [
                    {
                        h: "Network types",
                        p: [
                            "LAN is a small local network like home or office.",
                            "WAN connects larger areas and usually involves ISPs.",
                            "PAN is personal area network like Bluetooth devices.",
                            "MAN covers a city-scale network (less common in daily dev talk).",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Your phone and laptop connected via WiFi at home is LAN.",
                                "Your home router to the internet is WAN.",
                            ],
                        },
                    },
                    {
                        h: "OSI model",
                        p: [
                            "OSI has 7 layers. It is mainly used to understand and debug networking.",
                            "Layers from bottom to top are Physical, Data Link, Network, Transport, Session, Presentation, Application.",
                        ],
                        example: {
                            title: "Debug mindset",
                            lines: [
                                "No internet? Check cable/WiFi (Physical), then IP (Network), then DNS/HTTP (Application).",
                            ],
                        },
                    },
                    {
                        h: "TCP/IP model",
                        p: [
                            "TCP/IP is the real-world model used on the internet.",
                            "Common mapping is Link, Internet, Transport, Application.",
                            "OSI is more detailed, TCP/IP is more practical.",
                        ],
                        example: {
                            title: "Quick mapping",
                            lines: [
                                "OSI Network layer roughly maps to TCP/IP Internet layer (IP).",
                            ],
                        },
                    },
                    {
                        h: "Encapsulation",
                        p: [
                            "Encapsulation means each layer adds its own header around the data.",
                            "When sending, data goes down the layers and gets wrapped.",
                            "When receiving, headers are removed layer by layer (decapsulation).",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "HTTP data is wrapped inside TCP segment, inside IP packet, inside Ethernet frame.",
                            ],
                        },
                    },
                ],
            },

            {
                id: "cn-physical",
                icon: <FiHardDrive />,
                title: "Physical Layer",
                atGlance: [
                    "Physical layer is about bits over a medium, not IPs or ports.",
                    "Bandwidth is how much data can flow, latency is how long it takes to arrive.",
                    "Wired is stable, wireless is convenient but noisy.",
                ],
                content: [
                    {
                        h: "Transmission media",
                        p: [
                            "Twisted pair (Ethernet) is common for short-distance wiring.",
                            "Fiber optic is fast and long-distance with low interference.",
                            "Wireless uses radio signals and is affected by interference and obstacles.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Fiber is used for backbone links, Ethernet for office wiring, WiFi for last meter mobility.",
                            ],
                        },
                    },
                    {
                        h: "Bandwidth vs Latency",
                        p: [
                            "Bandwidth is the maximum data rate (like width of a highway).",
                            "Latency is the time delay for a packet to travel (like travel time).",
                            "High bandwidth does not guarantee low latency.",
                        ],
                        example: {
                            title: "Simple intuition",
                            lines: [
                                "Downloading a big file needs bandwidth.",
                                "Gaming and calls need low latency and stable jitter.",
                            ],
                        },
                    },
                ],
            },

            {
                id: "cn-datalink",
                icon: <FiBox />,
                title: "Data Link Layer",
                atGlance: [
                    "Data Link handles local delivery on the same network segment.",
                    "MAC addresses identify devices on a local link.",
                    "Switches forward frames using MAC tables.",
                ],
                content: [
                    {
                        h: "MAC addressing",
                        p: [
                            "MAC address is a hardware-like identifier used inside a local network.",
                            "It is used for delivering frames within the same LAN.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "When your laptop sends data to your router on WiFi, it uses MAC addresses at this layer.",
                            ],
                        },
                    },
                    {
                        h: "ARP",
                        p: [
                            "ARP resolves IP address to MAC address on a local network.",
                            "If you know the target IP, you still need the MAC to send the frame locally.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Your laptop wants to reach 192.168.1.1 so it asks 'Who has 192.168.1.1?' and learns the router MAC.",
                            ],
                        },
                    },
                    {
                        h: "Switching",
                        p: [
                            "Switches operate at Data Link layer and forward frames based on destination MAC.",
                            "They learn which MAC is on which port by observing traffic (MAC table).",
                        ],
                        example: {
                            title: "Why switches help",
                            lines: [
                                "A hub broadcasts everywhere, a switch forwards only to the right port, reducing noise.",
                            ],
                        },
                    },
                ],
            },

            {
                id: "cn-network-layer",
                icon: <FiShuffle />,
                title: "Network Layer",
                atGlance: [
                    "Network layer is about IP addressing and routing between networks.",
                    "Subnetting splits a network into smaller networks.",
                    "Routers move packets between networks.",
                ],
                content: [
                    {
                        h: "IP addressing",
                        p: [
                            "IP address identifies a host on a network and helps route packets across networks.",
                            "IPv4 is 32-bit, IPv6 is 128-bit for a much larger address space.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Your laptop has a private IP like 192.168.x.x inside home network.",
                                "Your router has a public IP assigned by ISP for the internet side.",
                            ],
                        },
                    },
                    {
                        h: "Subnetting",
                        p: [
                            "Subnetting divides a large network into smaller ranges using a subnet mask or CIDR prefix.",
                            "It helps manage routing, security boundaries, and IP allocation.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "192.168.1.0/24 means 256 addresses in that subnet (0 to 255).",
                            ],
                        },
                    },
                    {
                        h: "Routing algorithms",
                        p: [
                            "Routing decides the path packets take from source network to destination network.",
                            "Common ideas include distance vector and link state routing.",
                        ],
                        example: {
                            title: "Quick intuition",
                            lines: [
                                "Routers maintain tables so they know which next hop leads closer to a network.",
                            ],
                        },
                    },
                    {
                        h: "ICMP",
                        p: [
                            "ICMP is used for network diagnostics and control messages.",
                            "Ping uses ICMP echo request and echo reply to test reachability.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "If ping fails, you might have routing, firewall, or connectivity issues.",
                            ],
                        },
                    },
                ],
            },

            {
                id: "cn-transport",
                icon: <FiActivity />,
                title: "Transport Layer",
                atGlance: [
                    "Transport is end-to-end communication between applications.",
                    "TCP is reliable and ordered, UDP is fast and lightweight.",
                    "Ports identify which app should receive the data.",
                ],
                content: [
                    {
                        h: "TCP vs UDP",
                        p: [
                            "TCP provides reliable delivery with ordering, retransmissions, and congestion control.",
                            "UDP sends packets without guarantees, but with low overhead and lower latency.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "TCP is used for web browsing and file downloads.",
                                "UDP is common for live streaming, VoIP, and gaming.",
                            ],
                        },
                    },
                    {
                        h: "3-way handshake",
                        p: [
                            "TCP connection starts with SYN, SYN-ACK, ACK.",
                            "This establishes initial sequence numbers and confirms both sides are ready.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Client says 'SYN' (I want to connect).",
                                "Server says 'SYN-ACK' (ok and I also want to connect).",
                                "Client says 'ACK' (confirmed).",
                            ],
                        },
                    },
                    {
                        h: "Congestion control",
                        p: [
                            "Congestion control prevents the network from being overloaded.",
                            "TCP adjusts sending rate based on packet loss and RTT changes.",
                        ],
                        example: {
                            title: "Intuition",
                            lines: [
                                "If too many packets drop, TCP slows down to avoid collapse.",
                            ],
                        },
                    },
                    {
                        h: "Flow control",
                        p: [
                            "Flow control ensures sender does not overwhelm the receiver.",
                            "TCP uses sliding window so receiver can say how much it can handle.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "A slow device can advertise a smaller receive window to reduce incoming rate.",
                            ],
                        },
                    },
                ],
            },

            {
                id: "cn-application",
                icon: <FiGlobe />,
                title: "Application Layer",
                atGlance: [
                    "This is where real app protocols live like HTTP and DNS.",
                    "HTTPS is HTTP plus TLS encryption and identity verification.",
                    "DNS turns human names into IP addresses.",
                ],
                content: [
                    {
                        h: "HTTP",
                        p: [
                            "HTTP is the web protocol for request and response.",
                            "Common methods are GET, POST, PUT, DELETE.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Browser sends GET /products. Server returns HTML or JSON response.",
                            ],
                        },
                    },
                    {
                        h: "HTTPS",
                        p: [
                            "HTTPS is HTTP over TLS, meaning data is encrypted and protected from tampering.",
                            "It also verifies the server identity using certificates.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Without HTTPS, someone on the same WiFi can sniff or modify traffic.",
                            ],
                        },
                    },
                    {
                        h: "DNS",
                        p: [
                            "DNS resolves domain names into IP addresses.",
                            "Your device asks a resolver, which may ask root, TLD, and authoritative servers.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "google.com becomes an IP address so your device knows where to send packets.",
                            ],
                        },
                    },
                    {
                        h: "FTP",
                        p: [
                            "FTP is an older protocol for transferring files.",
                            "It is often replaced by SFTP and HTTPS-based upload for security.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "FTP without encryption can expose credentials and file contents.",
                            ],
                        },
                    },
                    {
                        h: "SMTP",
                        p: [
                            "SMTP is used to send emails between mail servers.",
                            "Receiving is often done via IMAP or POP3, but sending is SMTP.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Your app sends email through SMTP provider or an email API built on top of SMTP.",
                            ],
                        },
                    },
                ],
            },

            {
                id: "cn-advanced",
                icon: <FiShield />,
                title: "Advanced",
                atGlance: [
                    "NAT allows many private devices to share one public IP.",
                    "Load balancing spreads traffic across servers for reliability and scaling.",
                    "CDN puts content closer to users to reduce latency.",
                ],
                content: [
                    {
                        h: "NAT",
                        p: [
                            "NAT translates private IP addresses to a public IP for internet access.",
                            "This is why many devices at home can share one ISP connection.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Laptop 192.168.1.10 and phone 192.168.1.11 both appear as the same public IP to the internet.",
                            ],
                        },
                    },
                    {
                        h: "Load balancing",
                        p: [
                            "A load balancer distributes incoming traffic across multiple servers.",
                            "It improves availability, helps scaling, and can do health checks.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "If one server fails, load balancer routes traffic to healthy servers.",
                            ],
                        },
                    },
                    {
                        h: "CDN",
                        p: [
                            "CDN caches static content like images, CSS, JS at edge locations near users.",
                            "This reduces latency and decreases load on your origin server.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Your website images load faster in different countries using CDN edge caches.",
                            ],
                        },
                    },
                    {
                        h: "Network security basics",
                        p: [
                            "Use HTTPS, secure DNS settings when possible, and avoid exposing services directly.",
                            "Firewalls restrict traffic, VPN encrypts tunnels, and segmentation limits blast radius.",
                        ],
                        example: {
                            title: "Example",
                            lines: [
                                "Closing unused ports and using least privilege reduces attack surface.",
                            ],
                        },
                    },
                ],
                callout: {
                    icon: <FiInfo />,
                    title: "Practical debugging order",
                    lines: [
                        "Check connectivity (WiFi, cable) then IP and gateway then DNS then HTTP.",
                        "Many 'internet down' issues are actually DNS issues.",
                    ],
                },
            },
        ];
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="computer-networks">
            <div className="top">
                <div className="titleRow">
                    <div className="titleIcon">
                        <FiWifi />
                    </div>
                    <div className="titleText">
                        <h2 className="title">Computer Networks</h2>
                        <p className="sub">
                            At-a-glance revision for OSI layers, TCP/IP,
                            routing, transport, and web protocols with beginner
                            examples.
                        </p>
                    </div>
                </div>

                <button
                    type="button"
                    className={open ? "toggleBtn open" : "toggleBtn"}
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="cn-content"
                    title={
                        open ? "Collapse Network notes" : "Expand Network notes"
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

            <div id="cn-content" className={open ? "content open" : "content"}>
                <div className="hintBar">
                    <FiCpu className="hintIcon" />
                    <div className="hintText">
                        Think in layers. When something fails, locate the layer
                        before guessing the fix.
                    </div>
                </div>

                <div className="grid">
                    {sections.map((sec) => (
                        <div key={sec.id} className="card">
                            <div className="cardHead">
                                <div className="cardIcon">{sec.icon}</div>
                                <div className="cardTitleWrap">
                                    <div className="cardTitle">{sec.title}</div>
                                    <div className="cardMini">
                                        Quick revision points and examples
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
                                                    <p key={idx} className="p">
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
                    ))}
                </div>

                <div className="footerNote">
                    <div className="footerIcon">
                        <FiZap />
                    </div>
                    <div className="footerText">
                        Interview tip - Always explain network problems with a
                        layer-based approach and mention trade-offs like latency
                        vs throughput and reliability vs speed.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ComputerNetworks;
