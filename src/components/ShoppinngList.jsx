import {plantList} from "../datas/plantList";
import '../styles/ShoppingList.css'
import PlantItem from "./PlantItem";

function ShoppingList() {
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )
    return (
        <div className='lmj-shopping-list'>
            <ul>
                {categories.map((categorie) =>
                    <li key={categorie}>{categorie}</li>)}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map(({id, cover, name, water, light, isSpecialOffer, isBestSale}) => (
                    <PlantItem key={id} cover={cover} name={name} water={water} light={light}
                               isSpecialOffer={isSpecialOffer} isBestSale={isBestSale}/>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList