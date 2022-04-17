import React from 'react';
import './style.css';

function LKInfo (props){
    return (
        <section className='LKinfo'>
             <img className='LKinfo__img' src={require('./img/SJ.png').default} alt='SJ' />
             <div className='LKinfo__rightItem'>
             <div className='LKinfo__profileInfo'>
                 <div className='LKinfo__profileInfo__item'>
                    <div className='LKinfo__profileInfo__item__title'>Имя:</div>
                    <div className='LKinfo__profileInfo__item__text'>Dmitro</div>
                 </div>
                 <div className='LKinfo__profileInfo__item'>
                    <div className='LKinfo__profileInfo__item__title'>Логин:</div>
                    <div className='LKinfo__profileInfo__item__text'>dmitro.uxui</div>
                 </div>
                 <div className='LKinfo__profileInfo__item'>
                    <div className='LKinfo__profileInfo__item__title'>E-mail:</div>
                    <div className='LKinfo__profileInfo__item__text'>dmitro.uxui@gmail.com</div>
                 </div>
                 <div className='LKinfo__profileInfo__item'>
                    <div className='LKinfo__profileInfo__item__title'>Телефон:</div>
                    <div className='LKinfo__profileInfo__item__text'>+38 098 898 96 66</div>
                 </div>
                 <div className='LKinfo__profileInfo__item'>
                    <div className='LKinfo__profileInfo__item__title'>Адрес:</div>
                    <div className='LKinfo__profileInfo__item__text'>Москва. Проспект Гонгадзе, 3а/98</div>
                 </div>
             </div>
            <div className='LKinfo__buttons'>
                <div className='LKinfo__button'>Редактировать</div>
                <div className='LKinfo__linkChangePassword'>Изменить пароль</div>
            </div>
             </div>
        </section>
    );
};


export default LKInfo;