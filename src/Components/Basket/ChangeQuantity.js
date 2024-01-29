const ChatgeQuantity = ({quantity, setQuantity}) => {
    const addItem = () => {
        const newItem = quantity + 1;
        setQuantity(newItem)
    }
    const deleteItem = () => {
        if (quantity <=1) return;
        const newItem = quantity - 1;
        setQuantity(newItem)
    }
    return (<div className="boxBtn">
        <button onClick={addItem} className="btn">+</button>
        <span className="quantity">{quantity}</span>
        <button onClick={deleteItem} className="btn">-</button>
    </div>)
}

export default ChatgeQuantity;
