import {FC, useState} from "react";
import {Button} from "../../components/Button.tsx";
import {TreeCardProperties} from "./trees.ts";
import star from '../../assets/star.svg'


const TreeCard: FC<TreeCardProperties> = ({title, rating, cost, image, properties}: TreeCardProperties) => {
    const [isCardHovered, setIsCardHovered] = useState(false)
    return (
        <div
            className={`p-2 rounded flex flex-col gap-4 ${isCardHovered && 'shadow-2xl'}`}
            onMouseEnter={() => setIsCardHovered(true)}
            onMouseLeave={() => setIsCardHovered(false)}
        >
            <img className='object-cover h-auto flex justify-center' src={image} alt={title}/>
            <div className='flex justify-between'>
                <div className='text-xl font-medium'>{title}</div>
                <div className='flex items-center gap-2'>
                    <div className='text-xl'>{rating.toFixed(2)}</div>
                    <img className='' src={star} alt='rating'/>
                </div>
            </div>
            <div className='flex gap-2 flex-col'>
                <div className='flex gap-2'>
                    <div className='w-[24px] h-[24px] rounded-[24px] bg-[#368B4C]'></div>
                    <div>{properties[0]}</div>
                </div>
                <div className='flex gap-2'>
                    <div className='w-[24px] h-[24px] rounded-[24px] bg-[#64C37D]'></div>
                    <div>{properties[1]}</div>
                </div>
                <div className='flex gap-2'>
                    <div className='w-[24px] h-[24px] rounded-[24px] bg-[#A4E276]'></div>
                    <div>{properties[2]}</div>
                </div>
            </div>

            <Button buttonType={isCardHovered ? "gradient" : "secondary"}>
                Подробнее — <span className='font-medium'> {cost} ₽</span>
            </Button>
        </div>
    )
}

export default TreeCard