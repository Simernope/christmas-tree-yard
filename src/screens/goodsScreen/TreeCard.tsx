import {FC, useState} from "react";
import {Button} from "../../components/Button.tsx";
import {TreeCardProperties} from "./trees.ts";
import {useMediaQuery} from "../../hooks/useMediaQuery.ts";

const TreeCard: FC<TreeCardProperties> = ({title, rating, cost, image, properties, height}: TreeCardProperties) => {
    const [isCardHovered, setIsCardHovered] = useState(false)
    const isMobile = useMediaQuery('(max-width: 640px)')

    return (
        <div
            className={`cursor-pointer p-3 rounded flex flex-col gap-4 ${isCardHovered && 'shadow-2xl'}`}
            onMouseEnter={() => setIsCardHovered(true)}
            onMouseLeave={() => setIsCardHovered(false)}
        >
            <img className='object-cover h-auto flex justify-center' src={image} alt={title}/>
            <div className='flex justify-between'>
                <div className='text-xl font-medium'>{title} <span>{height}</span> см</div>
                <div className='flex items-center gap-2 ml-4'>
                    <span className='text-xl'>{rating.toFixed(2)}</span>
                    <span className="material-symbols-outlined w-[25px] h-[25px] text-yellow-500">grade</span>
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

            <Button buttonType={isCardHovered || isMobile ? "gradient" : "secondary"}>
                Подробнее — <span className='font-medium'> {cost} ₽</span>
            </Button>
        </div>
    )
}

export default TreeCard