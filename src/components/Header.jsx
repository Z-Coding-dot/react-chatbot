import { Bot, Moon, Sparkles, Sun } from 'lucide-react'

const Header = ({toggleDarkMode, darkMode}) => {
  return (
    <header className='border-b border-slate-200/50 dark:border-slate-700/20'>
      <div className="flex items-center justify-between max-w-5xl mx-auto p-4">
        {/* Left Section */}
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full">
            <Bot className="size-4 sm:size-6 text-white font-bold" />
          </div>
          <h1 className="text-sm sm:text-xl font-bold text-slate-800 dark:text-slate-200 truncate">Pars Chat</h1>
        </div>
        {/* Right Section */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1 px-2.5 py-1 rounded text-sm font-medium">
            <Sparkles className='size-5 text-indigo-800 dark:text-indigo-300' />
            <span className='hidden sm:block text-indigo-800 dark:text-indigo-300 text-xs sm:text-sm truncate'>AI Powered</span>
          </div>
          <button  onClick={toggleDarkMode}
          className=" text-indigo-700 dark:text-yellow-300 bg-slate-100 dark:bg-gray-700/40 rounded-full p-2.5 hover:bg-slate-200 dark:hover:bg-slate-900 transition-all cursor-pointer">
            {darkMode === 'dark' ? <Sun className="size-5" /> : <Moon className='size-5'/>}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header
