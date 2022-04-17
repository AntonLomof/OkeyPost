import React from 'react';
import './style.css';

function SectionActualItem (props){
    return(
        <section className='section__actual__item'>
            <div className='section__actual__item__left'>
                <div className='section__actual__item__left__text'>
                    Columbia Barlow Pass 550 Turbodown Jacket
                </div>
                <div className='section__actual__item__info'>
                    <div>
                        <img src={require('./img/flagrussia.png').default} alt='flagrussia' />
                    </div>
                    <div className='section__actual__item__info__price'>
                        <div className='price__in'>Цена в России</div>
                        <div className='section__actual__item__left__text'>7891,46₽</div>
                    </div>
                </div>
                <div className='section__actual__item__actual__product'>
                    <div>
                        <img src={require('./img/t-shirt.png').default} alt='t-shirt' />
                    </div>
                    <div>
                        <img src={require('./img/VectorT-shirt.png').default} alt='T-shirt link' />
                    </div>
                </div>
            </div>
            <div className='section__actual__item__center'>
                <div>
                    <img src={require('./img/Jacket.png').default} alt='Jacket' />
                </div>
                <div className='section__actual__item__center__text'>Срок доставки примерно 10 дней</div>
                <div className='section__actual__item__left__text'>Вы экономите до <span className='section__actual__item__right__price'>$119.56</span></div>
            </div>
            <div className='section__actual__item__right'>
                <div className='section__actual__item__left__text'>
                    Доставка одежды из Великобритании  от <span className='section__actual__item__right__price'>£7.79</span>
                </div>
                <div className='section__actual__item__info'>
                    <div>
                        <img src={require('./img/uk.png').default} alt='uk' />
                    </div>
                    <div className='section__actual__item__info__price'>
                        <div className='price__in'>Цена в UK</div>
                        <div className=' section__actual__item__right__price'>£80.62</div>
                    </div>
                </div>
                <div className='section__actual__item__actual__product'>
                    <div>
                        <img src={require('./img/VectorJeens.png').default} alt='Jeens' />
                    </div>
                    <div>
                        <img src={require('./img/Jeens.png').default} alt='Jeens' />
                    </div>
                </div>
            </div>

        </section>
    )
};
export default SectionActualItem;