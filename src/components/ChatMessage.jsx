import { Bot, User } from 'lucide-react'

const ChatMessage = ({messages, formatTime, isDefaultMessage}) => {


    if(isDefaultMessage){
        return (
            <div className='flex justify-center items-center w-full h-svw sm:h-svh overflow-y-hidden'>
                <p className='text-center text-lg font-medium text-gray-600 dark:text-gray-300'>{messages.text}</p>
            </div>
        );
    }

  return (
    <div className={`flex ${messages.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
        <div className={`flex max-w-[88%] md:max-w-[70%] rounded-2xl px-5 py-3.5 bg-light-100 dark:bg-dark-100`}>
                <div className={`flex-shrink-0 mr-2 `}>
                    {messages.sender === 'user' ? <User className='size-5'/> : <Bot className='size-6 dark:text-indigo-400 text-indigo-900' />}

                </div>
                <div className="flex-1">
                    <div className='mb-3 mr-3 flex items-center justify-between'>
                        <span className='font-medium mt-1 text-xs sm:text-sm'>
                            {messages.sender === 'user' ? 'You' : 'AI Assistant'}
                        </span>

                        <span className={`text-xs ml-12`}>
                            {formatTime(messages.timestamp)}
                        </span>
                    </div>
                    <p className='text-sm md:text-base whitespace-pre-wrap break-words leading-relaxed'>
                        {messages.text}
                    </p>
                </div>
        </div>
    </div>
  )
}

export default ChatMessage
