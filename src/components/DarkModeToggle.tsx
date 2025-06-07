import React, { useState } from 'react';
/* Custom dark mode and light mode support */
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
            style={{
                position: 'fixed',
                top: 16,
                right: 16,
                zIndex: 1000,
                padding: '8px 16px',
                borderRadius: '24px',
                border: 'none',
                background: dark ? '#222' : '#fff',
                color: dark ? '#fff' : '#222',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }}
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
                        xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle' }}>
                        <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                            fill="currentColor" />
                    </svg>
                    Switch to Dark Mode
                </>
            )}
        </button>
    );
}

