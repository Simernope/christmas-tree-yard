import {feedback} from "./feedback.ts";
import FeedbackCard from "./FeedbackCard.tsx";

const FeedbackScreen = () => {
    return (
        <section id='feedback'>
            <div className='text-2xl mb-5'>Отзывы</div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {
                    feedback.map(item => (
                        <FeedbackCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            good={item.good}
                            method={item.method}
                            comment={item.comment}
                            image={item.image}
                            rating={item.rating}/>
                    ))
                }
            </div>
        </section>
    )
}

export {FeedbackScreen}