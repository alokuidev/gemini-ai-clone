import React from "react";

const App = () => {
  return (
    <div>
      <div className="gemini-wrapper">
        <header className="gemini-header">
          <div className="logo">Gemini</div>
          <input
            className="search-bar"
            placeholder="Search or start a chat..."
          />
          <div className="user-avatar">A</div>
        </header>

        <aside className="gemini-sidebar">
          <button className="sidebar-btn active">New Chat</button>
          <button className="sidebar-btn">History</button>
          <button className="sidebar-btn">Settings</button>
        </aside>

        <main className="gemini-chat">
          <div className="chat-message user">Hi Gemini, what can you do?</div>
          <div className="chat-message ai">
            I can help you with writing, coding, learning, and more!
          </div>
          <div className="chat-input-container">
            <input className="chat-input" placeholder="Type your message..." />
            <button className="send-btn">➤</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
