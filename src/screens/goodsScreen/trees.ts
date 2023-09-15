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
        title: 'Альпийская',
        image: [alpic1, alpic2],
        description: 'Альпийская - идеальное решение для волшебной рождественской атмосферы в малых и средних интерьерах! Реалистичные веточки и форма, сравнимая с живой ёлкой.',
        trees: [
            {
                id: 11, height: 150, cost: 6900, rating: 5.00, avitoLink: 'https://www.avito.ru/user/5a48aba828a4a8dfa259d383a3ea312b/profile?src=sharing',
                properties: [
                    {id: 111, title: 'Литые веточки'},
                    {id: 112, title: 'Диаметр: 15 см'},
                    {id: 113, title: 'Подставка'},
                    {id: 114, title: 'Вес: 5 кг '},
                ]
            },
            {
                id: 12, height: 180, cost: 9900, rating: 5.00, avitoLink: 'https://www.avito.ru/user/5a48aba828a4a8dfa259d383a3ea312b/profile?src=sharing',
                properties: [
                    {id: 121, title: 'Литые веточки'},
                    {id: 122, title: 'Диаметр: 15 см'},
                    {id: 123, title: 'Подставка'},
                    {id: 124, title: 'Вес: 5 кг '},
                ]
            },
            {
                id: 13, height: 210, cost: 10900, rating: 5.00, avitoLink: 'https://www.avito.ru/user/5a48aba828a4a8dfa259d383a3ea312b/profile?src=sharing',
                properties: [
                    {id: 131, title: 'Литые веточки'},
                    {id: 132, title: 'Диаметр: 15 см'},
                    {id: 133, title: 'Подставка'},
                    {id: 134, title: 'Вес: 5 кг '},
                ]
            }
        ]

    },
    {
        id: 2,
        title: 'Тюменская',
        image: [tumen1, tumen2],
        description: 'Тюменская - безусловный лидер среди конкурентов! Уникальная пышность и объемные мягкие ветви делают ее непревзойденной. Она представлена в различных размерах, от 180 до 250см, что позволяет подобрать идеальный вариант для любого интерьера, будь то квартира или большой дом.',
        trees: [
            {
                id: 21, height: 180, cost: 12900, rating: 5.00, avitoLink: 'https://www.avito.ru/user/5a48aba828a4a8dfa259d383a3ea312b/profile?src=sharing',
                properties: [
                    {id: 211, title: 'Литые веточки'},
                    {id: 212, title: 'Диаметр: 15 см'},
                    {id: 213, title: 'Подставка'},
                    {id: 214, title: 'Вес: 5 кг '},
                ]
            },
            {
                id: 22, height: 210, cost: 15900, rating: 5.00, avitoLink: 'https://www.avito.ru/user/5a48aba828a4a8dfa259d383a3ea312b/profile?src=sharing',
                properties: [
                    {id: 221, title: 'Литые веточки'},
                    {id: 222, title: 'Диаметр: 15 см'},
                    {id: 223, title: 'Подставка'},
                    {id: 224, title: 'Вес: 5 кг '},
                ]
            },
            {
                id: 23, height: 230, cost: 18900, rating: 5.00, avitoLink: 'https://www.avito.ru/user/5a48aba828a4a8dfa259d383a3ea312b/profile?src=sharing',
                properties: [
                    {id: 231, title: 'Литые веточки'},
                    {id: 232, title: 'Диаметр: 15 см'},
                    {id: 233, title: 'Подставка'},
                    {id: 234, title: 'Вес: 5 кг '},
                ]
            },
            {
                id: 24, height: 250, cost: 22900, rating: 5.00, avitoLink: 'https://www.avito.ru/user/5a48aba828a4a8dfa259d383a3ea312b/profile?src=sharing',
                properties: [
                    {id: 241, title: 'Литые веточки'},
                    {id: 242, title: 'Диаметр: 15 см'},
                    {id: 243, title: 'Подставка'},
                    {id: 244, title: 'Вес: 5 кг '},
                ]
            }
        ]

    },
    {
        id: 3,
        title: 'Саратовская',
        image: [saratov1, saratov2],
        description: 'Саратовская - настоящая красавица с обилием веточек, придающих ей великолепный объем и очарование. Ель этого сорта отличается пышной и плотной хвоей, а также обладает привлекательными формами. Она выглядит богато и роскошно.',
        trees: [
            {
                id: 31, height: 180, cost: 13500, rating: 5.00, avitoLink: 'https://www.avito.ru/user/5a48aba828a4a8dfa259d383a3ea312b/profile?src=sharing',
                properties: [
                    {id: 311, title: 'Литые веточки'},
                    {id: 312, title: 'Диаметр: 15 см'},
                    {id: 313, title: 'Подставка'},
                    {id: 314, title: 'Вес: 5 кг '},
                ]
            },
            {
                id: 32, height: 210, cost: 16500, rating: 5.00, avitoLink: 'https://www.avito.ru/user/5a48aba828a4a8dfa259d383a3ea312b/profile?src=sharing',
                properties: [
                    {id: 321, title: 'Литые веточки'},
                    {id: 3212, title: 'Диаметр: 15 см'},
                    {id: 323, title: 'Подставка'},
                    {id: 324, title: 'Вес: 5 кг '},
                ]
            },
            {
                id: 33, height: 230, cost: 19900, rating: 5.00, avitoLink: 'https://www.avito.ru/user/5a48aba828a4a8dfa259d383a3ea312b/profile?src=sharing',
                properties: [
                    {id: 331, title: 'Литые веточки'},
                    {id: 332, title: 'Диаметр: 15 см'},
                    {id: 333, title: 'Подставка'},
                    {id: 334, title: 'Вес: 5 кг '},
                ]
            }
        ]

    },
    {
        id: 1,
        title: 'Лесная',
        image: [lesnaya1, lesnaya2],
        description: 'Лесная - это ёлочка, созданная полностью из литых ветвей. Ее главная особенность заключается в длинных, аккуратных иголочках, которые максимально реалистично напоминают настоящую хвою.',
        trees: [
            {
                id: 41, height: 180, cost: 10900, rating: 5.00, avitoLink: 'https://www.avito.ru/user/5a48aba828a4a8dfa259d383a3ea312b/profile?src=sharing',
                properties: [
                    {id: 411, title: 'Литые веточки'},
                    {id: 412, title: 'Диаметр: 15 см'},
                    {id: 413, title: 'Подставка'},
                    {id: 414, title: 'Вес: 5 кг '},
                ]
            },
            {
                id: 42, height: 210, cost: 13900, rating: 5.00, avitoLink: 'https://www.avito.ru/user/5a48aba828a4a8dfa259d383a3ea312b/profile?src=sharing',
                properties: [
                    {id: 421, title: 'Литые веточки'},
                    {id: 4212, title: 'Диаметр: 15 см'},
                    {id: 423, title: 'Подставка'},
                    {id: 424, title: 'Вес: 5 кг '},
                ]
            },
            {
                id: 43, height: 230, cost: 17900, rating: 5.00, avitoLink: 'https://www.avito.ru/user/5a48aba828a4a8dfa259d383a3ea312b/profile?src=sharing',
                properties: [
                    {id: 431, title: 'Литые веточки'},
                    {id: 432, title: 'Диаметр: 15 см'},
                    {id: 433, title: 'Подставка'},
                    {id: 434, title: 'Вес: 5 кг '},
                ]
            }
        ]

    },
]
