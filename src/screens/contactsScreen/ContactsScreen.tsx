import {contacts} from "./contacts.ts";
import ContactCard from "./ContactCard.tsx";
import qr from './assets/qr.png'

const QrLink = (props: { image: string, description: string }) => {
    return (
        <div className='flex flex-col gap-2 items-center w-[150px]'>
            <img src={props.image} alt='qr code'/>
            <div className='underline'>{props.description}</div>
        </div>
    )
}

const ContactsScreen = () => {
    return (
        <section id='contacts'>
            <div className='text-2xl mb-5'>Контакты</div>
            <div className='flex gap-10 flex-wrap justify-between'>
                <div className='flex flex-col md:flex-row lg:flex-col gap-10'>
                    {
                        contacts.map(item => (
                            <ContactCard
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                phoneNumber={item.phoneNumber}
                                image={item.image}/>
                        ))
                    }
                </div>
                <div className='flex gap-10 flex-wrap'>
                    <QrLink image={qr} description={'Авито аккаунт'}/>
                    <QrLink image={qr} description={'Адрес магазина в Екатеринбурге'}/>
                    <QrLink image={qr} description={'Группа в телеграмме'}/>
                </div>
            </div>
        </section>

    )
}

export {ContactsScreen}