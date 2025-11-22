import React, { useState, useRef, useEffect } from 'react';
import {
  Menu, X, Send, Paperclip, User,
  Settings, Info, Moon, Sun, MessageSquare, History
} from 'lucide-react';
import './App.css';

export default function CollegeChatbot() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your college assistant. How can I help you today?", sender: 'bot' }
  ]);

  const [input, setInput] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (input.trim() || uploadedFile) {
      const newMessage = {
        id: messages.length + 1,
        text: input.trim(),
        sender: 'user',
        file: uploadedFile
      };
      setMessages([...messages, newMessage]);
      setInput('');
      setUploadedFile(null);

      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: "I've received your message. How else can I assist you?",
          sender: 'bot'
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) setUploadedFile(file);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`chat-container ${isDarkMode ? 'dark' : ''}`}>
      {/* HEADER */}
      <header className="chat-header">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="icon-btn">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="chat-logo">
          <MessageSquare size={28} className="logo-icon" />
          <h1 className="logo-text">College Assistant</h1>
        </div>

        <button className="profile-btn">
          <User size={24} />
        </button>
      </header>

      {/* SIDEBAR */}
      <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Menu</h2>
          <button onClick={() => setIsMenuOpen(false)} className="icon-btn">
            <X size={24} />
          </button>
        </div>

        <nav className="sidebar-nav">
          <button className="nav-item">
            <MessageSquare size={20} />
            <span>Chats</span>
          </button>

          {/* NEW History Option */}
          <button className="nav-item">
            <History size={20} />
            <span>History</span>
          </button>

          <button className="nav-item">
            <Settings size={20} />
            <span>Settings</span>
          </button>

          <button className="nav-item">
            <Info size={20} />
            <span>About</span>
          </button>

          <button className="nav-item">
            ❓ Help & Support
          </button>

          <hr />

          <button onClick={toggleTheme} className="nav-item theme-toggle">
            <div className="theme-left">
              {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
              <span>Theme</span>
            </div>
            <span className="theme-state">{isDarkMode ? 'Dark' : 'Light'}</span>
          </button>
        </nav>
      </div>

      {/* OVERLAY */}
      {isMenuOpen && (
        <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>
      )}

      {/* CHAT AREA */}
      <div className="chat-area">
        <div className="messages-container">
          {messages.map((msg) => (
            <div key={msg.id} className={msg.sender === 'user' ? 'msg-user' : 'msg-bot'}>
              <div className={msg.sender === 'user' ? 'bubble-user' : 'bubble-bot'}>
                {msg.file && <div className="file-preview">📎 {msg.file.name}</div>}
                <p>{msg.text}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* INPUT SECTION */}
      <div className="input-area">
        <div className="input-wrapper">

          {uploadedFile && (
            <div className="uploaded-file">
              <span>📎 {uploadedFile.name}</span>
              <button onClick={() => setUploadedFile(null)} className="remove-btn">Remove</button>
            </div>
          )}

          <div className="input-row">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              hidden
            />

            <button onClick={() => fileInputRef.current?.click()} className="attach-btn">
              <Paperclip size={20} />
            </button>

            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="msg-input"
            />

            <button
              onClick={handleSend}
              disabled={!input.trim() && !uploadedFile}
              className="send-btn"
            >
              <Send size={20} />
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
