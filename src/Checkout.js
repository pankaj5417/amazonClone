import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Product from './Product';



function Checkout() {
    const [{basket,user},dispatch]=useStateValue();
 

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout-ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/Leadup21-page/Eng-PC/Alexa-assistant_pc.jpg" />
            
             <div >
                 <h3>Hello,{user?.email} </h3>
                <h2 className="checkout_title"> Your Shopping Basket</h2>
                 
                 {basket.map(item => (
                 <CheckoutProduct
                 id={item.id}
                title={item.title}
                 image={item.image}
                 price={item.price}
                 rating={item.rating}
                  />
                 ))}
                {/*checkoutProduct*/}
                
             </div>
            </div>
            <div className="checkout-right">
                 <Subtotal />

            </div>
            
        </div>

    )
}

export default Checkout
