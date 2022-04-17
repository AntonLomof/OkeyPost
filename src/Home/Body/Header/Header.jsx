import React from 'react';
import './style.css';
import { Link } from "react-router-dom";


const Click = () =>{
    document.querySelector('.section__header').classList.toggle('stan');
    document.querySelector('.section__delivery').classList.toggle('stan');
    document.querySelector('.categories').classList.toggle('stan');
    document.querySelector('.section__actual__item').classList.toggle('stan');
    document.body.classList.toggle('stanForBody');
}
function Header (props){
    return (
            <header className='section__header'>
            <Link to='/'><div className='header__logo'>
                <div>
                    <img src={require('./img/Logo.png').default} alt='Logo' />
                </div>
                    <div className='logo__name'>OkeyPost</div>
            </div></Link>
            <menu className='header__menu'>
                    <Link to='/HowToBuy' alt='Как покупать'>Как покупать</Link>
                    <Link to='/Sales' alt='Распродажи'>Распродажи</Link>
                    <Link to='/Prices' alt='Цены'>Цены</Link>
                    <Link to='/Help' alt='Помощь'>Помощь</Link>
                    <Link to='/Bonuses' alt='Бонусы'>Бонусы</Link>
                    <Link to='/Blog' alt='Блог'>Блог</Link>
                    <Link to='/Shops' alt='Магазины'>Магазины</Link>
            </menu>
            <div className='header__login__user'>
                <div className='header__login__user__img'>
                    <div className='header__user__img'>
                            <img src={require('./img/Vector-user.png').default} alt='OkeyPost' />
                    </div>
                    <Link to='/Autorization' className='header__login__user__logIn' onClick={Click}>Вход</Link>
                </div>
                <Link to='/Autorization'><a href='#' className='header__login__user__contact' onClick={Click}>Связаться с нами</a></Link>
            </div>
            </header>
    );
};


export default Header;