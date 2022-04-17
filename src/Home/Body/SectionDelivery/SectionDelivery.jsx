import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

const Click = () =>{
    document.querySelector('.section__header').classList.toggle('stan');
    document.querySelector('.section__delivery').classList.toggle('stan');
    document.querySelector('.categories').classList.toggle('stan');
    document.querySelector('.section__actual__item').classList.toggle('stan');
    document.body.classList.toggle('stanForBody');
 }
function sectionDelivery(props){
    return(
        <section className='section__delivery'>
            <div>
                <div className='section__delivery__title'>
                    Доставка товаров из Великобритании в Россию
                </div>
                <div className='section__delivery__text'>
                Начните экономить до 80% на шопинге. Регистрируйтесь в OkeyPost, чтобы покупать со скидками в UK одежду, обувь, гаджеты известных брендов и безопасно отправлять вещи в Россию.
                </div>
                <Link to='/Autorization'><div className='section__delivery__button' onClick={Click}>
                Получить адрес в UK
                </div></Link>
            </div>
            <div>
            <img src={require('./img/illustration.png').default} alt='illustration' />
            </div>
        </section>
    )
};

export default sectionDelivery;