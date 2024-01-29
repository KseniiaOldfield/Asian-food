import dataAllDishes from "../../data/dataAllDishes";
import { deleteItemFromBasket } from "../../redux/basketChoice";
import { useDispatch } from "react-redux";


const ItemBasket = ({basketItem}) => {
    const dishes = dataAllDishes.find(item => item.id === basketItem.dishId)
    const dispatch = useDispatch()
    return (<div>
        <h4 className="basket">{dishes.name}</h4>
        <p className="basket">{basketItem.quantity} portion(s)</p>
        <p className="basket"> £ {dishes.price * basketItem.quantity}</p>
        <span onClick={() => dispatch(deleteItemFromBasket({basketItemId: basketItem.id}))}>
            <img className="del" src="https://cdn-icons-png.freepik.com/256/6861/6861294.png?ga=GA1.2.171460617.1695459402&semt=ais"/> 
        </span>
    </div>)
}
export default ItemBasket;