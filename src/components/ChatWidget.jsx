import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';
import './ChatWidget.css';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your Yasir Motors Assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "I'm not sure about that. Would you like to speak with a human agent?";
      const msg = input.toLowerCase();
      
      if (msg.includes('price') || msg.includes('cost')) botResponse = "Our vehicles start from $45,000 (approx. Rs 12.6M). Which model are you interested in?";
      if (msg.includes('ev') || msg.includes('electric')) botResponse = "The Yasir E-Vision is our flagship electric vehicle with 650km range and 2.8s acceleration.";
      if (msg.includes('test drive') || msg.includes('book')) botResponse = "You can book a test drive or service appointment through our 'Appointments' page!";
      if (msg.includes('location') || msg.includes('showroom')) botResponse = "We have showrooms in Karachi, Lahore, and Islamabad. Check our 'Dealers' page for details.";
      
      setMessages(prev => [...prev, { id: Date.now(), text: botResponse, sender: 'bot' }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="chat-widget-container">
      {!isOpen && (
        <button className="chat-fab" onClick={() => setIsOpen(true)}>
          <MessageCircle size={24} />
        </button>
      )}

      {isOpen && (
        <div className="chat-window glass">
          <div className="chat-header">
            <h3>Yasir AI Assistant</h3>
            <button onClick={() => setIsOpen(false)}><X size={20} /></button>
          </div>
          <div className="chat-messages">
            {messages.map(m => (
              <div key={m.id} className={`message-wrapper ${m.sender}`}>
                <div className="message-icon">
                  {m.sender === 'bot' ? <Bot size={14} /> : <User size={14} />}
                </div>
                <div className="message-text">{m.text}</div>
              </div>
            ))}
            {isTyping && (
              <div className="message-wrapper bot">
                <div className="message-icon"><Bot size={14} /></div>
                <div className="message-text typing">...</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-input">
            <input 
              type="text" 
              placeholder="Type a message..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}><Send size={18} /></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
