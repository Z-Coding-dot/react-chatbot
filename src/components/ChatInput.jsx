import { Send } from 'lucide-react';

const ChatInput = ({input, setInput, loading, handleSendMessage}) => {
  return (
    <div>
      <div className="sm:max-w-4xl max-w-auto mx-auto mb-5 px-4">
        <div className="flex items-center space-x-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
                if(e.key === "Enter" && !e.shiftKey){
                    e.preventDefault();
                    handleSendMessage();
                }
            }}
            type="text"
            placeholder="Ask me anything..."
            className="w-full bg-light-100 dark:bg-dark-100 border border-slate-300/50 dark:border-slate-700/50 text-sm sm:text-base
                       rounded-full sm:px-5 px-3 sm:py-3 py-1.5 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"/>

          <button
            onClick={handleSendMessage}
            disabled={loading || !input.trim()}
            className={`p-3 rounded-full shadow-lg transition-colors cursor-pointer`}>
            <Send className="text-slate-800 dark:text-slate-300 size-5 sm:size-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatInput
