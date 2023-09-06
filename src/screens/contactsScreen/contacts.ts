import ava from "./assets/ava1.png";

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
        phoneNumber: '+7-800-555-35-35',
        image: ava,
    },
    {
        id: 1,
        name: 'Екатерина',
        phoneNumber: '+7-800-555-35-35',
        image: ava,
    },
]