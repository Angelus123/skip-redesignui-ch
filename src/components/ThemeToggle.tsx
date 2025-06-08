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
                className="fixed top-4 right-4 z-[1000] px-4 py-2 rounded-full border-none shadow-md cursor-pointer flex items-center gap-2 bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
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
                            xmlns="http://www.w3.org/2000/svg" className="inline align-middle">
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
