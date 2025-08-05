import { DotPulse } from 'ldrs/react'
import 'ldrs/react/DotPulse.css'
import { BotIcon } from 'lucide-react'

const Loading = ({ darkMode }) => {
    return (
        <div className="flex items-start space-x-3 p-4 bg-white dark:bg-[#2c2c2e] rounded-xl shadow-md max-w-fit">
            {/* Bot Icon */}
            <div className="text-3xl text-indigo-600 dark:text-indigo-400">
                <BotIcon />
            </div>
          <div className=''>
              <DotPulse
                size="30"
                speed="1.3"
                strokeLength="0.15"
                bgOpacity="0.1"
                color={darkMode === 'dark' ? 'white' : 'black'}/>
          </div>

        </div>
    )
}

export default Loading

