import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bars from './assets/bars.png';
import avatar from './assets/avatar.png';
import logo from './assets/logo.png';
import search from './assets/search.png';
import location from './assets/location.png';
import ShoppingCart from './assets/ShoppingCart.png';
import { useState } from "react"

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div>
      <nav className="row nav-bar ">
        <div className="col d-flex justify-content-center align-items-center p-0 w-full">
          <img src={bars} alt="" />
        </div>
        <div className="col-10 d-flex justify-content-around p-0">
          <div className="d-flex justify-content-around align-items-center" >
            <img src={logo} alt="" />
            <p className="text-logo">OliveNow</p>
          </div>
          <div className="position-relative d-flex justify-content-center align-items-center">
            <input
              type='text'
              name="searchValue"
              id="searchValue"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="search-bar d-flex align-items-center"
            />
            <label htmlFor="searchValue" className="search-placeholder position-absolute d-flex align-items-center ">
              <img src={search} alt="" className="search-icon" />
              <span className="text-search">Search dish name...</span>
            </label>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <img src={location} alt="" />
            <p className="text-location">Agrabad 436, Chittagong</p>
          </div>
          <div className="shopping-cart d-flex justify-content-center align-items-center">
            <img src={ShoppingCart} alt="" />
            <div className=" counter d-flex justify-content-center align-items-center">
              <p>0</p>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center align-items-center p-0">
          <img src={avatar} alt="" />
        </div>
      </nav>
    </div>
  );
}

export default App;
