import React from 'react'

const Header = () => {
  return (
    <header className="gemini-header glass">
          <div className="logo">
            Gemini<span className="accent-dot">•</span>
          </div>

          <input
            className="search-input"
            placeholder="Search chats, docs, commands…"
          />

          <button className="avatar-btn" aria-label="User">
            <span>A</span>
          </button>
        </header>
  )
}

export default Header
