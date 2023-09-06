import ava1 from './assets/feedback1.png'
import ava2 from './assets/feedback2.png'

export type FeedbackDto = {
    id: number,
    name: string,
    good: string,
    method: string,
    comment: string,
    image: string,
    rating: number
}
export const feedback: Array<FeedbackDto> = [
    {
        id: 0,
        name: 'Раян',
        good: 'Заснеженная 180 см',
        method: 'Авито доставка',
        comment: 'Покупаю это молоко уже несколько лет,так как ребенку оно нравиться, цена правда около 100 рублей, но оно того стоит.',
        image: ava1,
        rating: 5.00
    },
    {
        id: 1,
        name: 'Гослинг',
        good: 'Заснеженная 180 см',
        method: 'Авито доставка',
        comment: 'Покупаю это молоко уже несколько лет, \n' +
            'так как ребенку оно нравиться, цена правда \n' +
            'около 100 рублей, но оно того стоит.',
        image: ava2,
        rating: 5.00
    }
]