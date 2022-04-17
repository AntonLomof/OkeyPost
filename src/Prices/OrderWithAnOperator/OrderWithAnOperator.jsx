import React from 'react';
import './style.css';

function OrderWithAnOperator (props){
    return (
        <section className='OrderWithAnOperator'>
            <img className='OrderWithAnOperator__img' src={require('./img/Illustration.png').default} alt='Illustration'/>
            <div>
                <div className='OrderWithAnOperator__title'>Попробуйте заказывать с оператором прямо сейчас. Пришлите ссылку на товар, его купят и доставят на наш склад в кратчайшие сроки.</div>
                <div className='subs__form OrderWithAnOperator__form'>
                <div className='subs__form__input'>
                    <img className='OrderWithAnOperator__orderImg' src={require('./img/Link.png').default} alt='Subscribe' />
                    <input type="text" placeholder='Введите ваш email'/>
                </div>
                <div className='OrderWithAnOperator__form__strip'></div>
                <div className='OrderWithAnOperator__button__andText'>
                    <div className='virtual__tour__button OrderWithAnOperator_button'>Отправить</div>
                    <div className='OrderWithAnOperator__button__andText___text'>Нажимая на кнопку вы подтверждаете согласие с правилами предоставления услуги и политикой конфиденциальности</div>
                </div>
            </div>

            </div>
        </section>
    )
}
export default OrderWithAnOperator;