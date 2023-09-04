import {FC} from "react";

type AdvantageCardProps = {
    advantage: {
        title: string
        description: string
        image: string
    }
}
const AdvantageCard: FC<AdvantageCardProps> = ({advantage}: AdvantageCardProps) => {
    return(
        <div className='w-full md:w-[300px] h-[125px] flex gap-[23px] items-center'>
            <img src={advantage.image} alt={advantage.title}/>
            <div className='flex flex-col gap-1'>
                <div className='text-xl'>{advantage.title}</div>
                <div className='h-[84px]'>{advantage.description}</div>
            </div>
        </div>
    )
}

export default AdvantageCard