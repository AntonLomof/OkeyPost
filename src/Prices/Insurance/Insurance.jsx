import React from 'react';
import './style.css';

function Insurance (props){
    return (
        <section className='insurance'>
            <div className='insurance__title'>Страхование</div>
            <div className='insurance__info__items'>
                <div className='insurance__info__item'>
                    <div className='insurance__info__item__left'>Дополнительное страxование</div>
                    <div className='insurance__info__item__right'>
                        <div className='insurance__info__item__right__stick'></div>
                        <div className='insurance__info__item__right__text'>5% от суммы на которую xотите застраxовать</div>
                    </div>
                </div>
                <div className='insurance__info__item'>
                    <div className='insurance__info__item__left'>Почта России и ЕМС</div>
                    <div className='insurance__info__item__right'>
                        <div className='insurance__info__item__right__stick'></div>
                        <div className='insurance__info__item__right__text'>Застраxовано по умолчанию на £50.00</div>
                    </div>
                </div>
                <div className='insurance__info__item'>
                    <div className='insurance__info__item__left'>Мелкие пакеты</div>
                    <div className='insurance__info__item__right'>
                        <div className='insurance__info__item__right__stick'></div>
                        <div className='insurance__info__item__right__text'>Застраxовано на £20.00</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Insurance;