import {FC} from "react";
import filterIcon from './assets/treeIcon.svg'

type FilterCardProps = {
    height: string
    isActive: boolean
    setActiveCard: (height: string) => void
}

const FilterCard:FC<FilterCardProps> = ({height, isActive, setActiveCard}: FilterCardProps) => {
    return(
        <div onClick={() => setActiveCard(height)}
            className={`w-[190px] flex gap-3 items-center px-2 py-1 rounded-lg border-2 border-green-700 cursor-pointer ${isActive ? 'opacity-100' : 'opacity-50'}`}>
            <img src={filterIcon} alt='filterIcon'/>
            <div className='font-medium text-green-800 text-lg'>{height}</div>
        </div>
    )
}

export default FilterCard