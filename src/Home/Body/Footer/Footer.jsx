import React from 'react';
import './style.css';


function Footer(props){
    return (
        <footer>
            <div>
                <div className='footer__logo'>
                    <img src={require('./img/Logo.png').default} alt='Logo' />
                    <div className='logo__name'>OkeyPost</div>
                </div>
                <div>
                    <img src={require('./img/Watsapp.png').default} alt='Whatsapp' />
                    <img src={require('./img/Viber.png').default} alt='Viber' />
                    <img src={require('./img/Chat.png').default} alt='Chat' />
                </div>
            </div>
            <div>
                <div>О компании</div>
                <a href='' alt=''>Услуги</a>
                <a href='' alt=''>Цены</a>
                <a href='' alt=''>Отзывы</a>
                <a href='' alt=''>Контакты</a>
                <a href='' alt=''>Вакансии</a>
                <a href='' alt=''>Соглашение о персональных данных</a>
                <a href='' alt=''>Условия пользования</a>
            </div>
            <div>
                <div>Полезное</div>
                <a href='' alt=''>Как работает наш сервис</a>
                <a href='' alt=''>Как покупать с оператором</a>
                <a href='' alt=''>Ответы на частые вопросы  </a>
                <a href='' alt=''>Популярные магазины</a>
                <a href='' alt=''>Черный список магазинов</a>
                <a href='' alt=''>Актуальные продажи</a>
            </div>
            <div>
                <div>Спецпроекты</div>
                <a href='' alt=''>50% на первую доставку</a>
                <a href='' alt=''>Скидки для постоянных клиентов</a>
                <a href='' alt=''>Реферальная программа</a>
                <a href='' alt=''>Mr. Rebates и Rakuten</a>
                <a href='' alt=''>Stop Fraud</a>
            </div>
        </footer>
    )
};

export default Footer;