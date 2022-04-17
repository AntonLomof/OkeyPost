import React from 'react';
import ShopTitle from './ShopTitle/index.jsx';
import ShopItems from './ShopsItems/index.jsx';
import Header from '../Home/Body/Header/Header.jsx';
import Footer from '../Home/Body/Footer/Footer.jsx';
import OkeyPost from '../Home/Body/SectionOkeyPost/OkeyPost.jsx';

function Body (props){
    return(
        <section className='Body'>
            <Header/>
            <ShopTitle/>
            <ShopItems />
            <Footer/>
            <OkeyPost/>
        </section>
    );
};

export default Body;