import React, { use, useContext, useEffect, useState } from 'react'
import { ToggleContext } from '../../contextApi/ToggleContext';
import { PromptContext } from '../../contextApi/Context';

const Sidebar = ({props}) => {
    const [extended, setExtended] = useState(false);
    const {toggle, setToggle, toggleSidebar} = useContext(ToggleContext);
    const { onSent } = useContext(PromptContext) || {};
    const panelCollapse = () => {
        setExtended(!extended);
        toggleSidebar();
    }
    const handleNewChat = () => {
        if (onSent) {
            onSent("What is ReactJS?");
        }
    }
    useEffect(() => {
        console.log(props)
    },[]);
    return (
        <aside className={`gemini-sidebar glass ${extended ? 'collapsed' : ''}`}>
            <button className="sidebar-toggle" aria-label="Toggle Sidebar" onClick={() =>panelCollapse()}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            <div className='button-container '>
            <button className="nav-btn active" data-label="New Chat" onClick={handleNewChat}>＋</button>
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
