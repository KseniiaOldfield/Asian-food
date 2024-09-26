import dataAllDishes from "../../data/dataAllDishes";
import Dish from "./Dish";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/dishChoice";


const Dishes = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    return(
    <div>
        {dataAllDishes
        .filter(dish => {
            if (selectedCategory === 'ALL') return true;
            return selectedCategory === dish.category;
        }
        )
        .map(dish => <Dish key={dish.id} dish={dish}/>)}
    </div>)
}
export default Dishes;