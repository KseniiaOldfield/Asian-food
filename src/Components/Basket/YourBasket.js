import { useSelector } from "react-redux";
import ItemBasket from "./ItemBasket";
import { getBasketItems, getTotalPrice } from "../../redux/basketChoice";

const YourBasket = () => {
    const basketItems = useSelector(getBasketItems)
    const totalPrice = useSelector(getTotalPrice);
    return (<div>
        <img className="icon" src="https://cdn-icons-png.flaticon.com/128/11627/11627146.png?ga=GA1.1.171460617.1695459402&semt=ais" alt="basket"/> 
        {basketItems.map((basketItem, id) => <ItemBasket key={id} basketItem={basketItem}/>)}
        <h3 className="total">Sub Total: £ {totalPrice} </h3>
    </div>)
}
export default YourBasket;