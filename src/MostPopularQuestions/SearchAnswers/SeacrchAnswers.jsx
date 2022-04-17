import React from 'react';
import './style.css';

function SeacrchAnswers(props){
    return (
        <section className='searchAnswers'>
            <div className='searchAnswers__title'>Поиск в вопросах и ответах:</div>
            <div className='searchAnswers_inputField'>
                <input className='searchAnswers__input' type="text" placeholder='Введите свой вопрос...' />
                <img src={require('./img/MagnifyingGlass.png').default} alt='Search' />
            </div>
            <div className='searchAnswers__borderBottom'></div>
        </section>
    )
}
export default SeacrchAnswers;