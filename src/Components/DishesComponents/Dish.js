import { useState } from "react";
import ChangeQuantity from "../Basket/ChangeQuantity";
import { addItemToBasket } from "../../redux/basketChoice";
import { useDispatch } from "react-redux";

const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    return (<div>
        <h3 className="dish"> {dish.name}</h3>
        <p className="dish">{dish.description}</p>
        <p className="dish">£ {dish.price}</p>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        <button className="dish" onClick={() => {dispatch(addItemToBasket({dish, quantity}));
    }}>Add to cart</button>
    </div>)
}

export default Dish;