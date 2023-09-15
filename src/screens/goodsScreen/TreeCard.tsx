import {FC, useState} from "react";
import {Button} from "../../components/";
import {useMediaQuery} from "../../hooks/useMediaQuery.ts";
import Modal from "./Modal.tsx";
import {Parameter} from "./Parametr.tsx";
import ImageSlider from "./ImageSlider.tsx";

type TreeCardProps = {
    title: string,
    rating: number,
    cost: number,
    image: [string, string],
    properties: Array<string>,
    height: number
    description: string
    avitoLink: string
}

const TreeCard: FC<TreeCardProps> = (treeCardProperties) => {
    const [isCardHovered, setIsCardHovered] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const isMobile = useMediaQuery('(max-width: 640px)')
    const {title, rating, cost, image, properties, height} = treeCardProperties

    const propertyColors = ['bg-[#007542]', 'bg-[#3AA346]', 'bg-[#78D23D]', 'bg-[#9BE931]']
    return (

        <div
            className={`p-3 rounded flex flex-col gap-4 ${isMobile && 'shadow-2xl'} hover:shadow-2xl`}
            onMouseEnter={() => setIsCardHovered(true)}
            onMouseLeave={() => setIsCardHovered(false)}
        >
            <div className='flex flex-grow'>
                <ImageSlider image={image} alt={title} styles='object-cover h-auto flex justify-center '/>

            </div>
            <div className='flex justify-between flex-grow-0'>
                <div className='text-xl font-medium '>{title} <span>{height}</span> см</div>
                <div className='flex items-center gap-2 ml-4'>
                    <span className='text-xl'>{rating.toFixed(2)}</span>
                    <span className="material-symbols-outlined w-[25px] h-[25px] text-yellow-500">grade</span>
                </div>
            </div>
            <div className='flex gap-2 flex-col'>
                {
                    properties.map((property, index) =>
                        <Parameter key={property} item={property} circleColor={propertyColors[index]}/>
                    )
                }
            </div>
            <div onClick={() => {
                setIsModalOpen(true)
            }

            }>
                <Button buttonType={isCardHovered || isMobile ? "gradient" : "secondary"}>
                    Подробнее — <span className='font-medium'> {cost} ₽</span>
                </Button>
            </div>
            {
                isModalOpen &&
                <Modal treeInfo={treeCardProperties} setActive={setIsModalOpen}/>
            }
        </div>

    )
}

export default TreeCard