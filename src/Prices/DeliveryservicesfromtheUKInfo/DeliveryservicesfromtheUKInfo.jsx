import React from 'react';
import './style.css';


function DeliveryservicesfromtheUKInfo(props){
    return (
        <section className='delivery__services__from__the__UKInfo'>
            <div className='delivery__services__from__the__UKinfo__item'>
                <img src={require('./img/Illustration.png').default} alt='Ваш личный адрес для покупок' />
                <div className='delivery__services__from__the__UKInfo__title'>Ваш личный адрес для покупок</div>
                <div className='delivery__services__from__the__UKInfo__text'>На нашем современном автоматизированном складе в безналоговом Делавэре</div>
                <div className='delivery__services__from__the__UKInfo__button'>Бесплатно</div>
            </div>
            <div className='delivery__services__from__the__UKinfo__item'>
                <img src={require('./img/Illustration1.png').default} alt='Объединение нескольких посылок в одну' />
                <div className='delivery__services__from__the__UKInfo__title'>Объединение нескольких посылок в одну</div>
                <div className='delivery__services__from__the__UKInfo__text'>Ведь часто отправлять несколько посылок в одной коробке гораздо выгоднее, чем по одной</div>
                <div className='delivery__services__from__the__UKInfo__button'>от £10.00</div>
            </div>
            <div className='delivery__services__from__the__UKinfo__item'>
                <img src={require('./img/Illustration2.png').default} alt='Усиленная упаковка по запросу' />
                <div className='delivery__services__from__the__UKInfo__title'>Усиленная упаковка по запросу</div>
                <div className='delivery__services__from__the__UKInfo__text'>Мы дополнительно упакуем вашу посылку в пленку, коробку с двойными стенками.</div>
                <div className='delivery__services__from__the__UKInfo__button'>от £0.25</div>
            </div>
            <div className='delivery__services__from__the__UKinfo__item'>
                <img className='delivery__services__from__the__UKinfo__item__save' src={require('./img/Illustration3.png').default} alt='Хранение входящих посылок 30 дней' />
                <div className='delivery__services__from__the__UKInfo__title'>Хранение входящих посылок</div>
                <div className='delivery__services__from__the__UKInfo__text'>Чем больше срок хранения посылок на складе – тем больше вы сможете собрать</div>
                <div className='delivery__services__from__the__UKInfo__button'>Бесплатно</div>
            </div>
        </section>
    )
};

export default DeliveryservicesfromtheUKInfo;