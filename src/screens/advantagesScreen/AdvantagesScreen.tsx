import AdvantageCard from "./AdvantageCard.tsx";

type Advantage = {
    title: string
    description: string
    imgUrl: string
    id: number
}

const advantages: Array<Advantage> = [
    {
        title: 'Цена ниже рынка',
        description: 'Мы работаем с поставщиками, избегая посредников',
        imgUrl: 'src/assets/advantageIcons/moneyIcon.svg',
        id: 0
    },
    {
        title: 'Авито доставка',
        description: 'Доступно по всей России',
        imgUrl: 'src/assets/advantageIcons/deliveryIcon.svg',
        id: 1
    },
    {
        title: 'Забота о природе',
        description: 'Ели из качественного пластика',
        imgUrl: 'src/assets/advantageIcons/recycleIcon.svg',
        id: 2
    },
    {
        title: 'Подарок каждому',
        description: 'Каждому клиенту индивидуальный подарок',
        imgUrl: 'src/assets/advantageIcons/presentIcon.svg',
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