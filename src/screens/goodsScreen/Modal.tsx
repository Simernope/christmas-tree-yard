import {FC} from "react";
import {TreeCardProperties} from "./trees.ts";
import {Parameter} from "./Parametr.tsx";
import Form from "./Form.tsx";


type ModalProps = {
    treeInfo: TreeCardProperties,
    setActive: (value: boolean) => void
}

const Modal: FC<ModalProps> = ({setActive, treeInfo}: ModalProps) => {

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
                    p-5
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
                    <img src={treeInfo.image} alt={'tree'}/>
                    <div className='flex flex-col justify-between  md:w-[500px]'>
                        <div className='flex flex-col gap-5 '>

                            <div className='flex flex-wrap justify-between'>
                                <div className='text-xl font-medium'>{treeInfo.title} <span>{treeInfo.height}</span> см
                                </div>
                                <div className='flex  gap-2 '>
                                    <span className='text-xl'>{treeInfo.rating.toFixed(2)}</span>
                                    <span
                                        className="material-symbols-outlined w-[25px] h-[25px] text-yellow-500">grade</span>
                                </div>
                            </div>

                            <div className='flex flex-wrap gap-3 lg:gap-10'>
                                <Parameter item={treeInfo.properties[0]} circleColor={'bg-[#368B4C]'}/>
                                <Parameter item={treeInfo.properties[1]} circleColor={'bg-[#64C37D]'}/>
                                <Parameter item={treeInfo.properties[2]} circleColor={'bg-[#A4E276]'}/>
                            </div>

                            <div>
                                Покупаю это молоко уже несколько лет, так как ребенку оно нравиться, цена правда около
                                100 рублей, но оно того стоит.
                            </div>

                            <div className='underline mb-3'>
                                Посмотреть этот товар на Авито
                            </div>

                        </div>

                        <Form tree={treeInfo}/>

                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Modal