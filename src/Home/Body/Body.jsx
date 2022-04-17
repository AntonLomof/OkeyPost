import React from 'react';
import './style.css';
import  Header  from './Header/Header.jsx';
import SectionDelivery from './SectionDelivery/SectionDelivery.jsx'
import Profit from './SectionProfit/Profit.jsx';
import Categories from './SectionCategories/Categories.jsx';
import SectionActualItem from './SectionActualItem/SectionActualItem.jsx';
import SectionProductInfo from './SectionProductInfo/SectionProductInfo.jsx';
import SectionInfo from './SectionInfo/SectionInfo.jsx';
import ConstCalc from './SectionConstCalc/CostCalc.jsx';
import FourWays from './SectionFourWays/FourWays.jsx'
import VirtualTour from './SectionVirtualTour/VirtualTour.jsx';
import Reviews1 from './SectionReview1/Reviews1.jsx';
import Reviews2 from './SectionReview2/Reviews2.jsx';
import Subs from './SectionSubs/Subs.jsx';
import Footer from './Footer/Footer.jsx';
import OkeyPost from './SectionOkeyPost/OkeyPost.jsx';
import DeliveryOptions from './DeliveryOptions/DeliveryOptions.jsx';

import PrivateOfficeInputForm from './Header/PrivateOfficeInputForm/inputForm.jsx';
import RecoveryPassword from './Header/RecoveryPassword/index.jsx';
import RegistryForm from './Header/RegistryForm/index.jsx';
import SMSCode from './Header/smsCode/smsCode.jsx';

import {Routes, Route } from 'react-router-dom';


function Body (props){
    return (
        <>
        <section className='section__body'>
            <Header/>
            <SectionDelivery />
            <Profit />
            <Categories />
            <SectionActualItem />
            <SectionProductInfo />
            <SectionInfo />
            <ConstCalc />
            <DeliveryOptions/>
            <FourWays/>
            <VirtualTour/>
            <Reviews1/>
            <Reviews2/>
            <Subs/>
            <Footer />
            <OkeyPost />
        </section>
        <Routes>
                <Route path='/Autorization' element={<PrivateOfficeInputForm/>}/>
                <Route path='/Autorization/RecoveryPassword' element={<RecoveryPassword/>}/>
                <Route path='/Autorization/FastRegistry' element={<RegistryForm/>}/>
                <Route path='/Autorization/SMS' element={<SMSCode/>}/>
        </Routes>
        </>
    );
};

export default Body;