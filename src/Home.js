import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
    return (
        <div className="home">
          <div className="home_container">
              <img className="home_image" 
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Samsung/SamsungM/M32/GW/Sale/12thJuly/D24426934_IN_WLME_SamsungGalaxy_M32_DesktopTallHero_1500x600_2._CB664417886_.jpg"/>
           
           
                 <div className="home_row">
                     <Product 
                     title="The lean startup" 
                     price={499}
                     image="https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"
                     alt=""
                     rating={4}
                     />
                     <Product 
                     title="boAt Stone 1200 14W Bluetooth with RGB LEDs,
                      Bluetooth v5.0. IPX7 Rated Resistance, 
                     Nonstop Audio for up to 9 Hours with Instant Voice Assistant" 
                     price={3999}
                     image="https://images-na.ssl-images-amazon.com/images/I/61hWrCmtO0L._SY355_.jpg"
                     alt=""
                     rating={4}
                     />
                     
                     
                 </div>
                 <div className="home_row">
                 <Product 
                     title="Mi 11X Pro 5G 
                     (Cosmic Black, 8GB RAM, 128GB Storage) |
                      Snapdragon 888 | 108MP Camera" 
                     price={35499}
                     image="https://images-eu.ssl-images-amazon.com/images/I/41Y52jD863S._AC_SX184_.jpg"
                     rating={4}
                     />
                     <Product 
                     title="OnePlus Nord CE 5G (Charcoal Ink, 8GB RAM, 128GB Storage)" 
                     price={38599}
                     image="https://images-na.ssl-images-amazon.com/images/I/71LRBr1aLNS._SX679_.jpg"
                     rating={4}
                     />
                     <Product 
                     title="HP Pavilion Gaming 15.6-inch(39.62 cms) 
                     FHD Gaming Laptop (Ryzen 5-4600H/8GB/1TB HDD/M.2 
                     Slot/Windows 10/NVIDIA
                     " 
                     price={78899}
                     image="https://images-na.ssl-images-amazon.com/images/I/71FeUtw%2BTPL._SL1500_.jpg"
                     rating={4}
                     />
                 
                 </div> 
                 <div className="home_row">
                    <Product 
                     title="The Float Luggage (Happy Green, Cabin 55 cms)" 
                     price={6990.00}
                     image="https://images-na.ssl-images-amazon.com/images/I/81MubzWoZlL._SL1500_.jpg"
                     rating={3}
                     />
                    <Product 
                     title="Centrino White Sneakers" 
                     price={724.00}
                     image="https://images-na.ssl-images-amazon.com/images/I/71wZrAvXshL._UL1500_.jpg"
                     rating={4}
                    />
                   <Product 
                     title="United Colors of Benetton Men's Regular Polo Shirt" 
                     price={930.00}
                     image="https://images-na.ssl-images-amazon.com/images/I/81zlh9wDX3L._UL1500_.jpg"
                     rating={3}
                    />  
                 
                 </div>
                 <div className="home_row">
                     <Product
                     title="
                     Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black) 27-inch Odyssey G7 - QHD 1000R Curved Gaming Monitor" 
                     price={159900}
                     image="https://images-na.ssl-images-amazon.com/images/I/71MlcO29QOL._SL1500_.jpg"
                     rating={4}
                     />
                               
                                    
                     
                 </div>
           </div>

            
        </div>
    )
}

export default Home
