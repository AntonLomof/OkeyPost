import React from 'react';
import './style.css';

function FourWays (props){
    return(
        <section className='four__ways'>
            <div className='four__ways__title'>4 простых шага для ваших покупок в Великобритании </div>
            <div className='four__ways__nob'>
            <div className='four__ways__items'>
                <div>
                    <img className='four__ways__img' src={require('./img/Слой 2.png').default} alt='FourWays' />
                    <div className='four__ways__items__title'>вы ВЫБИРАЕТЕ ТОВАР</div>
                    <div className='four__ways__items__text'>в английском магазине, оплачиваете и указываете <span className='four__ways__items__text__span'>адрес склада</span> OkeyPost</div>
                </div>
            </div>
            <div className='four__ways__items'>
                <div>
                    <img className='four__ways__img' src={require('./img/Слой 21.png').default} alt='FourWays' />
                    <div className='four__ways__items__title'>ПОКУПКИ ПРИХОДЯТ НА СКЛАД</div>
                    <div className='four__ways__items__text'>и появляются в вашем личном кабинете на нашем сайте</div>
                </div>
            </div>
            <div className='four__ways__items'>
                <div>
                    <img className='four__ways__img' src={require('./img/Слой 23.png').default} alt='FourWays' />
                    <div className='four__ways__items__title'>ОТПРАВЛЯЕМ ИХ К ВАМ ДОМОЙ</div>
                    <div className='four__ways__items__text'>в надежной упаковке, по выгодной цене и очень быстро</div>
                </div>
            </div>
            <div className='four__ways__items'>
                <div>
                    <img className='four__ways__img' src={require('./img/Слой 24.png').default} alt='FourWays' />
                    <div className='four__ways__items__title'>ЗАБИРАЕТЕ свою ПОСЫЛКУ</div>
                    <div className='four__ways__items__text'>в пункте выдачи, на почте или с курьером</div>
                </div>
            </div>
            </div>
            <div className='four__ways__info'>
            Не хотите разбираться самостоятельно, наши мастера шопинга с радостью купят все товары за вас.
            </div>
            <div className='four__ways__button'>Быстрая покупка</div>
        </section>
    )
};

export default FourWays;