import {FC, useState} from "react";
import {QuestionDto} from "./questions.ts";

const Question: FC<QuestionDto> = ({question, answer}: QuestionDto) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='px-3 py-2  cursor-pointer'  onClick={() => setIsOpen(!isOpen)}>
            <div className='flex items-center justify-between'>
                <div className='text-xl font-medium text-green-800'>{question}</div>
                {
                    isOpen
                        ?
                        <span className="material-symbols-outlined text-green-800 cursor-pointer">
                            close
                        </span>
                        :
                        <span className="material-symbols-outlined text-green-800 cursor-pointer">
                            add
                        </span>
                }
            </div>
            {
                isOpen &&
                <div className='mt-2 text-lg text-green-800 leading-loose'>
                    {answer}
                </div>
            }
        </div>
    )
}

export default Question