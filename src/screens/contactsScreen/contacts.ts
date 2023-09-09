import ava1 from "./assets/ava1.png";
import ava2 from "./assets/ava2.png";

export type ContactDto = {
    id: number,
    name: string,
    phoneNumber: string,
    image: string,
}

export const contacts: Array<ContactDto> = [
    {
        id: 0,
        name: 'Евгений',
        phoneNumber: '+7-999-568-15-77',
        image: ava1,
    },
    {
        id: 1,
        name: 'Екатерина',
        phoneNumber: '+7-993-518-49-01',
        image: ava2,
    },
]