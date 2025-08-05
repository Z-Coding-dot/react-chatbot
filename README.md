# Pars Chat - AI-Powered Chatbot

A modern, responsive AI chatbot built with React and Vite, powered by Google's Gemini AI. Experience seamless conversations with an intelligent AI assistant in a beautiful, dark/light mode interface.

## ✨ Features

- 🤖 **AI-Powered Conversations** - Powered by Google's Gemini AI for intelligent responses
- 🌙 **Dark/Light Mode** - Toggle between dark and light themes with persistent storage
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Real-time Chat** - Instant message sending with loading states
- 🎨 **Modern UI** - Clean, intuitive interface with smooth animations
- 🔄 **Auto-scroll** - Automatically scrolls to the latest message
- 💾 **Local Storage** - Remembers your theme preference
- 🚀 **Fast Development** - Built with Vite for lightning-fast development experience

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Styling**: Tailwind CSS 4.1.11
- **Icons**: Lucide React
- **AI Service**: Google Gemini API
- **Loading Animation**: LDRS (Lightweight Dynamic React Spinners)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Google Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd AI-Chatbot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory and add your Gemini API credentials:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   VITE_GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent
   ```

   > **Note**: You'll need to get your API key from the [Google AI Studio](https://makersuite.google.com/app/apikey)

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to see your chatbot in action!

## 📁 Project Structure

```
AI-Chatbot/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── ChatInput.jsx   # Message input component
│   │   ├── ChatMessage.jsx # Individual message display
│   │   ├── Header.jsx      # App header with theme toggle
│   │   └── Loading.jsx     # Loading animation component
│   ├── services/           # API services
│   │   └── geminiApi.js    # Gemini AI integration
│   ├── utils/              # Utility functions
│   │   └── chatUtils.js    # Chat-related utilities
│   ├── App.jsx             # Main application component
│   └── main.jsx            # Application entry point
├── package.json            # Dependencies and scripts
└── vite.config.js          # Vite configuration
```

## 🎯 Usage

1. **Start a Conversation**: Type your message in the input field at the bottom
2. **Send Messages**: Press Enter or click the send button to send your message
3. **Toggle Theme**: Click the sun/moon icon in the header to switch between dark and light modes
4. **View History**: Your conversation history is displayed in the chat area with timestamps

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🌟 Key Features Explained

### AI Integration
The chatbot uses Google's Gemini AI API to generate intelligent responses. The integration is handled in `src/services/geminiApi.js` with proper error handling and API key management.

### Theme Management
Dark/light mode toggle with persistent storage using localStorage. The theme preference is saved and restored on page reload.

### Responsive Design
Built with Tailwind CSS for a fully responsive experience across all device sizes.

### Real-time Chat
Messages are displayed instantly with smooth animations and auto-scroll functionality.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Google Gemini AI](https://ai.google.dev/) for providing the AI capabilities
- [React](https://reactjs.org/) for the amazing frontend framework
- [Vite](https://vitejs.dev/) for the fast build tool
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide React](https://lucide.dev/) for the beautiful icons

## 📞 Support

If you have any questions or need help, feel free to open an issue in the repository.

---

**Made with ❤️ by Ziaulhaq Parsa**
