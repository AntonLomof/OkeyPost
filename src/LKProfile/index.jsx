import React from 'react';
import './style.css';
import GeneralInformation from './GeneralInformation/index.jsx';
import LKInfo from './LKInfo/index.jsx';
import LK_Adress_WorkInfo__ToPay from './LK_Adress_WorkInfo__ToPay/index.jsx';

function LKProfile (props){
    return (
        <>
            <header className='section__header'>
            <div className='header__logo'>
                <div>
                    <img src={require('./img/Logo.png').default} alt='Logo' />
                </div>
                    <div className='logo__name'>OkeyPost</div>
            </div>
            <menu className='header__menu'>
                    <a href="#" alt='Как покупать'>Главная</a>
                    <a href='#' alt='Распродажи'>Профиль</a>
                    <a href='#' alt='Цены'>Заказы</a>
                    <a href='#' alt='Помощь'>Посылки</a>
                    <a href='#' alt='Бонусы'>Транзакции</a>
                    <a href='#' alt='Блог'>Адресная книга</a>
                    <a href='#' alt='Магазины'>Уведомления</a>
            </menu>
            <div className='header__login__user'>
                <img src={require('./img/avatar.png').default} alt='Avatar' />
                <div className='lkUserName'>Dmitro Karimov</div>
            </div>
            </header>
            <GeneralInformation/>
            <LKInfo/>
            <LK_Adress_WorkInfo__ToPay/>
            </>
    );
};


export default LKProfile;