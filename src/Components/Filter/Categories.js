import Filter from "./Filter";

const Categories=() => {
    return(
    <div>
    <img className="logo" src="https://cdn-icons-png.freepik.com/256/9438/9438842.png?ga=GA1.2.171460617.1695459402&semt=ais" alt="chopsticks"/>
    {['APPETISERS', 'NOODLES', 'SALADS', 'RICE DISHES', 'SOUP', 'ALL']
    .map(category => <Filter category={category}/>
    )}
    </div>)
}
export default Categories;