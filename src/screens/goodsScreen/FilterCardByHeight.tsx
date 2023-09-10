import {FC} from "react";
import filterIcon from './assets/treeIcon.svg'

type FilterCardProps = {
    height: string
    isActive: boolean
    setActiveCardByHeight: (height: string) => void
}

const FilterCardByHeight:FC<FilterCardProps> = ({height, isActive, setActiveCardByHeight}: FilterCardProps) => {
    return(
        <div onClick={() => setActiveCardByHeight(height)}
             className={`flex gap-3 items-center px-2 py-1 rounded-lg border-2 border-green-700 cursor-pointer ${isActive ? 'opacity-100' : 'opacity-50'}`}>
            <img src={filterIcon} alt='filterIcon'/>
            <div className='font-medium text-green-800 text-lg'>{height}</div>
        </div>
    )
}

export default FilterCardByHeight