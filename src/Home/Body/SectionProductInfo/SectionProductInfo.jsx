import React from 'react';
import './style.css';

function SectionProductInfo (props){
    return(
        <section className='section__product__info'>
            <div className='section__product__info__item'>
                <img src={require('./img/Saving70%.png').default} alt='Saving 70% your money' />
                <div className='section__product__info__text'>Экономия до 70%</div>
            </div>
            <div className='section__product__info__border'></div>
            <div className='section__product__info__item'>
                <img src={require('./img/OnlyOriginalProduct.png').default} alt='Only Original Product' />
                <div className='section__product__info__text'>Только подлинная продукция</div>
            </div>
            <div className='section__product__info__border'></div>
            <div className='section__product__info__item'>
                <img src={require('./img/FastDelivery.png').default} alt='Fast Delivery' />
                <div className='section__product__info__text'>Оперативная доставка</div>
            </div>
            <div className='section__product__info__border'></div>
            <div className='section__product__info__item'>
                <img src={require('./img/BigChoose.png').default} alt='Big Choose' />
                <div className='section__product__info__text'>Огромный выбор товаров</div>
            </div>
        </section>
    )
};

export default SectionProductInfo;