import React from 'react';
import './style.css';

function BuyInfo (props){
    return (
        <section className='buy__info'>
                <div className='buy__info__title'>Покупать в Великобритании очень просто</div>
                <div className='buy__info__text'>Английские магазины не доставляют в Россию, но это не проблема. С OkeyPost можно покупать по лучшим ценам и экономить на доставке. Мы получим ваши посылки, надежно упакуем и отправим их к вам домой.</div>
                <div className='buy__info__items'>
                    <div>
                        <img src={require('./img/Illustrationman.png').default} alt='Получаем адрес для покупок в магазинах Великобритании' />
                    </div>
                    <div>
                        <div className='buy__info__item__titles'>
                            <div className='buy__info__num'>01</div>
                            <div className='buy__info__item__title'>Получаем адрес для покупок в магазинах Великобритании </div>
                        </div>
                        <div className='buy__info__items__text'>Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при оформлении заказов в интернет-магазинах.
                        </div>
                    </div>
                </div>
                <div className='buy__info__items'>
                    <div>
                        <img src={require('./img/illustrationgirl.png').default} alt='Идём за покупками в онлайн-магазины' />
                    </div>
                    <div>
                        <div className='buy__info__item__titles'>
                            <div className='buy__info__num'>02</div>
                            <div className='buy__info__item__title'>Идём за покупками в онлайн - магазины</div>
                        </div>
                        <div className='buy__info__items__text'>Выбираем нужные товары в магазинах Англии. Расплачиваемся, как обычно, в качестве адреса доставки указываем координаты одного из складов Okeypost. Оформить покупки можно самостоятельно или с нашей помощью. Вот список того, <span>что покупать нельзя.</span>
                        </div>
                    </div>
                </div>
                <div className='buy__info__items'>
                    <div>
                        <img src={require('./img/Illustration3.png').default} alt='Следим за перемещением посылки до склада' />
                    </div>
                    <div>
                        <div className='buy__info__item__titles'>
                            <div className='buy__info__num'>03</div>
                            <div className='buy__info__item__title'>Следим за перемещением посылки до склада </div>
                        </div>
                        <div className='buy__info__items__text'>После оформление заказа магазин пришлет трек-номер посылки на ваш e-mail и отправит вещи на наш склад. Через 5-7 дней покупки придут к нам, мы поместим их в специальное хранилище, закрепленное за вашим аккаунтом.
                        </div>
                    </div>
                </div>
                <div className='buy__info__items'>
                    <div>
                        <img src={require('./img/image4.png').default} alt='Оплачиваем доставку и покупки отправляются домой' />
                    </div>
                    <div>
                        <div className='buy__info__item__titles'>
                            <div className='buy__info__num'>04</div>
                            <div className='buy__info__item__title'>Оплачиваем доставку и покупки отправляются домой </div>
                        </div>
                        <div className='buy__info__items__text'>Мы сообщим, когда ваши покупки поступят на склад. Вы сможете заказать что-то еще в других магазинах и отправить все одной посылкой (так выгоднее). До 30 дней покупки будут храниться бесплатно.
                        <div className='buy__info__items__text'>Когда все товары поступили на склад, выбирайте способ доставки, мы надежно все упакуем и отправим вам, сообщив трек-номер.</div>
                        </div>
                    </div>
                </div>
                <div className='buy__info__items'>
                    <div>
                        <img src={require('./img/Illustration4.png').default} alt='Получаем посылку и спешим сделать новый заказ' />
                    </div>
                    <div>
                        <div className='buy__info__item__titles'>
                            <div className='buy__info__num'>05</div>
                            <div className='buy__info__item__title'>Получаем посылку и спешим сделать новый заказ </div>
                        </div>
                        <div className='buy__info__items__text'>Примерно через 2 недели посылка приедет к вам домой, в пункт выдачи заказов или на почту. Получаем покупки и радуемся :)
                        </div>
                    </div>
                </div>
               <div className='buy__info__button__getUkAdress'>
                    Получить адрес в UK
                </div>
        </section>
    )
};
export default BuyInfo;