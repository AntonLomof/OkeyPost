import React from 'react';
import './style.css';

function Reviews1(props){
    return (
        <section className='review1'>
            <div className='review1__title'>120 000 довольных клиентов в России уже сделали свой выбор</div>
            <div className='review1__text'>За последний год десятки тысяч наших клиентов заказали товары из Англии и оставили 19 633 отзыва</div>
            <div className='review1__items'>
                <div className='review1__item'>
                    <img className='review1__item__img' src={require('./img/Group 20.png').default} alt='Group 20' />
                    <div className='review1__item__title'>Больше не значит дороже</div>
                    <div className='review1__item__text'>С ростом веса посылки цена за каждые 0.5 кг уменьшается в прогрессии.</div>
                </div>
                <div className='review1__item'>
                    <img className='review1__item__img' src={require('./img/Group 21.png').default} alt='Group 21' />
                    <div className='review1__item__title'>Быстрая обработка посылок</div>
                    <div className='review1__item__text'>Посылка обрабатывается не дольше 48 часов после поступления на склад.</div>
                </div>
                <div className='review1__item'>
                    <img className='review1__item__img' src={require('./img/Group.png').default} alt='Group' />
                    <div className='review1__item__title'>SMS-уведомления</div>
                    <div className='review1__item__text'>Отслеживайте весь процесс с помощью sms-уведомлений.</div>
                </div>
            </div>
        </section>
    )
};

export default Reviews1;