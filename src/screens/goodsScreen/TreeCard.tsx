import {FC, useState} from "react";
import {Button} from "../../components/";
import {TreeCardProperties} from "./trees.ts";
import {useMediaQuery} from "../../hooks/useMediaQuery.ts";
import Modal from "./Modal.tsx";
import {Parameter} from "./Parametr.tsx";


const TreeCard: FC<TreeCardProperties> = ( treeCardProperties) => {
    const [isCardHovered, setIsCardHovered] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const isMobile = useMediaQuery('(max-width: 640px)')
    const {title, rating, cost, image, properties, height} = treeCardProperties

    return (

            <div
                className={`p-3 rounded flex flex-col gap-4 ${isMobile && 'shadow-2xl'} hover:shadow-2xl`}
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
                    <Parameter item={properties[0]} circleColor={'bg-[#368B4C]'}/>
                    <Parameter item={properties[1]} circleColor={'bg-[#64C37D]'}/>
                    <Parameter item={properties[2]} circleColor={'bg-[#A4E276]'}/>
                </div>
                <div onClick={() => setIsModalOpen(true)}>
                    <Button buttonType={isCardHovered || isMobile ? "gradient" : "secondary"}>
                        Подробнее — <span className='font-medium'> {cost} ₽</span>
                    </Button>
                </div>
                {
                    isModalOpen &&
                    <Modal treeInfo={treeCardProperties} setActive={setIsModalOpen} />
                }
            </div>

    )
}

export default TreeCard