const Dish = ({dish}) => {
    return (<div>
        <h3 className="dish"> {dish.name}</h3>
        <p className="dish">{dish.description}</p>
        <p className="dish">£ {dish.price}</p>
        <button className="btn">DEL</button>
        <button>1</button>
        <button>ADD</button>
    </div>)
}

export default Dish;