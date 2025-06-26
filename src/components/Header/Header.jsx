import React, { useContext } from 'react'
import { ToggleContext } from '../../contextApi/ToggleContext';

const Header = () => {
  const {toggle} = useContext(ToggleContext);
  return (
    <header className={`gemini-header glass ${toggle ? 'collapsed' : ''}`}>
          <div className="logo">
            Gemini<span className="accent-dot">•</span>
          </div>

          <button className="avatar-btn" aria-label="User">
            <span>A</span>
          </button>
        </header>
  )
}

export default Header
