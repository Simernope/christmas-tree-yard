import tree1 from './assets/ель1.png'

export type TreeCardProperties = {
    id: number
    title: string
    rating: number
    cost: number
    image: string
    properties: [string, string, string]
}

export const trees: Array<TreeCardProperties> = [
    {
        id: 0,
        title: 'Ель искусственная Заснеженная” 180 см',
        rating: 5.00,
        cost: 10000,
        image: tree1,
        properties: ['180 см', 'Литой пластик', 'Подставка'],
    }
]