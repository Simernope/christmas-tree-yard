import {FC, useState} from "react";
import {QuestionDto} from "./questions.ts";

const Question: FC<QuestionDto> = ({question, answer}: QuestionDto) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='px-3 py-1'>
            <div className='flex items-center justify-between'>
                <div className='text-xl font-medium text-green-800'>{question}</div>
                {
                    isOpen
                        ?
                        <span className="material-symbols-outlined text-green-800 cursor-pointer" onClick={() => setIsOpen(false)}>
                            close
                        </span>
                        :
                        <span className="material-symbols-outlined text-green-800 cursor-pointer" onClick={() => setIsOpen(true)}>
                            add
                        </span>
                }
            </div>
            {
                isOpen &&
                <div className='mt-2 text-green-800'>
                    {answer}
                </div>
            }
        </div>
    )
}

export default Question