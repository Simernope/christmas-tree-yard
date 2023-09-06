import {trees} from "./trees.ts";
import TreeCard from "./TreeCard.tsx";

const GoodsScreen = () => {
    return(
        <div>
            {
                trees.map(tree =>
                    <TreeCard
                        key={tree.id}
                        id={tree.id}
                        title={tree.title}
                        rating={tree.rating}
                        cost={tree.cost}
                        image={tree.image}
                        properties={tree.properties}/>
                )
            }
        </div>
    )
}

export {GoodsScreen}