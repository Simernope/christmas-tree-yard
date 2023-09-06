import {questions} from "./questions.ts";
import Question from "./Question.tsx";

const QuestionsScreen = () => {
    return (
        <div className='divide-y border rounded-2xl '>
            {
                questions.map(question => (
                    <Question key={question.id} id={question.id} question={question.question} answer={question.answer}/>
                ))
            }
        </div>
    )
}

export {QuestionsScreen}