import React from 'react'
//import './components/Home.css';
import Products from './Products';
import NavbarP from './NavbarP';
const Home = () => {
    return (
        <React.Fragment>
            <div className="products-home">
                <NavbarP />
                <Products/>
            </div>

        </React.Fragment>
    )
}

export default Home
