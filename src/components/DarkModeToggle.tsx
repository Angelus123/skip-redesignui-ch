// Description: A toggle button component to switch between dark and light mode.
import React, { useState } from 'react';
export default function DarkModeToggle() {
    const [dark, setDark] = useState(false);

    React.useEffect(() => {
        if (dark) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [dark]);

    return (
        <button
            onClick={() => setDark((d) => !d)}
            className={`fixed top-4 right-4 z-[1000] px-4 py-2 rounded-full border-none shadow-md cursor-pointer flex items-center gap-2 transition-colors ${
                dark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
            }`}
            aria-label="Toggle dark mode"
        >
            {dark ? (
                <>
                    <span role="img" aria-label="sun">🌞</span>
                    Switch to Light Mode
                </>
            ) : (
                <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" className="align-middle">
                        <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                            fill="currentColor" />
                    </svg>
                    Switch to Dark Mode
                </>
            )}
        </button>
    );
}

