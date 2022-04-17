import React from 'react';
import './style.css';

function VirtualTour (props){
    return (
        <section className='virtual__tour'>
            <img className='virtual__tour__img' src={require('./img/Слой 25.png').default} alt='VirtualTour' />
            <div>
                <div className='virtual__tour__title'>Виртуальный тур по нашему складу в реальном времени</div>
                <div className='virtual__tour__text'>Вы можете всегда посмотреть на нашу слаженую работу на складе</div>
                <div className='virtual__tour__button'>Попробовать</div>
            </div>
        </section>
    )
};

export default VirtualTour;