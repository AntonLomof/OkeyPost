import React from 'react';
import './style.css';

function AffiliateProgramInfo (props){
    return(
        <section className='AffiliateProgramInfo__body'>
            <section className='howToBuy'>
                <div className='howToBuy__navigation'>
                    <span><a href='../index.html' alt='Главная'>Главная</a></span>  /  <span><a href='#' alt='Главная'>Бонусы и партнёрская программа</a></span>
                </div>
                <div className='howToBuy__title'>Бонусы и партнёрская программа</div>
                <div className='howToBuy__subTitle'>Платим $3 с каждой отправленной посылки</div>
                <div className='howToBuy__button'>Начать зарабатывать</div>
            </section>
        </section>
    )
}

export default AffiliateProgramInfo;