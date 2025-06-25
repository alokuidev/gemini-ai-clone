import React from "react";

const Main = () => {
  return (
    <>
    
    <main className="gemini-chat">
       <div className="chat-container"> 
       <section className="hero-section">
      <div className="hero-header">
        <h1>
          <span className="gradient-text">Hello, Dev.</span>
        </h1>
        <h2>How can I help you today?</h2>
      </div>

      <div className="prompt-grid">
        <div className="prompt-card">
          <span className="icon">🧭</span>
          <p>Suggest beautiful places to see on an upcoming road trip</p>
        </div>
        <div className="prompt-card">
          <span className="icon">💡</span>
          <p>Briefly summarize this concept: urban planning</p>
        </div>
        <div className="prompt-card">
          <span className="icon">💬</span>
          <p>Brainstorm team bonding activities for our work retreat</p>
        </div>
        <div className="prompt-card">
          <span className="icon">👨‍💻</span>
          <p>Improve the readability of the following code</p>
        </div>
      </div>
    </section>  
      <section className="chat-feed">
        <div className="chat-bubble bot">
          I can help with writing, coding, learning and more!
        </div>
        <div className="chat-bubble user">Hi Gemini, what can you do?</div>
      </section>

      {/* Input */}
      <form className="input-bar glass">
        <div className="input-icons">
          <button type="button" className="icon-btn" aria-label="Voice Input">
            🎤
          </button>
          <button type="button" className="icon-btn" aria-label="Upload Image">
            🖼️
          </button>
        </div>

        <input className="prompt-input" placeholder="Type a message…" />
        <button className="send-btn" type="submit">
          ➤
        </button>
      </form>
      </div>
    </main>
    </>
  );
};

export default Main;
