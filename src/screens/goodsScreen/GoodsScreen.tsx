import {trees} from "./trees.ts";
import TreeCard from "./TreeCard.tsx";
import FilterCardByHeight from "./FilterCardByHeight.tsx";
import {useState} from "react";
import FilterCardByTitle from "./FilterCardByTitle.tsx";

const GoodsScreen = () => {
    //const [selectedTree, setSelectedTree] = useState()
    const [activeCardByHeight, setActiveCardByHeight] = useState('180 см')
    const [activeCardByTitle, setActiveCardByTitle] = useState('Все модели')
    const heights = ['Все размеры', '150 см', '180 см', '210 см', '230 см', '250 см']
    const titles = ['Все модели', 'Таёжная', 'Московская', 'Уральская', 'Сибирская']
    const filteredTrees = trees.map(mainTree =>
        mainTree.trees.map(tree => {
            const height = tree.height + ' см'
            const filteredMainTreeData = {
                title: mainTree.title,
                id: mainTree.id,
                image: mainTree.image,
                description: mainTree.description
            }
            if (activeCardByHeight === 'Все размеры') return {...mainTree, ...tree}
            if (height === activeCardByHeight) return {...filteredMainTreeData, ...tree}
        })
    ).flat(1).filter(item =>
        item?.title === activeCardByTitle || activeCardByTitle === 'Все модели'
    )
    console.log(filteredTrees)

    return (
        <section id='goods'>
            <div className='text-2xl mb-5'>Предложения</div>
            <div className='mb-5 flex flex-wrap gap-5 '>
                {
                    heights.map((item, index) =>
                        <FilterCardByHeight key={index} height={item} isActive={activeCardByHeight === item}
                                            setActiveCardByHeight={setActiveCardByHeight}/>
                    )
                }
            </div>
            <div className='mb-5 flex flex-wrap gap-5 '>
                {
                    titles.map((item, index) =>
                        <FilterCardByTitle key={index} title={item} isActive={activeCardByTitle === item}
                                           setActiveCardByTitle={setActiveCardByTitle}/>
                    )
                }
            </div>
            {
                filteredTrees.length === 0
                    ? <div className='text-lg font-medium'>Упс, товаров по таким фильтрам не найдено, измените
                        настройки</div>
                    :
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                        {
                            filteredTrees.map(tree => tree &&
                                <TreeCard
                                    key={tree.id}
                                    title={tree.title}
                                    height={tree.height}
                                    rating={tree.rating}
                                    cost={tree.cost}
                                    image={tree.image}
                                    description={tree.description}
                                    properties={tree.properties.map(property => property.title)}
                                    avitoLink={tree.avitoLink}
                                />
                            )}

                    </div>


            }
        </section>
    )
}

export {GoodsScreen}