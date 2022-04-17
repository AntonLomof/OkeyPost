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
function smsCode (){
    return (
             <section className='smsCode PrivateOfficeInputForm smsCode'>
            <form action="#">
                <div className='form__title'>Введите код из СМС для водтверждения</div>
                <div className='form__telefonNumber'>Код из SMS</div>
                <input type="text" />
                <div className='buttonAndShare__button btn'>Войти</div>
            </form>
            <Link to='/' onClick={Close}><div className='close'></div></Link>
        </section>
    )
}
export default smsCode;