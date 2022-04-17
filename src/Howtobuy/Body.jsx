import React from 'react';
import './style.css';
import BuyInfo from './BuyInfo/BuyInfo.jsx';
import HowToBuy from './HowToBuy/HowToBuy.jsx';
import QuestionLeftLink from './QuestionLeftLink/QuestionLeftLink.jsx';
import Header from '../Home/Body/Header/Header'
import Footer from '../Home/Body/Footer/Footer';
import OkeyPost from '../Home/Body/SectionOkeyPost/OkeyPost';

const Body = () =>{
    return (
        <section>
            <Header />
            <HowToBuy />
            <BuyInfo />
            <QuestionLeftLink />
            <Footer/>
            <OkeyPost/>
        </section>
    )
};
export default Body;