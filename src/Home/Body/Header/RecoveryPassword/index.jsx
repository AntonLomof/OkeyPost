import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Close = () =>{
    document.querySelector('.section__header').classList.toggle('stan');
    document.querySelector('.section__delivery').classList.toggle('stan');
    document.querySelector('.categories').classList.toggle('stan');
    document.querySelector('.section__actual__item').classList.toggle('stan');
    document.body.classList.toggle('stanForBody');
}

function RecoveryPassword (){
    return (
             <section className='recoveryPassword PrivateOfficeInputForm RecoveryPassword'>
            <form action="#">
                <div className='form__title'>Восстановление пароля</div>
                <div className='recoveryPassword__description'>Введите Email, с которым вы зарегистрированы на сайте, и нажмите <span>«Восстановить»</span></div>
                <div className='form__telefonNumber'>Ваш email:</div>
                <input className='recoveryPassword__input' type="text" />
                <div className='recoveryPassword__text'>Вспомнили пароль? <Link to='/Autorization'>Выполните вход</Link></div>
                <Link to='/Autorization'><div className='buttonAndShare__button'>Войти</div></Link>
            </form>
            <Link to='/' onClick={Close}><div className='close'></div></Link>
        </section>
    )
}
export default RecoveryPassword;