import React from 'react';
import './style.css';

function QuestionLeftLink (props){
    return (
        <section className='question__left__link'>
            <div className='question__left__link__title'>Остались вопросы? Спросите нас в соцсетях!</div>
            <div>
                <img src={require('./img/viber.png').default} alt='viber' />
                <img src={require('./img/whatsapp.png').default} alt='whatsapp' />
                <img src={require('./img/chat.png').default} alt='chat' />
            </div>
        </section>
    )
};
export default QuestionLeftLink;