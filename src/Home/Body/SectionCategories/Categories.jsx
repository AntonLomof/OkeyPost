import React from 'react';
import './style.css';

function Categories (props){
    return(
        <section className='categories'>
            <div className='categories__item'>
                <div className='categories__item'>
                    <img src={require('./img/Clothes.png').default} alt='Clothes' />
                    <div>Одежда</div>
                </div>
            </div>
            <div className='categories__item'>
                <img src={require('./img/Electronics.png').default} alt='Electronics' />
                <div>Электроника</div>
            </div>
            <div className='categories__item'>
                <img src={require('./img/Accessories.png').default} alt='Accessories' />
                <div>Аксессуары</div>
            </div>
            <div className='categories__item'>
                <img src={require('./img/ForChildren.png').default} alt='ForChildren' />
                <div>Для детей</div>
            </div>
            <div className='categories__item'>
                <img src={require('./img/Sport.png').default} alt='Sport' />
                <div>Для спорта</div>
            </div>
            <div className='categories__item'>
                <div>
                <img src={require('./img/Cosmetics.png').default} alt='Cosmetics' />
                </div>
                <div>Косметика</div>
            </div>
        </section>
    )
};

export default Categories;