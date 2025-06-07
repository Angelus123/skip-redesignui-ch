// Description: A React component to toggle between light and dark themes using localStorage.
// It applies the selected theme to the document root and persists the choice in localStorage.
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <>
            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                style={{
                    position: 'fixed',
                    top: 16,
                    right: 16,
                    zIndex: 1000,
                    padding: '8px 16px',
                    borderRadius: '24px',
                    border: 'none',
                    background: theme === "dark" ? '#222' : '#fff',
                    color: theme === "dark" ? '#fff' : '#222',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}
                aria-label="Toggle dark mode"
            >
                {theme === "dark" ? (
                    <>
                        <span role="img" aria-label="sun">🌞</span>
                        Switch to Light Mode
                    </>
                ) : (
                    <>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle' }}>
                            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                                fill="currentColor" />
                        </svg>
                        Switch to Dark Mode
                    </>
                )}
            </button>
        </>
    );
}
