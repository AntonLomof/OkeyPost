import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Body from '../../Body'

//Закрытие формы
const Close = () =>{
    document.querySelector('.section__header').classList.toggle('stan');
    document.querySelector('.section__delivery').classList.toggle('stan');
    document.querySelector('.categories').classList.toggle('stan');
    document.querySelector('.section__actual__item').classList.toggle('stan');
    document.body.classList.toggle('stanForBody');
}


function PrivateOfficeInputForm(){
    //Создаем состояния для input ов
    const [tel ,setTel] = useState ('');
    const [email ,setEmail] = useState ('');
    const [password ,setPassword] = useState ('');
    const [telDirty ,setTelDirty] = useState (false);
    const [emailDirty ,setEmailDirty] = useState (false);
    const [passwordDirty ,setPasswordDirty] = useState (false);
    const [telError ,setTelError] = useState ('Заполни поле');
    const [emailError ,setEmailError] = useState ('Заполни поле');
    const [passwordError ,setPasswordError] = useState ('Заполни поле');

    //Проверяем input ы на валидность значений
    const telHandler = (e) =>{
        setTel(e.target.value);
        const regex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
        if (regex.test(String(e.target.value).toLocaleLowerCase()) == true){
            setTelError('')
        }else {
            setTelError('Некорректный номер телефона')
        }
    }
    const emailHandler = (e) =>{
        setEmail(e.target.value);
        const regex =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (regex.test(String(e.target.value).toLocaleLowerCase()) == true){
            setEmailError('');
        }else {
            setEmailError('Некорректный email');
        }
    }
    const passwordHandler = (e) =>{
        setPassword(e.target.value);
        if ( e.target.value.length > 10){
            setPasswordError('Не тот пароль');
            if(e.target.value == true){
                setPasswordError('Надо заполнить поле');
            }
        }else{
            setPasswordError('');
        }
    }
    //Событие на посещение input а мышкой
    const blurHandler = (e) =>{
        switch (e.target.name) {
            case 'tel':
                setTelDirty(true);
                break;
        }
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true);
                break;
        }
        switch (e.target.name) {
            case 'password':
                setPasswordDirty(true);
                break;
        }
    }
    return (
        <>
        <Body/>
        <section className='PrivateOfficeInputForm'>
            <form action="#" className='form'>
                <div className='form__title'>Выполните вход в ваш личный кабинет</div>
                <div className='form__telefonNumber'>Номер телефона:</div>
                <input onChange={telHandler} value={tel} onBlur={e => blurHandler(e)} name = 'tel' className='form__tel' type="tel" placeholder='+8' />
                {(telDirty && telError) && <div style={{color: 'red'}}>{telError}</div>}
                <div className='form__emailTitle'>Ваш email:</div>
                <input onChange={emailHandler} value={email} onBlur={e => blurHandler(e)} name='email' className='form__email' type="email" />
                {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
                <div className='form__passwordTitle'>Введите пароль:</div>
                <input onChange={passwordHandler} value={password} onBlur={e => blurHandler(e)} name='password' className='form__password' type="password" />
                {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
                <div className='form__fastRegistry' >
                    <Link to='/Autorization/RecoveryPassword'>Восстановление пароля </Link>или
                    <Link to='/Autorization/FastRegistry'> быстрая регистрация</Link></div>
                <div className='form__buttonAndShare'>
                    <Link to='/Autorization/SMS'><div className='buttonAndShare__button' >Войти</div></Link>
                    <div>
                        <img src={require('./img/Google.png').default} alt='Google' />
                        <img src={require('./img/Facebook.png').default} alt='Facebook' />
                        <img src={require('./img/Vkontakte (VK).png').default} alt='Vkontakte' />
                    </div>
                </div>
                <Link to='/' onClick={Close}><div className='close'></div></Link>
            </form>
        </section>
        </>
    )
}

export default PrivateOfficeInputForm;