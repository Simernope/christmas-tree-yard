import {questions} from "./questions.ts";
import Question from "./Question.tsx";

const QuestionsScreen = () => {
    return (
        <section>
            <div className='divide-y border rounded-2xl ' id='questions'>
                {
                    questions.map(question => (
                        <Question key={question.id} id={question.id} question={question.question} answer={question.answer}/>
                    ))
                }
            </div>
        </section>
    )
}

export {QuestionsScreen}