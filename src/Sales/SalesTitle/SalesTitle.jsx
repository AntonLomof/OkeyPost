import React from 'react';
import './style.css';

function HowToBuy (props){
    return(
        <section className='howToBuy'>
            <div className='howToBuy__navigation'>
                <span><a href='../index.html' alt='Главная'>Главная</a></span>  /  <span><a href='#' alt='Главная'>Распродажи</a></span>
            </div>
            <div className='howToBuy__title'>Распродажи</div>
            <div className='howToBuy__subTitle'>ранний доступ к распродажам в магазинах</div>
            <div className='howToBuy__button'>Получить адрес в UK</div>
        </section>
    );
};

export default HowToBuy;

