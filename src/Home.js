import React from 'react'
import "./Home.css"
import Product from "./Product";
function Home() {
    return (
        <div className="Home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />


            <div className="home__row">
                    <Product 
                        id="1"
                        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut placerat massa.' 
                        price={29.99} 
                        image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}
                        rating={5}
                    />
                    <Product 
                        id="2"
                        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut placerat massa.' 
                        price={19.99} 
                        image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}
                        rating={4}
                    />
            </div>


            <div className="home__row">
            <Product 
                        id="3"
                        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut placerat massa.' 
                        price={69.99} 
                        image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}
                        rating={5}
                    />
                    <Product 
                        id="4"
                        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut placerat massa.' 
                        price={59.99} 
                        image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}
                        rating={4}
                    />
                    <Product 
                        id="5"
                        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut placerat massa.' 
                        price={49.99} 
                        image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}
                        rating={4}
                    />
            </div>


            <div className="home__row">
            <Product 
                        id="6"
                        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut placerat massa.' 
                        price={39.99} 
                        image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}
                        rating={4}
                    />
            </div>


            </div>
        </div>
    );
}
export default Home;