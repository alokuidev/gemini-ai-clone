import React from 'react'

const Sidebar = () => {
    return (
        <aside className="gemini-sidebar glass">
            <button className="sidebar-toggle" aria-label="Toggle Sidebar">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            <nav>
                <button className="nav-btn active">＋ New Chat</button>
                <button className="nav-btn">🕑 History</button>
                <button className="nav-btn">⚙️ Settings</button>
            </nav>
            <footer>
                <small>© 2025 Gemini Clone</small>
            </footer>
        </aside>
    )
}

export default Sidebar
