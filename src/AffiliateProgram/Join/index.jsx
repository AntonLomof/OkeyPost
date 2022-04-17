import React from 'react';
import './style.css';

function Join (props){
    return (
        <section className='Join'>
            <section className='virtual__tour'>
                <img className='virtual__tour__img' src={require('./img/Group.png').default} alt='VirtualTour' />
                <div>
                    <div className='virtual__tour__title'>Готовы начать зарабатывать вместе с нами?</div>
                    <div className='virtual__tour__text'>Присоединяйтесь к партнерской программе Okeypost.com уже сегодня!</div>
                    <div className='virtual__tour__button'>Присоедениться</div>
                </div>
            </section>
        </section>
    )
}
export default Join;