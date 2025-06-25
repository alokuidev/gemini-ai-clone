import React, { useState } from 'react'

const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    return (
        <aside className={`gemini-sidebar glass ${extended ? 'collapsed' : ''}`}>
            <button className="sidebar-toggle" aria-label="Toggle Sidebar" onClick={() => setExtended(prev => !prev)}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            <div className='button-container '>
            <button className="nav-btn active" data-label="New Chat">＋</button>
            <button className="nav-btn" data-label="History">🕑</button>
            <button className="nav-btn" data-label="Settings">⚙️</button>
            </div>
            <footer>
                <small>© 2025 Gemini Clone</small>
            </footer>
        </aside>
    )
}

export default Sidebar
