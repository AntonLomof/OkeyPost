import React from 'react';
import './style.css';

function HowToBuy (props){
    return(
        <section className='how__to__buy'>
            <div className='how__to__buy__navigation'>
                <span><a href='../index.html' alt='Главная'>Главная</a></span>  /  <span><a href='#' alt='Главная'>Как покупать</a></span>
            </div>
            <div className='how__to__buy__title'>Научим покупать в Великобритании!</div>
            <div className='how__to__buy__subtitle'>и экономить до 70%</div>
            <div className='how__to__buy__button'>Получить адрес в UK</div>
        </section>
    );
};

export default HowToBuy;