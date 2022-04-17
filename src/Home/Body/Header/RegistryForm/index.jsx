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

function RegistryForm(props){
    return (
        <section className='PrivateOfficeInputForm RegistryForm'>
            <form action="#">
                <div className='form__title'>Выполните вход в ваш личный кабинет</div>
                <div className='form__telefonNumber'>Имя</div>
                <input className='form__tel' type="text" />
                <div className='form__emailTitle'>Фамилия</div>
                <input className='form__email' type="text" />
                <div className='form__passwordTitle'>Введите пароль:</div>
                <input className='form__password' type="password" />
                <div className='form__fastRegistry' >Нажимая на кнопку вы соглашаетесь с <a href="#">правилами предоставления услуг </a>или
                <a href='#'> политикой конфиденциальности</a>
                </div>
                <div className='form__buttonAndShare'>
                    <div className='buttonAndShare__button RegistryForm__btn'>Войти</div>
                    <div>Уже зарегистрированы?<Link to='/Autorization'>Выполните вход</Link></div>
                </div>
                <Link to='/' onClick={Close}><div className='close'></div></Link>
            </form>
        </section>
    )
}

export default RegistryForm;