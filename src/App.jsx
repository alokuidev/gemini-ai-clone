import React from "react";

const App = () => {
  return (
    <div>
      <div className="gemini-wrapper">
        {/* === Header === */}
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

        {/* === Sidebar === */}
        <aside className="gemini-sidebar glass">
          <nav>
            <button className="nav-btn active">＋ New Chat</button>
            <button className="nav-btn">🕑 History</button>
            <button className="nav-btn">⚙️ Settings</button>
          </nav>
          <footer>
            <small>© 2025 Gemini Clone</small>
          </footer>
        </aside>

        {/* === Chat area === */}
        <main className="gemini-chat">
          <section className="chat-feed">
            <div className="chat-bubble bot">
              I can help with writing, coding, learning and more!
            </div>
            <div className="chat-bubble user">Hi Gemini, what can you do?</div>
          </section>

          {/* Input */}
          <form className="input-bar glass">
            <div className="input-icons">
              <button
                type="button"
                className="icon-btn"
                aria-label="Voice Input"
              >
                🎤
              </button>
              <button
                type="button"
                className="icon-btn"
                aria-label="Upload Image"
              >
                🖼️
              </button>
            </div>

            <input className="prompt-input" placeholder="Type a message…" />
            <button className="send-btn" type="submit">
              ➤
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default App;
