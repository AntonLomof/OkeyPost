import React from 'react';
import './style.css';

function GeneralInformation (props){
        setInterval(function() {
            // Seconds
            var seconds = new Date().getSeconds();
            let c = (seconds < 10 ? '0' : '') + seconds;
            // Minutes
            var minutes = new Date().getMinutes();
            let b = (minutes < 10 ? '0' : '') + minutes;
            // Hours
            var hours = new Date().getHours() -2;
            let a = (hours < 10 ? '0' : '') + hours;
            document.querySelector(".clock").innerHTML = 'Лондон : ' + a + ' : ' +b +' : '+c;
          }, 1000);
    return (
        <section className='GeneralInformation'>
           <div className='GeneralInformation__left'>
                <div className='left__item'>
                    <img src={require('./img/Clock.png').default} alt='Clock' />
                    <div className='clock'></div>
                </div>
                <div className='left__item'>
                    <img src={require('./img/Clock.png').default} alt='Clock' />
                    <div className='item__text'>Пн.-Пт. 09:00-18:00 Сб. 09:00-14:00</div>
                </div>
           </div>
           <div className='GeneralInformation__right'>
                <div className='right__balance'>Ваш баланс: £ 0</div>
                <div className='right__button'>Добавить транзакцию</div>
                <div>
                    <img src={require('./img/Visa.png').default} alt='Visa' />
                    <img src={require('./img/PayPal.png').default} alt='PayPal' />
                </div>
           </div>
       </section>
    );
};


export default GeneralInformation;