import {contacts} from "./contacts.ts";
import ContactCard from "./ContactCard.tsx";
import qr from './assets/qr.png'

const ContactsScreen = () => {
    return (
        <div>
            <div className='text-2xl mb-5'>Контакты</div>
            <div className='flex flex-col xl:flex-row justify-between gap-10'>
                <div className='flex flex-col md:flex-row gap-10 '>
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

                <div className='flex gap-10 flex-col sm:flex-row'>
                    <div className='flex flex-col gap-3 xl:items-center w-[150px] xl:w-1/3'>
                        <img src={qr} alt='qr code'/>
                        <div className='underline'>Авито аккаунт</div>
                    </div>
                    <div className='flex flex-col gap-3 xl:items-center w-[150px] xl:w-1/3'>
                        <img src={qr} alt='qr code'/>
                        <div className='underline'>Адрес магазина в Екатеринбурге</div>
                    </div>
                    <div className='flex flex-col gap-3 xl:items-center w-[150px] xl:w-1/3'>
                        <img src={qr} alt='qr code'/>
                        <div className='underline'>Группа в телеграмме</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {ContactsScreen}