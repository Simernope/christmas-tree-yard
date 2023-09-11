import {FC} from "react";

type FilterCardProps = {
    title: string
    isActive: boolean
    setActiveCardByTitle: (height: string) => void
}

const FilterCardByTitle:FC<FilterCardProps> = ({title, isActive, setActiveCardByTitle}: FilterCardProps) => {
    return(
        <div onClick={() => setActiveCardByTitle(title)}
             className={`flex gap-3 items-center px-2 py-1 rounded-lg border-2 border-green-700 cursor-pointer ${isActive ? 'opacity-100' : 'opacity-50'}`}>
            <div className='font-medium text-green-800 text-lg'>{title}</div>
        </div>
    )
}

export default FilterCardByTitle