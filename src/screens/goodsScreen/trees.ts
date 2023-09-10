import tree1 from './assets/ель1.png'
import tree2 from './assets/ель2.png'
import tree3 from './assets/ель3.png'
import tree4 from './assets/ель4.png'

import alpic1 from './assets/alpic/alpic1.jpg'
import alpic2 from './assets/alpic/alpic2.jpg'
import tumen1 from './assets/tumen/tumen1.jpg'
import tumen2 from './assets/tumen/tumen2.jpg'
import saratov1 from './assets/saratov/saratov1.jpg'
import saratov2 from './assets/saratov/saratov2.jpg'
import lesnaya1 from './assets/lesnaya/lesnaya1.jpg'
import lesnaya2 from './assets/lesnaya/lesnaya2.jpg'


type Properties = {
    id: number
    title: string
    image: [string, string]
    trees: Array<
        {
            id: number
            height: number
            rating: number
            cost: number
            properties: Array<{ id: number, title: string }>
        }
    >
}

const a: Array<Properties> = [
    {
        id: 1,
        title: 'Альпийская',
        image: [alpic1, alpic2],
        trees: [
            {
                id: 11, height: 150, cost: 6900, rating: 5.00,
                properties: [
                    {id: 111, title: 'Литые веточки'},
                    {id: 112, title: 'Диаметр: 15 см'},
                    {id: 113, title: 'Подставка'},
                    {id: 114, title: 'Вес: 5 кг '},
                ]
            },
            {
                id: 12, height: 180, cost: 9900, rating: 5.00,
                properties: [
                    {id: 121, title: 'Литые веточки'},
                    {id: 122, title: 'Диаметр: 15 см'},
                    {id: 123, title: 'Подставка'},
                    {id: 124, title: 'Вес: 5 кг '},
                ]
            },
            {
                id: 13, height: 210, cost: 10900, rating: 5.00,
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
        trees: [
            {
                id: 21, height: 180, cost: 12900, rating: 5.00,
                properties: [
                    {id: 211, title: 'Литые веточки'},
                    {id: 212, title: 'Диаметр: 15 см'},
                    {id: 213, title: 'Подставка'},
                    {id: 214, title: 'Вес: 5 кг '},
                ]
            },
            {
                id: 22, height: 210, cost: 15900, rating: 5.00,
                properties: [
                    {id: 221, title: 'Литые веточки'},
                    {id: 222, title: 'Диаметр: 15 см'},
                    {id: 223, title: 'Подставка'},
                    {id: 224, title: 'Вес: 5 кг '},
                ]
            },
            {
                id: 23, height: 230, cost: 18900, rating: 5.00,
                properties: [
                    {id: 231, title: 'Литые веточки'},
                    {id: 232, title: 'Диаметр: 15 см'},
                    {id: 233, title: 'Подставка'},
                    {id: 234, title: 'Вес: 5 кг '},
                ]
            },
            {
                id: 24, height: 2500, cost: 22900, rating: 5.00,
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
        trees: [
            {
                id: 31, height: 180, cost: 13500, rating: 5.00,
                properties: [
                    {id: 311, title: 'Литые веточки'},
                    {id: 312, title: 'Диаметр: 15 см'},
                    {id: 313, title: 'Подставка'},
                    {id: 314, title: 'Вес: 5 кг '},
                ]
            },
            {
                id: 32, height: 210, cost: 16500, rating: 5.00,
                properties: [
                    {id: 321, title: 'Литые веточки'},
                    {id: 3212, title: 'Диаметр: 15 см'},
                    {id: 323, title: 'Подставка'},
                    {id: 324, title: 'Вес: 5 кг '},
                ]
            },
            {
                id: 33, height: 230, cost: 19900, rating: 5.00,
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
        trees: [
            {
                id: 41, height: 180, cost: 10900, rating: 5.00,
                properties: [
                    {id: 411, title: 'Литые веточки'},
                    {id: 412, title: 'Диаметр: 15 см'},
                    {id: 413, title: 'Подставка'},
                    {id: 414, title: 'Вес: 5 кг '},
                ]
            },
            {
                id: 42, height: 210, cost: 13900, rating: 5.00,
                properties: [
                    {id: 421, title: 'Литые веточки'},
                    {id: 4212, title: 'Диаметр: 15 см'},
                    {id: 423, title: 'Подставка'},
                    {id: 424, title: 'Вес: 5 кг '},
                ]
            },
            {
                id: 43, height: 230, cost: 17900, rating: 5.00,
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

export type TreeCardProperties = {
    id: number
    title: string
    height: number
    rating: number
    cost: number
    image: string
    filterCategory: '120-150 см' | '160-210 см' | '240-500 см',
    properties: [string, string, string]
}
export const trees: Array<TreeCardProperties> = [
    {
        id: 0,
        title: '1 Ель искусственная Заснеженная',
        height: 180,
        rating: 5.00,
        cost: 10000,
        image: tree1,
        properties: ['180 см', 'Литой пластик', 'Подставка'],
        filterCategory: "160-210 см"
    },
    {
        id: 1,
        title: '2 Ель искусственная Заснеженная',
        height: 120,
        rating: 4.99,
        cost: 15000,
        image: tree2,
        properties: ['180 см', 'Литой пластик', 'Подставка'],
        filterCategory: "120-150 см"
    },
    {
        id: 2,
        title: '3 Ель искусственная Заснеженная',
        height: 240,
        rating: 4.80,
        cost: 10000,
        image: tree3,
        properties: ['180 см', 'Литой пластик', 'Подставка'],
        filterCategory: "240-500 см"
    },
    {
        id: 4,
        title: '3 Ель искусственная Заснеженная',
        height: 180,
        rating: 5.00,
        cost: 10000,
        image: tree4,
        properties: ['180 см', 'Литой пластик', 'Подставка'],
        filterCategory: "160-210 см"
    }
]