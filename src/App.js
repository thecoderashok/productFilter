// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {productData} from "./Product"

function App() {
  // List of all cars satisfing all the filters
  const [filteredList, setFilteredList] = useState(productData);
  // Selected Brand name filter
  const [category, setCategory] = useState("");
  // Selected Year filter
  const [person, setPerson] = useState();

  const [productPrice, setProductPrice] = useState(0);
  const [value, setValue] = useState();




  const rangeValueChange = (e) => {
    setValue(value)



    setProductPrice(e.target.value);
  }
  

  const filterByCategory = (filteredData) => {
    // Avoid filter for empty string
    if (!category) {
      return filteredData;
    }
    const filteredProducts = filteredData.filter(
      (item) => item.category === category
    );
    return filteredProducts;
  };


  const filterByPerson = (filteredData) => {
    // Avoid filter for null value
    if (!person) {
      return filteredData;
    }
    const filteredProducts = filteredData.filter(
      (item) => item.for === person
    );
    return filteredProducts;
  };
  const filterByPrice = (filteredData) => {
    // Avoid filter for null value
    if (!productPrice) {
      return filteredData;
    }
    const filteredProducts = filteredData.filter(
      (item) => item.price <= productPrice
    );
    return filteredProducts;
  };

  const filterCategory = (e) => {
    setCategory(e.target.value)
  }


  useEffect(() => {
    var filteredData = filterByCategory(productData);
    filteredData = filterByPerson(filteredData);
    filteredData = filterByPrice(filteredData);
    setFilteredList(filteredData);
  }, [category, person, productPrice]);




//   console.log(productData)
  return (
    <>
     <section className="product_section">
            <div className="product_filter_nav container">
                {/* <!-- <span className="vertical_line one"></span> --> */}
                <div className="category_tab">
                    <div className="custom-select tab_margin">
                        <span className="tab_title">select category</span>
                        <select id="category_select" onChange={filterCategory}>
                            <option value="trending">Trending</option>
                            <option value="lifestyle">Lifestyle</option>
                            <option value="home decor">Home Decor</option>
                            <option value="electronics">Electronics</option>
                            <option value="appliances">Appliances</option>
                        </select>
                    </div>
                </div>

                <div className="person_filter_tab tab_margin">
                    <span className="tab_title">select for</span>

                    <div className="tabs">
                    
                    <button id="men" onClick={() => setPerson("men")}>
                        <i className="fa-solid fa-user"></i>
                        men
                    </button>
                    <button id="women" onClick={() => setPerson("women")}>
                        <i className="fa-solid fa-user"></i>
                        women
                    </button>
                    <button onClick={() => setPerson("kids")}>
                        <i className="fa-solid fa-user"></i>
                        kids
                    </button>
                    <button onClick={() => setPerson("elderly")}>
                        <i className="fa-solid fa-user"></i>
                        Elderly
                    </button>
                    <button onClick={() => setPerson("friends")}>
                        <i className="fa-solid fa-user"></i>
                        Friends
                    </button>
                </div>

                </div>

                <div className="price_filter tab_margin">
                    <span className="tab_title">select price</span>
                    <input id="slider" className="range blue" type="range" min="0" value={value} max="1000" onChange={rangeValueChange}  list="ticks"/>
                </div>

            </div>
            <div className="container">
                <div className="product_carousel">
                    
                    {filteredList.map((item, index) => (
                          <div class="product_card">
                            <img src={item.images} alt=""/>
                            <div class="column_wrapper">
                              <i>Amazon</i>
                              <p>{item.price}</p>
                      
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
       </section>
    </>
  );
}

export default App;
