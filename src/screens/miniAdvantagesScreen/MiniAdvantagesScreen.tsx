const MiniAdvantage = (props: { title: string, description: string }) => (
    <div className='flex flex-col gap-2 px-4 py-2 w-[245px] rounded border border-green-800'>
        <div className='text-xl text-green-800 font-medium'>{props.title}</div>
        <div className='text-xl  text-green-800  '>{props.description}</div>
    </div>
)

const MiniAdvantagesScreen = () => {
    const advantages = [
        {id: 0, title: '2 года ', description: 'радуем клиентов'},
        {id: 1, title: '> 1000', description: 'сделок на авито'},
        {id: 2, title: '5.00', description: 'рейтинг магазина'}
    ]
    return (
        <div className='flex flex-wrap items-center justify-around gap-3'>
            {
                advantages.map(item =>
                    <MiniAdvantage key={item.id} title={item.title} description={item.description}/>
                )
            }
        </div>
    )
}

export {MiniAdvantagesScreen}