import {trees} from "./trees.ts";
import TreeCard from "./TreeCard.tsx";
import FilterCard from "./FilterCard.tsx";
import {useState} from "react";

const GoodsScreen = () => {
    const [activeCard, setActiveCard] = useState('Все размеры')
    const heights = ['Все размеры', '120-150 см', '160-210 см', '240-500 см']
    const filteredTrees = trees.filter(tree => {
        if (activeCard === 'Все размеры') return tree
        if (tree.filterCategory === activeCard) return tree
    })
    return (
        <div>
            <div className='text-2xl mb-5'>Предложения</div>
            <div className='mb-5 flex flex-wrap gap-5'>
                {
                    heights.map((item, index) =>
                        <FilterCard key={index} height={item} isActive={activeCard === item}
                                    setActiveCard={setActiveCard}/>
                    )
                }
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {
                    filteredTrees.map(tree =>
                        <TreeCard
                            key={tree.id}
                            id={tree.id}
                            title={tree.title}
                            rating={tree.rating}
                            cost={tree.cost}
                            image={tree.image}
                            height={tree.height}
                            properties={tree.properties}
                            filterCategory={tree.filterCategory}
                        />
                    )
                }
            </div>
        </div>
    )
}

export {GoodsScreen}