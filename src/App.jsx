import { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import ChatMessage from './components/ChatMessage';
import {formatTime,} from '../src/utils/chatUtils';
import Loading from './components/Loading';
import ChatInput from './components/ChatInput';
import {generateContent} from '../src/services/geminiApi';


const App = () => {
  const [darkMode, setDarkMode] = useState('dark');
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  const [defaultMessage, setDefaultMessage] = useState("Hello, how can I help you?");
  const [messages, setMessages] = useState ([]);

  const toggleDarkMode = () => {
    setDarkMode(darkMode === 'dark' ? 'light' : 'dark');
  }

  const handleSendMessage = () => {

    // clear default message
    if(defaultMessage) setDefaultMessage(null)

    const userMessage = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: generateContent(input),
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((pev) => [...pev, botMessage]);
      setIsLoading(false);
      }, 1000)
  };

  useEffect(() => {
    const saveTheme = localStorage.getItem('theme');
    if(saveTheme){
      setDarkMode(darkMode);
    }
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(darkMode);
    localStorage.setItem('theme', darkMode)
  },[darkMode])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth'});
  },[messages]);

  return (
    <div
      className="flex flex-col h-screen bg-gray-100 dark:bg-[#1b1c1d]
     transition-all duration-500 ease-in-out">
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className={`flex-1 overflow-y-auto p-4 md:p-6 ${messages.length === 0 && defaultMessage ? 'flex justify-center items-center' : ''}`}>
        <div className="max-w-5xl mx-auto space-y-4">
        {messages.length === 0 && defaultMessage ? (
          <ChatMessage 
          messages={{
            text: defaultMessage,
            sender: 'bot',
            timestamp: new Date(),
          }}
          formatTime={formatTime}
          isDefaultMessage={true}
           /> ): (
          messages.map((message, index) => (
        <ChatMessage 
          key={message.id}
          messages={message} 
          formatTime={formatTime}
          isDefaultMessage={index === 0 && message.sender === 'bot' && !defaultMessage}
        />
      ))
    )}

        {isLoading && <Loading darkMode={darkMode} />}
        {/* Auto-scroll target */}
        <div ref={messagesEndRef} />
        </div>
      </div>
      <ChatInput 
       input={input}
       setInput={setInput}
       loading={isLoading} 
       handleSendMessage={handleSendMessage} />

    </div>
  );
}

export default App
