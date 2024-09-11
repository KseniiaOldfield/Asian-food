
import './App.css';
import YourBasket from './Components/Basket/YourBasket';
import Dishes from './Components/DishesComponents/Dishes';
import Categories from './Components/Filter/Categories';

function App() {
  return (<div>
    <div>
    <header className="nav-item">
      <a href="/" className="">
        <svg className="" width="40" height="32"></svg>
        <span className="tokyo">Tokyo 東京</span>
      </a>

      <ul className="">
        <li className=""><a href="#" className="nav-link active" aria-current="page">Home</a></li>
        <li className=""><a href="#" className="nav-link">About</a></li>
      </ul>
    </header>  
  </div>
    <div className="App">
      <div className='item'><Categories/></div>
      <div className='item scroll'><Dishes/></div>
      <div className='item'><YourBasket/></div>
    </div>
<footer className="">
      <p className=" nav-item foot">© 2024 Company, Inc</p>
  </footer>
  </div>
  );
}
export default App;
