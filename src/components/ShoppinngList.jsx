import {plantList} from "../datas/plantList";
import '../styles/ShoppingList.css'
import PlantItem from "./PlantItem";

function ShoppingList({cart, updateCart}) {
// Petite précision : categories nous vient de la partie précédente pour récupérer toutes les catégories uniques de plantes.

    const categories = plantList.reduce(
        (acc, elem) =>
            acc.includes(elem.category) ? acc : acc.concat(elem.category),
        []
    )

    function addToCart(name, price) {
        const currentPlantAdded = cart.find((plant) => plant.name === name)
        if (currentPlantAdded) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                {name, price, amount: currentPlantAdded.amount + 1},
            ])
        } else {
            updateCart([...cart, {name, price, amount: 1}])
        }
    }

    return (
        <div className='lmj-shopping-list'>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map(({id, cover, name, water, light, isSpecialOffer, isBestSale, price}) => (
                    <div key={id}>
                        <PlantItem cover={cover} name={name} water={water} light={light}
                                   isSpecialOffer={isSpecialOffer} isBestSale={isBestSale}/>
                        <button onClick={() => addToCart(name, price)}>Ajouter</button>
                    </div>

                ))}
            </ul>
        </div>
    )
}

export default ShoppingList;
