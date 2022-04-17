import React from 'react';
import './style.css';

function DeliveryOptions (props){
    return (
        <section className='delivery__options'>
            <div className='delivery__options__title'>Варианты доставки :</div>
            <section className='delivery__options__items'>
                <div className='delivery__options__items__right'>
                    <img className='delivery__options__img' src={require('./img/rus.png').default} alt='post office'/>
                    <div className='delivery__options__text'>Почта России</div>
                </div>
                <div className='delivery__options__item__right'>
                    <div className='stick'></div>
                    <div className='delivery__options__item'>
                        <div className='delivery__options__text__default'>Сроки :</div>
                        <div className='delivery__options__text'>10-14 дней</div>
                    </div>
                    <div className='stick'></div>
                    <div className='delivery__options__item'>
                        <div className='delivery__options__text__default'>Стоимость доставки :</div>
                        <div className='delivery__options__text'>от <span>£27.00</span></div>
                    </div>
                    <div className='stick'></div>
                    <div className='delivery__options__item'>
                        <div className='delivery__options__text__default'>Итого :</div>
                        <div className='delivery__options__text'>£41.99</div>
                    </div>
                    <div className='stick'></div>
                    <div className='delivery__options__arrow1'><img className='velivery__options__arrow' src={require('./img/Vector 12.png').default}/></div>
                </div>
            </section>
            <section className='delivery__options__items'>
                <div className='delivery__options__items__right'>
                    <img className='delivery__options__img' src={require('./img/ruspost.png').default} alt='post office'/>
                    <div className='delivery__options__text'>EMS ПОЧТА РОССИЯ</div>
                </div>
                <div className='delivery__options__item__right'>
                    <div className='stick'></div>
                    <div className='delivery__options__item'>
                        <div className='delivery__options__text__default'>Сроки :</div>
                        <div className='delivery__options__text'>9-12 дней</div>
                    </div>
                    <div className='stick'></div>
                    <div className='delivery__options__item'>
                        <div className='delivery__options__text__default'>Стоимость доставки :</div>
                        <div className='delivery__options__text'>от <span>£40.00</span></div>
                    </div>
                    <div className='stick'></div>
                    <div className='delivery__options__item'>
                        <div className='delivery__options__text__default'>Итого :</div>
                        <div className='delivery__options__text'>£54.55</div>
                    </div>
                    <div className='stick'></div>
                    <div className='delivery__options__arrow1'><img className='delivery__options__arrow' src={require('./img/Vector 12.png').default}/></div>
                </div>
            </section>
            <section className='delivery__options__items'>
                <div className='delivery__options__items__right'>
                    <img className='delivery__options__img' src={require('./img/ems.png').default} alt='post office'/>
                    <div className='delivery__options__text'>ПОЧТА РОССИИ МЕЛКИЕ ПАКЕТЫ</div>
                </div>
                <div className='delivery__options__item__right'>
                    <div className='stick'></div>
                    <div className='delivery__options__item'>
                        <div className='delivery__options__text__default'>Сроки :</div>
                        <div className='delivery__options__text'>10-14 дней</div>
                    </div>
                    <div className='stick'></div>
                    <div className='delivery__options__item'>
                        <div className='delivery__options__text__default'>Стоимость доставки :</div>
                        <div className='delivery__options__text'>от <span>£13.00</span></div>
                    </div>
                    <div className='stick'></div>
                    <div className='delivery__options__item'>
                        <div className='delivery__options__text__default'>Итого :</div>
                        <div className='delivery__options__text'>£90.50</div>
                    </div>
                    <div className='stick'></div>
                    <div className='delivery__options__arrow1'><img className='delivery__options__arrow' src={require('./img/Vector 12.png').default}/></div>
                </div>
            </section>
        </section>
    )
};

export default DeliveryOptions;