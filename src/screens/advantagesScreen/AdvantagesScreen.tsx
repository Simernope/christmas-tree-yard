import AdvantageCard from "./AdvantageCard.tsx";
import moneyIcon from './assets/moneyIcon.svg'
import recycleIcon from './assets/recycleIcon.svg'
import presentIcon from './assets/presentIcon.svg'
import deliveryIcon from './assets/deliveryIcon.svg'

type Advantage = {
    title: string
    description: string
    image: string
    id: number
}

const advantages: Array<Advantage> = [
    {
        title: 'Цена ниже рынка',
        description: 'Мы работаем с поставщиками, избегая посредников',
        image: moneyIcon,
        id: 0
    },
    {
        title: 'Авито доставка',
        description: 'Доступно по всей России',
        image: deliveryIcon,
        id: 1
    },
    {
        title: 'Забота о природе',
        description: 'Ели из качественного пластика',
        image: recycleIcon,
        id: 2
    },
    {
        title: 'Подарок каждому',
        description: 'Каждому клиенту индивидуальный подарок',
        image: presentIcon,
        id: 3
    }
]
const AdvantagesScreen = () => {
    return (
        <div>
            <div className='text-2xl mb-5'>Почему вы можете доверять нам</div>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {advantages.map(item => <AdvantageCard key={item.id} advantage={item} />)}
            </div>
        </div>


    )
}

export {AdvantagesScreen}