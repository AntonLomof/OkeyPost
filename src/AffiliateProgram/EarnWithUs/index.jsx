import React from 'react';
import './style.css';
import EarnWithUsItems from './EarnWithUsItems/index.jsx';
import image from './EarnWithUsItems/img/Group.png';
import image1 from './EarnWithUsItems/img/Group1.png';
import image2 from './EarnWithUsItems/img/Group2.png';
import image3 from './EarnWithUsItems/img/Group3.png';
import image4 from './EarnWithUsItems/img/Group4.png';

function EarnWithUs (props){
    return (
        <section className='EarnWithUs'>
            <div className='EarnWithUs__title'>Зарабатывать с нами — проще простого:</div>
            <div className='EarnWithUs__items'>
                <EarnWithUsItems img = {image}
                                alt='Sales'
                                title ='Дарим скидку 10% вашим друзьям и подписчикам'
                                text ='На их первую отправленную посылку. Вам есть чем мотивировать зарегистрироваться именно по вашему реферальному коду или ссылке.'
                />
                <EarnWithUsItems img = {image1}
                                alt='we pay'
                                title ='Платим по £3 за отправленную посылку '
                                text ='Когда клиент, привлеченный по вашей ссылке, отправляет посылку – на ваш счет поступает $3. Вы можете оплачивать этими деньгами ваши посылки или выводить их себе на счет.'
                />
            </div>
            <div className='EarnWithUs__items'>
                <EarnWithUsItems img = {image2}
                                alt='Promo for every taste'
                                title ='Промо на любой вкус'
                                text ='Автоматические или персональные реферальные коды для отправки друзьям или подписчикам в мессенджеры или социальные сети, а также реферальные ссылки и баннеры для ваших сайтов.'
                />
                <EarnWithUsItems img = {image3}
                                alt='Payouts on demand'
                                title ='Выплаты по запросу'
                                text ='Платим по первому вашему требованию без задержек и других сложностей. Если на счету менее $50 – вы можете тратить их на оплату товаров или доставки. Если больше – выводить на свой счет.'
                />
            </div>
            <div className='EarnWithUs__items'>
                <EarnWithUsItems img = {image4}
                                alt='Cashback'
                                title ='Начисляем кэшбэк £1 на 1 посылку'
                                text ='За каждую отправленную посылку , возможность оплатить после бонусного счета в 10 фунтов'
                />
            </div>
        </section>
    )
}
export default EarnWithUs;