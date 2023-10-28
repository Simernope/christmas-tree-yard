import {contacts} from "./contacts.ts";
import ContactCard from "./ContactCard.tsx";
import vk from './assets/vk.png'
import mp from './assets/mp.png'
import av from './assets/av.png'
import { MapAddress} from "./Map.tsx";

const QrLink = (props: { image: string, description: string, link: string }) => {
    return (
        <div className='flex flex-col gap-2 items-center w-[150px]'>
            <img src={props.image} alt='qr code'/>
            <a href={props.link}>
                <div className='underline'>{props.description}</div>
            </a>
        </div>
    )
}

const ContactsScreen = () => {
    return (
        <section id='contacts'>
            <div className='text-2xl mb-5'>Контакты</div>
            <div className='flex gap-10 flex-wrap justify-between mb-5'>
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
                    <QrLink image={av} description={'Авито аккаунт'}
                            link='https://www.avito.ru/user/5a48aba828a4a8dfa259d383a3ea312b/profile?src=sharing'/>
                    <QrLink image={mp} description={'Адрес магазина в Екатеринбурге'}
                            link='https://yandex.ru/maps/54/yekaterinburg/house/ulitsa_krasnolesya_28/YkkYcwNhQUMOQFtsfXt5c3lkZw==/?ll=60.541869%2C56.782573&z=17'/>
                    <QrLink image={vk} description={'Группа во Вконтакте'} link='https://vk.com/elidvor'/>
                </div>
            </div>
            <MapAddress />
        </section>

    )
}

export {ContactsScreen}