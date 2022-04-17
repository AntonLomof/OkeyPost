import React from 'react';
import './style.css';
import LKAdress from './Adress/index.jsx';
import ToPay from './ToPay/index.jsx';
import WorkInfo from './WorkInfo/index.jsx';

function infoItemActive(){
    document.querySelectorAll('.info__item').item(0).classList.add('info__item__active')
    document.querySelectorAll('.info__item').item(1).classList.remove('info__item__active')
    document.querySelectorAll('.info__item').item(2).classList.remove('info__item__active')
}
function infoItemActive1(){
    document.querySelectorAll('.info__item').item(0).classList.remove('info__item__active')
    document.querySelectorAll('.info__item').item(1).classList.add('info__item__active')
    document.querySelectorAll('.info__item').item(2).classList.remove('info__item__active')
}
function infoItemActive2(){
    document.querySelectorAll('.info__item').item(0).classList.remove('info__item__active')
    document.querySelectorAll('.info__item').item(1).classList.remove('info__item__active')
    document.querySelectorAll('.info__item').item(2).classList.add('info__item__active')
}
function LK_Adress_WorkInfo__ToPay(props){
    return(
        <section className='LK_Adress_WorkInfo__ToPay'>
            <div className='ToPay__info'>
                <div className='info__item' onClick={infoItemActive}>Виртуальный адрес</div>
                <div className='info__item' onClick={infoItemActive1}>Информация о работе</div>
                <div className='info__item' onClick={infoItemActive2}>Реквизиты для оплаты</div>
            </div>
        </section>
    );
};
export default LK_Adress_WorkInfo__ToPay;
