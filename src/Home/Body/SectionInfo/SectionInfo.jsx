import React from 'react';
import './style.css';

function SectionInfo (props){
    return (
        <section className='section__info'>
            <img className='section__info__img' src={require('./img/SectionInfo.png').default} alt='SectionInfo' />
            <div>
                <div className='section__info__title'>Поручите нашим мастерам шопинга оформить заказы в английских магазинах и освободите время для более важных дел.</div>
                <div className='section__info__text'>Такой способ покупки также подойдёт, если магазин принимает только английские карты.</div>
                <div className='section__info__button'>Попробовать</div>
            </div>
        </section>
    )
};
export default SectionInfo;