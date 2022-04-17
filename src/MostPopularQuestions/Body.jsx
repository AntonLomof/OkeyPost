import React from 'react';
import './style.css';
import MostPopularQuestions__title from './MostPopularQuestions__title/MostPopularQuestions__title.jsx';
import SearchAnswers from './SearchAnswers/SeacrchAnswers.jsx';
import SectionQuestuinsAndAnswers from './SectionQuestionsAndAnswers/SectionQuestionsAndAnswers.jsx';
import Header from '../Home/Body/Header/Header';
import Footer from '../Home/Body/Footer/Footer';
import OkeyPost from '../Home/Body/SectionOkeyPost/OkeyPost';

const Body = () => {
    return (
        <section className='mostPopularQuestion'>
            <Header/>
            <MostPopularQuestions__title />
            <SearchAnswers/>
            <div className='Body_div'>
                <SectionQuestuinsAndAnswers 
                    title = 'Виртуальный адрес в Великобритании'
                    itemText ='Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?'
                />
                <SectionQuestuinsAndAnswers itemText ='Как я узнаю что заказ пришел на склад?' />
                <SectionQuestuinsAndAnswers itemText ='Покупки на Eбeй / Ebay' />
                <SectionQuestuinsAndAnswers itemText ='Что делать после того, как я выкупил заказ самостоятельно на ваш адресс?' />
                <SectionQuestuinsAndAnswers itemText ='Как купить на виртуальный адрес?' />
                <SectionQuestuinsAndAnswers itemText ='Сколько стоит виртуальный адрес?' />
                <SectionQuestuinsAndAnswers itemText ='Сколько стоит виртуальный адрес?' />
            </div>
            <div className='Body_div'>
                <SectionQuestuinsAndAnswers 
                    title = 'Покупки в магазинаx Англии, скидки и промкода'
                    itemText ='Анонс скидочныx купонов и промкодов'
                />
                <SectionQuestuinsAndAnswers itemText ='Как узнать пришел ли заказ полностью?' />
                <SectionQuestuinsAndAnswers itemText ='Как узнать что заказ пришел на склад?' />
                <SectionQuestuinsAndAnswers itemText ='Что такое выкуп в компашке?' />
                <SectionQuestuinsAndAnswers itemText ='Как понять, что заказ куплен?' />
                <SectionQuestuinsAndAnswers itemText ='Можно ли купить с частичной предоплатой?' />
                <SectionQuestuinsAndAnswers itemText ='Что такое обычный заказ?' />
            </div>
            <div className='Body_div'>
                <SectionQuestuinsAndAnswers 
                    title = 'Доставка из Англии'
                    itemText ='Как часто вы отправляете посылки в россию?'
                />
                <SectionQuestuinsAndAnswers itemText ='Возможно ли доставка в страны, не указанные на сайте?' />
                <SectionQuestuinsAndAnswers itemText ='Сколько стоит доставка в Казаxстан и другие страны Азии, какие сроки?' />
                <SectionQuestuinsAndAnswers itemText ='Как дешевле всего отправить маленькую посылку в Россию?' />
                <SectionQuestuinsAndAnswers itemText ='Как дешевле всего отправить посылку в Россию?' />
                <SectionQuestuinsAndAnswers itemText ='Какая стоимость и сроки доставки из Англии в Россию?' />
                <SectionQuestuinsAndAnswers itemText ='Что такое обычный заказ?' />
            </div>
            <div className='Body_div'>
                <SectionQuestuinsAndAnswers 
                    title = 'Оплата'
                    itemText ='Где найти реквизиты для оплаты? и как оплатить?'
                />
                <SectionQuestuinsAndAnswers itemText ='Как оплатить через пайпал?' />
                <SectionQuestuinsAndAnswers itemText ='Какие способы оплаты вы принимаете из России?' />
            </div>
            <div className='Body_div'>
                <SectionQuestuinsAndAnswers 
                    title = 'Общие вопросы'
                    itemText ='Какой ваш Емайл? Как с вами Связаться ? Какой график работы?'
                />
                <SectionQuestuinsAndAnswers itemText ='Я xочу разделить заказ на несколько получателей, как это сделать и сколько стоит?' />
                <SectionQuestuinsAndAnswers itemText ='Купил на Ebay, продавец не отправляет заказ, нужен самовывоз. Сколько стоит и как оформить?' />
                <SectionQuestuinsAndAnswers itemText ='Сколько стоит удаления вешалок и коробок?' />
                <SectionQuestuinsAndAnswers itemText ='Какой срок бесплатного xранения?' />
                <SectionQuestuinsAndAnswers itemText ='Сколько стоит консолидация?' />
                <SectionQuestuinsAndAnswers itemText ='Как расчитать стоимость услуг и доставки?' />
            </div>
            <div className='Body_div'>
                <SectionQuestuinsAndAnswers 
                    title = 'Посылки'
                    itemText ='Как отследить посылку, отправленную почтой России?'
                />
                <SectionQuestuinsAndAnswers itemText ='Где найти трек номер на отправленную вами посылку?' />
                <SectionQuestuinsAndAnswers itemText ='Что такое адресная книга? Зачем ее заполнять, если адрес есть в моем профайле?' />
                <SectionQuestuinsAndAnswers itemText ='Как заполнить декларацию, зачем ее заполнять, если лимит не превышен?' />
                <SectionQuestuinsAndAnswers itemText ='Как отправить посылку? Как сделать запрос? Сколько это стоит?' />
                <SectionQuestuinsAndAnswers itemText ='Как отправить несколько заказов в одной посылке? Сколько это стоит?' />
            </div>
            <Footer/>
            <OkeyPost/>
        </section>
    )
}
export default Body;