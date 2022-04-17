import React from 'react';
import './style.css';

function Subs(props){
    return (
            <section className='subs'>
                <div className='subs__title'>Подпишитеть и будьте в курсе всех скидок и акций магазинов Великобритании!</div>
                <div className='subs__form'>
                    <div className='subs__form__input'>
                        <img src={require('./img/subs.png').default} alt='Subscribe' />
                        <input type="text" placeholder='Введите ваш email'/>
                    </div>
                </div>
                <div className='virtual__tour__button'>Подписаться</div>
            </section>
    )
};

export default Subs;