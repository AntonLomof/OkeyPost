import React from 'react';
import './style.css';
import Body from "./Body/Body.jsx";
import HowtobuyBody from '../Howtobuy/Body.jsx';
import PricesBody from '../Prices/Body.jsx';
import SalesBody from '../Sales/Body.jsx';
import MostPopularQuestions from '../MostPopularQuestions/Body.jsx';
import AffiliateProgram from '../AffiliateProgram/Body.jsx';
import Blog from '../Blog/Body.jsx';
import Shops from'../Shops/Body.jsx';

import {Routes, Route } from 'react-router-dom';

//LK Profile

import LKProfile from '../LKProfile/index.jsx';


const App = () =>{
    return (
       <>
         {/* <Body/>  */}
        <LKProfile/>
        <Routes>
            {/* <Route exact path ='/' element={<Body />}/> */}
                <Route path ='/Sales' element={<SalesBody/>}/>
                <Route path ='/Prices' element={<PricesBody/>}/>
                <Route path='/HowToBuy' element={<HowtobuyBody/>}/>
                <Route path ='/Help' element={<MostPopularQuestions/>}/>
                <Route path ='/Bonuses' element={<AffiliateProgram/>}/>
                <Route path='/Blog' element={<Blog/>}/>
                <Route path='/Shops' element={<Shops/>}/>
        </Routes>
        </>
    );
};

export default App;