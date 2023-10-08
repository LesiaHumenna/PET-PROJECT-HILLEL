import React, { useEffect, useState } from "react";
import DeliciousPizza from '../images/f1.png';
import allProducts from "../API/fetch-products";
import Product from "./Product";
import { NavLink, useLocation } from 'react-router-dom';

function OurMenu(){
  let buttonView = false
  const location = useLocation();
  
  if(location.pathname  === '/'){
    buttonView = true;
  }
  const [products, setProducts] = useState([]);
  const [productsType, setProductsType] = useState([]);
  useEffect(()=>
  {
      let dowloadingProducts = false;
      async function hej(){
          let products1 = await allProducts();
          setProducts(products1);
          addProducts(products1);
          setProductsType(products1);
      }

  if(!dowloadingProducts){
          hej();
          dowloadingProducts = true
      }

  },[])
  
  function addProducts(products) {
    const allProducts2 = Object.values(products).flatMap(product => Object.values(product));
    setProducts(allProducts2);
  }
  

  function handleOnclick(e){
const nameFilter = e.target.textContent.toLowerCase();
let newOne;
for(const key in productsType){
  if(key === nameFilter){
    newOne = Object.values(productsType[key]);
  }
}
console.log(productsType)
setProducts(newOne)
  }


    return(
        <>
         <section className="food_section layout_padding-bottom">
    <div className="container">
      <div className="heading_container heading_center">
      <h2>Our menu</h2>
      </div>

      <ul className="filters_menu">
        <li className="active" data-filter="*" onClick={()=>{addProducts(productsType)}}>All</li>
        <li data-filter=".burger" onClick={handleOnclick}>Burgers</li>
        <li data-filter=".pizza" onClick={handleOnclick}>Pizza</li>
        <li data-filter=".pasta">Pasta</li>
        <li data-filter=".fries">Fries</li>
      </ul>
     
      <div className="filters-content">
       
        {products && 
       <div className="row grid">{products.map((item)=> <Product props={item} />)} </div>
        }

         
          </div>
         {buttonView && <div className="btn-box">
        <NavLink to="/menu">
          View More
        </NavLink>
      </div>} 
    </div>
  </section>


  
        
        </>
    )
}
export default OurMenu;