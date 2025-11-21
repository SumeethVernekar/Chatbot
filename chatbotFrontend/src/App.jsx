import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Send, Paperclip, User, Settings, Info, Moon, Sun, MessageSquare } from 'lucide-react';

export default function App() {
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

      // Simulate bot response
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
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`h-screen flex flex-col ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'} transition-colors duration-300`}>
      {/* Header */}
      <header className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} shadow-lg border-b transition-colors duration-300`}>
        <div className="flex items-center justify-between px-6 py-4">
          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors`}
          >
            {isMenuOpen ? <X size={24} className={isDarkMode ? 'text-white' : 'text-gray-800'} /> : <Menu size={24} className={isDarkMode ? 'text-white' : 'text-gray-800'} />}
          </button>

          {/* Logo/Title */}
          <div className="flex items-center space-x-3">
            <MessageSquare className={`${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`} size={28} />
            <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              College Assistant
            </h1>
          </div>

          {/* Profile */}
          <div className="relative group">
            <button className={`p-2 rounded-full ${isDarkMode ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-indigo-500 hover:bg-indigo-600'} transition-colors`}>
              <User size={24} className="text-white" />
            </button>
            <div className={`absolute right-0 mt-2 w-48 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200`}>
              <div className="p-4">
                <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Student Name</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>student@college.edu</p>
              </div>
              <hr className={isDarkMode ? 'border-gray-700' : 'border-gray-200'} />
              <button className={`w-full text-left px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'} flex items-center space-x-2`}>
                <span>🚪 Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Menu */}
      <div className={`fixed left-0 top-0 h-full w-64 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl transform transition-transform duration-300 z-50 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Menu</h2>
            <button onClick={() => setIsMenuOpen(false)}>
              <X size={24} className={isDarkMode ? 'text-white' : 'text-gray-800'} />
            </button>
          </div>

          <nav className="space-y-2">
            <button className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'} transition-colors`}>
              <MessageSquare size={20} />
              <span>Chats</span>
            </button>

            <button className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'} transition-colors`}>
              <Settings size={20} />
              <span>Settings</span>
            </button>

            <button className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'} transition-colors`}>
              <Info size={20} />
              <span>About</span>
            </button>

            <button className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'} transition-colors`}>
              <span>❓</span>
              <span>Help & Support</span>
            </button>

            <hr className={`my-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`} />

            <button
              onClick={toggleTheme}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg ${isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'} transition-colors`}
            >
              <div className="flex items-center space-x-3">
                {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
                <span>Theme</span>
              </div>
              <span className="text-sm">{isDarkMode ? 'Dark' : 'Light'}</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-4xl mx-auto space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-2xl ${
                  message.sender === 'user'
                    ? isDarkMode
                      ? 'bg-indigo-600 text-white'
                      : 'bg-indigo-500 text-white'
                    : isDarkMode
                    ? 'bg-gray-800 text-gray-200'
                    : 'bg-white text-gray-800'
                } shadow-md`}
              >
                {message.file && (
                  <div className={`mb-2 text-sm ${message.sender === 'user' ? 'text-indigo-100' : isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    📎 {message.file.name}
                  </div>
                )}
                <p className="text-sm md:text-base">{message.text}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} border-t px-4 py-4 transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto">
          {uploadedFile && (
            <div className={`mb-2 flex items-center justify-between px-4 py-2 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg`}>
              <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                📎 {uploadedFile.name}
              </span>
              <button
                onClick={() => setUploadedFile(null)}
                className={`text-sm ${isDarkMode ? 'text-red-400 hover:text-red-300' : 'text-red-500 hover:text-red-600'}`}
              >
                Remove
              </button>
            </div>
          )}
          <div className="flex items-end space-x-3">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className={`p-3 rounded-full ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
            >
              <Paperclip size={20} className={isDarkMode ? 'text-gray-300' : 'text-gray-600'} />
            </button>

            <div className="flex-1 relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                rows="1"
                className={`w-full px-4 py-3 rounded-2xl ${
                  isDarkMode
                    ? 'bg-gray-700 text-white placeholder-gray-400'
                    : 'bg-gray-100 text-gray-800 placeholder-gray-500'
                } focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none`}
                style={{ minHeight: '48px', maxHeight: '120px' }}
              />
            </div>

            <button
              onClick={handleSend}
              className={`p-3 rounded-full ${
                input.trim() || uploadedFile
                  ? isDarkMode
                    ? 'bg-indigo-600 hover:bg-indigo-700'
                    : 'bg-indigo-500 hover:bg-indigo-600'
                  : isDarkMode
                  ? 'bg-gray-700'
                  : 'bg-gray-300'
              } transition-colors`}
              disabled={!input.trim() && !uploadedFile}
            >
              <Send size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}