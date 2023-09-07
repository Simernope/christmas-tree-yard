import {FC} from "react";
import {ContactDto} from "./contacts.ts";

const ContactCard: FC<ContactDto> = ({name, image, phoneNumber}: ContactDto) => {
    return (
        <div className='flex flex-wrap lg:flex-nowrap gap-3 items-center shadow p-4 rounded-xl'>
            <img src={image} alt='feedbackImage'/>
            <div className='flex flex-col gap-3'>
                <div className='text-green-800 font-medium'>{name}</div>
                <div className='text-green-800'>Менеджер</div>
                <div className='text-green-800'>({phoneNumber})</div>
                <div className='text-green-800 text-lg'>Телеграмм или WhatsApp</div>
            </div>
        </div>
    )
}

export default ContactCard