import tree1 from './assets/ель1.png'
import tree2 from './assets/ель2.png'
import tree3 from './assets/ель3.png'
import tree4 from './assets/ель4.png'

export type TreeCardProperties = {
    id: number
    title: string
    height: number,
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