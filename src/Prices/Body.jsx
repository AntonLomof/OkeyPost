import React from 'react';
import './style.css';
import DeliveryservicesfromtheUK from './DeliveryservicesfromtheUK/DeliveryservicesfromtheUK.jsx';
import DeliveryservicesfromtheUKInfo from './DeliveryservicesfromtheUKInfo/DeliveryservicesfromtheUKInfo.jsx';
import OnlineCalculatorTitle from './OnlineCalculatorTitle/OnlineCalculatorTitle.jsx';
import CostCalcPrices from './CostCalcPrices/CostCalc.jsx';
import DeliveryOptions from './DeliveryOptions/DeliveryOptions.jsx';
import WherehouseServices from './WherehouseServices/WherehouseServices.jsx';
import ShopoingWithOperators from './ShopoingWithOperators/ShopoingWithOperators.jsx'
import OrderWithAnOperator from './OrderWithAnOperator/OrderWithAnOperator.jsx';
import Insurance from './Insurance/Insurance.jsx';
import AdditionalPackaging from './AdditionalPackaging/AdditionalPackaging.jsx';
import Header from '../Home/Body/Header/Header';
import Footer from '../Home/Body/Footer/Footer';
import OkeyPost from '../Home/Body/SectionOkeyPost/OkeyPost';

const Body = () =>{
    return (
        <section>
            <Header/>
           <DeliveryservicesfromtheUK />
           <DeliveryservicesfromtheUKInfo />
           <OnlineCalculatorTitle />
           <CostCalcPrices />
           <WherehouseServices />
           <ShopoingWithOperators />
           <OrderWithAnOperator />
           <Insurance />
           <AdditionalPackaging />
           <Footer/>
           <OkeyPost/>
        </section>
    )
}
export default Body;