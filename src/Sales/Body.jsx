import React from 'react';
import './style.css';
import SalesTitle from './SalesTitle/SalesTitle.jsx';
import BlackFridayEarlyAccess from './BlackFridayEarlyAccess/BlackFridayEarlyAccess.jsx';
import BlackFridayItems from './BlackFridayItems/BlackFridayItems.jsx';
import Header from '../Home/Body/Header/Header';
import Footer from '../Home/Body/Footer/Footer';
import OkeyPost from '../Home/Body/SectionOkeyPost/OkeyPost';

function Body (props){
    return(
        <section >
            <Header/>
             <SalesTitle />
           <BlackFridayEarlyAccess />
           <BlackFridayItems />
           <Footer/>
           <OkeyPost/>
        </section>
    );
};

export default Body;