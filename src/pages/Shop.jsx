function Shop(){
    return(
        <>
         <section className="book_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Your cart
        </h2>
      </div>
      <div className="row">
        <div className="col-md-6">
         
                    <div className="shopping__cart__table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="product__cart__item">
                                        <div className="product__cart__item__pic">
                                            <img src="img/shop/cart/cart-1.jpg" alt=""/>
                                        </div>
                                        <div className="product__cart__item__text">
                                            <h6>T-shirt Contrast Pocket</h6>
                                            <h5>$98.49</h5>
                                        </div>
                                    </td>
                                    <td className="quantity__item">
                                        <div className="quantity">
                                            <div className="pro-qty"><span className="dec qtybtn">-</span>
                                                <input type="text" value="1" />
                                            <span className="inc qtybtn">+</span></div>
                                        </div>
                                    </td>
                                    <td className="cart__price">$ 30.00</td>
                                    <td><span className="btn btn-warning">del</span></td>
                                </tr>
                                <tr>
                                    <td className="product__cart__item">
                                        <div className="product__cart__item__pic">
                                            <img src="img/shop/cart/cart-2.jpg" alt="" />
                                        </div>
                                        <div className="product__cart__item__text">
                                            <h6>Diagonal Textured Cap</h6>
                                            <h5>$98.49</h5>
                                        </div>
                                    </td>
                                    <td className="quantity__item">
                                        <div className="quantity">
                                            <div className="pro-qty"><span className="dec qtybtn">-</span>
                                                <input type="text" value="1" />
                                            <span className="inc qtybtn">+</span></div>
                                        </div>
                                    </td>
                                    <td className="cart__price">$ 32.50</td>
                                    <td ><span className="btn btn-warning">del</span></td>
                                </tr>
                                <tr>
                                    <td className="product__cart__item">
                                        <div className="product__cart__item__pic">
                                            <img src="img/shop/cart/cart-3.jpg" alt="" />
                                        </div>
                                        <div className="product__cart__item__text">
                                            <h6>Basic Flowing Scarf</h6>
                                            <h5>$98.49</h5>
                                        </div>
                                    </td>
                                    <td className="quantity__item">
                                        <div className="quantity">
                                            <div className="pro-qty"><span className="dec qtybtn">-</span>
                                                <input type="text" value="1" />
                                            <span className="inc qtybtn">+</span></div>
                                        </div>
                                    </td>
                                    <td className="cart__price">$ 47.00</td>
                                    <td ><span className="btn btn-warning">del</span></td>
                                </tr>
                                <tr>
                                    <td className="product__cart__item">
                                        <div className="product__cart__item__pic">
                                            <img src="img/shop/cart/cart-4.jpg" alt="" />
                                        </div>
                                        <div className="product__cart__item__text">
                                            <h6>Basic Flowing Scarf</h6>
                                            <h5>$98.49</h5>
                                        </div>
                                    </td>
                                    <td className="quantity__item">
                                        <div className="quantity">
                                            <div className="pro-qty"><span className="dec qtybtn">-</span>
                                                <input type="text" value="1" />
                                            <span className="inc qtybtn">+</span></div>
                                        </div>
                                    </td>
                                    <td className="cart__price">$ 30.00</td>
                                    <td ><span className="btn btn-warning">del</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="continue__btn">
                                <a href="#">Continue Shopping</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="continue__btn update__btn">
                                <a href="#"><i className="fa fa-spinner"></i> Update cart</a>
                            </div>
                        </div>
                    </div>
                    
        </div>
        <div class="col-md-6">
          <div class="map_container ">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80181.16691120605!2d16.880853497265637!3d51.096254900000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc26f5110ab53%3A0x1693601190156265!2sPizza%20Hut%20Wroc%C5%82aw%20Wroclavia!5e0!3m2!1spl!2spl!4v1696787510747!5m2!1spl!2spl" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            </div>
      </div>
    </div>
  </section>
        </>
    )
}
export default Shop;