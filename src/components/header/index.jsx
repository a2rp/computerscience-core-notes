// Header.jsx
import React, { useEffect, useState } from "react";
import { Styled } from "./styled";
import { FiMoon, FiSun } from "react-icons/fi";

const THEME_KEY = "app-theme";
const logo = `${import.meta.env.BASE_URL}logo.png`;

const getInitialTheme = () => {
    try {
        const storedTheme = window.localStorage.getItem(THEME_KEY);
        if (storedTheme === "light" || storedTheme === "dark") return storedTheme;
    } catch {
        // Storage can be unavailable in private or restricted browser contexts.
    }

    return window.matchMedia?.("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
};

const Header = () => {
    const [logoLoaded, setLogoLoaded] = useState(false);
    const [theme, setTheme] = useState(getInitialTheme);

    // Apply theme + persist
    useEffect(() => {
        if (theme === "light") {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.removeAttribute("data-theme");
        }

        try {
            window.localStorage.setItem(THEME_KEY, theme);
        } catch {
            // Keep theme switching available when storage is blocked.
        }
    }, [theme]);

    const nextTheme = theme === "light" ? "dark" : "light";

    const handleToggle = () => {
        setTheme(nextTheme);
    };

    return (
        <Styled.Wrapper>
            <Styled.Main>
                <div className="logoNameThemeToggleWrapper">
                    <div className="logoNameWrapper">
                        <div className="logoWrapper">
                            {!logoLoaded && <div className="logoSkeleton" />}

                            <img
                                className={logoLoaded ? "logo loaded" : "logo"}
                                src={logo}
                                alt="computerscience-core-notes"
                                onLoad={() => setLogoLoaded(true)}
                                loading="eager"
                                decoding="async"
                            />
                        </div>

                        <div className="nameWrapper">
                            <div className="title">
                                computerscience-core-notes
                            </div>
                            <div className="subTitle">
                                At-a-glance computer science revision
                            </div>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="themeToggleBtn"
                        onClick={handleToggle}
                        aria-label={`Switch to ${nextTheme} theme`}
                        title={`Switch to ${nextTheme}`}
                    >
                        <span className="icon">
                            {theme === "light" ? <FiMoon /> : <FiSun />}
                        </span>
                        <span className="label">
                            {theme === "light" ? "Light" : "Dark"}
                        </span>
                    </button>
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default Header;
