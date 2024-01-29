import '../styles/PlantItem.css'
import CareScale from "./CareScale";

function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlantItem(props) {
    return (
        <li key={props.id} className='lmj-plant-item' >
            <img className='lmj-plant-item-cover' src={props.cover} alt={`${props.name} cover` } onClick={() => handleClick(props.name)} />
            <div>
                {(props.isSpecialOffer || props.isBestSale) &&
                    <div className='lmj-sales'>
                        {props.isSpecialOffer && "SOLDES "}
                        {props.isBestSale && <span>🔥</span>}
                    </div>}
                {props.name}
                <div>
                    <CareScale careType='water' scaleValue={props.water}/>
                    <CareScale careType='light' scaleValue={props.light}/>
                </div>
            </div>
        </li>
)
}

export default PlantItem