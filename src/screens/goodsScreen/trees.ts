/*import tree1 from './assets/ель1.png'
import tree2 from './assets/ель2.png'
import tree3 from './assets/ель3.png'
import tree4 from './assets/ель4.png'*/

import alpic1 from './assets/alpic/alpic1.jpg'
import alpic2 from './assets/alpic/alpic2.jpg'
import tumen1 from './assets/tumen/tumen1.jpg'
import tumen2 from './assets/tumen/tumen2.jpg'
import saratov1 from './assets/saratov/saratov1.jpg'
import saratov2 from './assets/saratov/saratov2.jpg'
import lesnaya1 from './assets/lesnaya/lesnaya1.jpg'
import lesnaya2 from './assets/lesnaya/lesnaya2.jpg'


export type TreesCardProperties = {
    id: number
    title: string
    image: [string, string]
    description: string
    trees: Array<
        {
            id: number
            height: number
            rating: number
            cost: number
            avitoLink: string
            properties: Array<{ id: number, title: string }>
        }
    >
}

export const trees: Array<TreesCardProperties> = [
    {
        id: 1,
        title: 'Таёжная',
        image: [alpic1, alpic2],
        description: 'Таёжная - идеальное решение для волшебной рождественской атмосферы в малых и средних интерьерах! Реалистичные веточки и форма, сравнимая с живой ёлкой.',
        trees: [
            {
                id: 11, height: 150, cost: 8990, rating: 5.00, avitoLink: 'https://www.avito.ru/user/5a48aba828a4a8dfa259d383a3ea312b/profile?src=sharing',
                properties: [
                    {id: 111, title: 'Литая Российская ель'},
                    {id: 112, title: 'Супер реалистичная'},
                    {id: 113, title: 'Покрашенные веточки'},
                    {id: 114, title: 'Полностью экологична'},
                ]
            },
            {
                id: 12, height: 180, cost: 10990, rating: 5.00, avitoLink: 'https://www.avito.ru/user/5a48aba828a4a8dfa259d383a3ea312b/profile?src=sharing',
                properties: [
                    {id: 111, title: 'Литая Российская ель'},
                    {id: 112, title: 'Супер реалистичная'},
                    {id: 113, title: 'Покрашенные веточки'},
                    {id: 114, title: 'Полностью экологична'},
                ]
            },
            {
                id: 13, height: 210, cost: 12990, rating: 5.00, avitoLink: 'https://www.avito.ru/user/5a48aba828a4a8dfa259d383a3ea312b/profile?src=sharing',
                properties: [
                    {id: 111, title: 'Литая Российская ель'},
                    {id: 112, title: 'Супер реалистичная'},
                    {id: 113, title: 'Покрашенные веточки'},
                    {id: 114, title: 'Полностью экологична'},
                ]
            }
        ]

    },
    {
        id: 2,
        title: 'Московская',
        image: [tumen1, tumen2],
        description: 'Московская - безусловный лидер среди конкурентов! Уникальная пышность и объемные мягкие ветви делают ее непревзойденной. Она представлена в различных размерах, от 180 до 250см, что позволяет подобрать идеальный вариант для любого интерьера, будь то квартира или большой дом.',
        trees: [
            {
                id: 21, height: 180, cost: 13490, rating: 5.00, avitoLink: 'https://www.avito.ru/user/5a48aba828a4a8dfa259d383a3ea312b/profile?src=sharing',
                properties: [
                    {id: 111, title: 'Литая Российская ель'},
                    {id: 112, title: 'Очень пышная'},
                    {id: 113, title: 'Мягкие круглые веточки'},
                    {id: 114, title: 'Хит сезона 2022-2023'},
                ]
            },
            {
                id: 22, height: 210, cost: 16990, rating: 5.00, avitoLink: 'https://www.avito.ru/user/5a48aba828a4a8dfa259d383a3ea312b/profile?src=sharing',
                properties: [
                    {id: 111, title: 'Литая Российская ель'},
                    {id: 112, title: 'Очень пышная'},
                    {id: 113, title: 'Мягкие круглые веточки'},
                    {id: 114, title: 'Хит сезона 2022-2023'},
                ]
            },
            {
                id: 23, height: 230, cost: 19990, rating: 5.00, avitoLink: 'https://www.avito.ru/user/5a48aba828a4a8dfa259d383a3ea312b/profile?src=sharing',
                properties: [
                    {id: 111, title: 'Литая Российская ель'},
                    {id: 112, title: 'Очень пышная'},
                    {id: 113, title: 'Мягкие круглые веточки'},
                    {id: 114, title: 'Хит сезона 2022-2023'},
                ]
            },
            {
                id: 24, height: 250, cost: 23990, rating: 5.00, avitoLink: 'https://www.avito.ru/user/5a48aba828a4a8dfa259d383a3ea312b/profile?src=sharing',
                properties: [
                    {id: 111, title: 'Литая Российская ель'},
                    {id: 112, title: 'Очень пышная'},
                    {id: 113, title: 'Мягкие круглые веточки'},
                    {id: 114, title: 'Хит сезона 2022-2023'},
                ]
            }
        ]

    },
    {
        id: 3,
        title: 'Уральская',
        image: [saratov1, saratov2],
        description: 'Уральская - настоящая красавица с обилием веточек, придающих ей великолепный объем и очарование. Ель этого сорта отличается пышной и плотной хвоей, а также обладает привлекательными формами. Она выглядит богато и роскошно.',
        trees: [
            {
                id: 31, height: 180, cost: 13990, rating: 5.00, avitoLink: 'https://www.avito.ru/user/5a48aba828a4a8dfa259d383a3ea312b/profile?src=sharing',
                properties: [
                    {id: 111, title: 'Литая Российская ель'},
                    {id: 112, title: 'Очень густая'},
                    {id: 113, title: 'Новинка сезона 2023-2024'},
                    {id: 114, title: 'Премиальный вид и качество'},
                ]
            },
            {
                id: 32, height: 210, cost: 17990, rating: 5.00, avitoLink: 'https://www.avito.ru/user/5a48aba828a4a8dfa259d383a3ea312b/profile?src=sharing',
                properties: [
                    {id: 111, title: 'Литая Российская ель'},
                    {id: 112, title: 'Очень густая'},
                    {id: 113, title: 'Новинка сезона 2023-2024'},
                    {id: 114, title: 'Премиальный вид и качество'},
                ]
            },
            {
                id: 33, height: 230, cost: 22990, rating: 5.00, avitoLink: 'https://www.avito.ru/user/5a48aba828a4a8dfa259d383a3ea312b/profile?src=sharing',
                properties: [
                    {id: 111, title: 'Литая Российская ель'},
                    {id: 112, title: 'Очень густая'},
                    {id: 113, title: 'Новинка сезона 2023-2024'},
                    {id: 114, title: 'Премиальный вид и качество'},
                ]
            }
        ]

    },
    {
        id: 1,
        title: 'Сибирская',
        image: [lesnaya1, lesnaya2],
        description: 'Сибирская - это ёлочка, созданная полностью из литых ветвей. Ее главная особенность заключается в длинных, аккуратных иголочках, которые максимально реалистично напоминают настоящую хвою.',
        trees: [
            {
                id: 41, height: 180, cost: 12990, rating: 5.00, avitoLink: 'https://www.avito.ru/user/5a48aba828a4a8dfa259d383a3ea312b/profile?src=sharing',
                properties: [
                    {id: 111, title: 'Литая Российская ель'},
                    {id: 112, title: 'Иголочки как у живой елки'},
                    {id: 113, title: 'Коричневые веточки'},
                    {id: 114, title: 'Сертификат качества'},
                ]
            },
            {
                id: 42, height: 210, cost: 15990, rating: 5.00, avitoLink: 'https://www.avito.ru/user/5a48aba828a4a8dfa259d383a3ea312b/profile?src=sharing',
                properties: [
                    {id: 111, title: 'Литая Российская ель'},
                    {id: 112, title: 'Иголочки как у живой елки'},
                    {id: 113, title: 'Коричневые веточки'},
                    {id: 114, title: 'Сертификат качества'},
                ]
            },
            {
                id: 43, height: 230, cost: 18990, rating: 5.00, avitoLink: 'https://www.avito.ru/user/5a48aba828a4a8dfa259d383a3ea312b/profile?src=sharing',
                properties: [
                    {id: 111, title: 'Литая Российская ель'},
                    {id: 112, title: 'Иголочки как у живой елки'},
                    {id: 113, title: 'Коричневые веточки'},
                    {id: 114, title: 'Сертификат качества'},
                ]
            }
        ]

    },
]
