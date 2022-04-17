import React from 'react';
import './style.css';
import AffiliateProgramInfo from './AffiliateProgramInfo/index.jsx';
import EarnWithUs from './EarnWithUs/index.jsx';
import Join from './Join/index.jsx';
import Header from '../Home/Body/Header/Header';
import Footer from '../Home/Body/Footer/Footer';
import OkeyPost from '../Home/Body/SectionOkeyPost/OkeyPost';

function Body (props){
    return(
        <section className='AffiliateProgramInfo__body'>
            <Header/>
            <AffiliateProgramInfo/>
            <EarnWithUs />
            <Join/>
            <Footer/>
            <OkeyPost/>
        </section>
    )
}

export default Body;