import React from 'react';
import './style.css';

function OnlineCalculatorTitle (props){
    return(
        <section className='online__calculator__title'>
            <div className='online__calculator__title__title'>Онлайн - калькулятор стоимости доставки товара</div>
            <div className='online__calculator__title__text'>Задайте необходимые параметры посылки, и калькулятор рассчитает приблизительную стоимость доставки вашей посылки из Англии.</div>
        </section>
    )
};

export default OnlineCalculatorTitle;