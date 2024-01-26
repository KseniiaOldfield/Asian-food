
import './App.css';
import YourBasket from './Components/Basket/YourBasket';
import Dishes from './Components/DishesComponents/Dishes';
import Categories from './Components/Filter/Categories';

function App() {
  return (
    <div className="App">
      <div className='item'><Categories/></div>
      <div className='item scroll'><Dishes/></div>
      <div className='item'><YourBasket/></div>
    </div>
  );
}

export default App;
