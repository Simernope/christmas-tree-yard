import {FC, useEffect, useState} from "react";
import {Parameter} from "./Parametr.tsx";
import Form from "./Form.tsx";
import {trees} from "./trees.ts";
import FilterCardByHeight from "./FilterCardByHeight.tsx";


type ModalProps = {
    treeInfo: {
        "title": string,
        "height": number,
        "rating": number,
        "cost": number,
        "image": string,
        "properties": Array<string>
    },
    setActive: (value: boolean) => void
}

const Modal: FC<ModalProps> = ({setActive, treeInfo}: ModalProps) => {
    const [selectedTree, setSelectedTree] = useState(treeInfo)
    const [activeCardByHeight, setActiveCardByHeight] = useState(`${treeInfo.height} см`)
    const {title, height, cost, image, properties, rating} = selectedTree

    const propertyColors = ['bg-[#007542]', 'bg-[#3AA346]', 'bg-[#78D23D]', 'bg-[#9BE931]']
    const availableHeights = trees.find((item) => item.title === title)?.trees

    useEffect(() => {
        const newData = trees.find(item => item.title === treeInfo.title)?.trees.find(tree => `${tree.height} см` === activeCardByHeight)

        if (newData) {
            setSelectedTree({
                ...selectedTree,
                height: newData.height,
                cost: newData.cost,
                properties: newData.properties.map((item) => item.title),
                rating: newData.rating
            })
        }


    }, [activeCardByHeight])
    return (
        <div
            onClick={() => setActive(false)}
            className='
                    h-full w-full
                    bg-[rgba(33,34,34,0.4)]
                    fixed top-0 left-0
                    flex items-center justify-center
                    z-40
                    '>
            <div
                onClick={(e) => e.stopPropagation()}
                className='
                    bg-white
                    p-2
                    sm:p-5
                    rounded-xl
                    max-h-[90vh]
                    overflow-y-auto
                    w-11/12
                    md:w-min
                    lg:w-fit
                    relative
                    '>
                <div className='flex  justify-end'>
                    <span className="material-symbols-outlined text-green-800 cursor-pointer"
                          onClick={() => setActive(false)}>
                            close
                        </span>
                </div>
                <div className='flex gap-10 p-5 text-green-800 flex-wrap justify-center'>
                    <img src={image} alt={'tree'}
                         className='sm:max-h-[70vh] lg:max-h-[70vh] xl:max-h-[80vh] rounded-xl'/>
                    <div className='flex flex-col justify-between  md:w-[500px]'>
                        <div className='flex flex-col gap-5 '>

                            <div className='flex flex-wrap justify-between'>
                                <div className='text-xl font-medium'>{title} <span>{height}</span> см
                                </div>

                                <div className='flex  gap-2 '>
                                    <span className='text-xl'>{rating.toFixed(2)}</span>
                                    <span
                                        className="material-symbols-outlined w-[25px] h-[25px] text-yellow-500">grade</span>
                                </div>
                            </div>
                            <div className='font-medium text-lg'>
                                {cost} ₽
                                <span
                                    className='line-through decoration-red-500 font-normal ml-2 text-lg'>{cost + 1000}₽</span>
                            </div>

                            <div className='flex flex-wrap gap-3 lg:gap-3'>
                                {
                                    properties.map((property, index) =>
                                        <Parameter key={property} item={property} circleColor={propertyColors[index]}/>
                                    )
                                }
                            </div>
                            <div className='flex flex-wrap gap-3 lg:gap-3 '>
                                {
                                    availableHeights?.map((item, index) =>
                                        <FilterCardByHeight key={index} height={`${item.height} см`}
                                                            isActive={activeCardByHeight === `${item.height} см`}
                                                            setActiveCardByHeight={setActiveCardByHeight}/>
                                    )
                                }
                            </div>

                            <div>
                                Покупаю это молоко уже несколько лет, так как ребенку оно нравиться, цена правда около
                                100 рублей, но оно того стоит.
                            </div>

                            <div className='underline mb-3'>
                                Посмотреть этот товар на Авито
                            </div>

                        </div>

                        <Form tree={selectedTree}/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal