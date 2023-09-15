import {FC} from "react";
import {FeedbackDto} from "./feedback.ts";

const FeedbackCard: FC<FeedbackDto> = ({name, image, good, rating, method, comment}: FeedbackDto) => {
    return (
        <div className='flex flex-wrap lg:flex-nowrap gap-3 items-start shadow p-4 rounded-xl'>
            <img src={image} alt='feedbackImage'/>
            <div className='flex flex-col gap-3'>
                <div className='flex items-center justify-between'>
                    <div className='text-green-800 font-medium'>{name}</div>
                    <div className='flex gap-1 items-center'>
                        <div className='text-xl text-green-800'>{rating.toFixed(2)}</div>
                        <span className="material-symbols-outlined w-[25px] h-[25px] text-yellow-500">grade</span>
                    </div>
                </div>
                <div className='text-green-800'>{good}</div>
                <div className='text-green-800'>({method})</div>
                <div className='text-green-800 text-lg'>{comment}</div>
            </div>
        </div>
    )
}

export default FeedbackCard