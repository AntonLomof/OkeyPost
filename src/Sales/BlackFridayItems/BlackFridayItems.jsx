import React from 'react';
import './style.css';
import SwitchTab from '../SwitchTab/SwitchTab';

function BlackFridayItems(props){
    return (
        <>
        <section className='black__friday__items'>
            <div className='black__friday__subItems'>
            <div className='black__friday__item'>
                <img src={require('./img/фон.png').default} alt='Abercrombie' />
                <div>
                    <div className='black__friday__item__title'>Abercrombie &     Fitch</div>
                    <div className='black__friday__item__text'>Цены от <span>£7.99 (3365₽)</span> разделе:</div>
                        <div> Мужские вещи:<span className='black__friday__item__text__span'>CLEARANCE</span></div>
                        <div>Женские вещи:<span className='black__friday__item__text__span'>CLEARANCE</span></div>

                        <div className='abercrombie__kids'> Качественные детские вещи на <span className='black__friday__item__text__span'>Abercrombie kids</span> </div>
                    <div className='black__friday__items__link'>Только выкуп с оператором →</div>
                </div>
            </div>
            <div className='black__friday__item'>
                <img src={require('./img/timberland.png').default} alt='Timberland' />
                <div>
                    <div className='black__friday__item__title'>Timberland NEW!</div>
                    <div>Коллаб <span className='black__friday__item__text__span'>Tommy Hilfiger x Timberland!</span></div>
                    <div className='Timberland'>
                        <div>Ботинки от <span>£7.99 (3365₽)</span></div>
                        <div>Зимние шапки <span>£7.99 (3365₽)</span> </div>
                    </div>
                    <div className='black__friday__items__link'>Только выкуп с оператором →</div>
                </div>
            </div>
            </div>
            <div className='black__friday__subItems'>
                <div className='black__friday__item'>
                    <img src={require('./img/Rolo.png').default} alt='Polo Ralph Lauren' />
                    <div>
                        <div className='black__friday__item__title'>Polo Ralph Lauren</div>
                        <div> <span className='black__friday__item__text__span'>Рубашка </span> за <span>£7.99 (3365₽)</span></div>
                        <div> <span className='black__friday__item__text__span'>Худи </span> за <span>£7.99 (3365₽)</span></div>
                        <div> <span className='black__friday__item__text__span'>Свитшот с лого </span> за <span>£7.99 (3365₽)</span></div>
                        <div className='polo__ralph__lauren'>До <span>- 40% </span> в разделе SALE</div>
                        <div className='black__friday__items__link'>Только выкуп с оператором →</div>
                    </div>
                </div>
                <div className='black__friday__item'>
                    <img src={require('./img/Holister.png').default} alt='Holister' />
                    <div>
                        <div className='black__friday__item__title'>Hollister Co.</div>
                        <div>Цены <span>£7.99 (3365₽)</span></div>
                        <div>Мужские вещи:<span className='black__friday__item__text__span'>CLEARANCE</span></div>
                        <div className='holister__text'>Женские вещи:<span className='black__friday__item__text__span'>CLEARANCE</span></div>
                        <div className='black__friday__items__link'>Только выкуп с оператором →</div>
                    </div>
                </div>
            </div>
            <div className='black__friday__subItems'>
                <div className='black__friday__item'>
                    <img src={require('./img/MichaelKros.png').default} alt='Michael Kros' />
                    <div>
                        <div className='black__friday__item__title'>Michael Kors</div>
                        <div><span>Новая коллекция!</span></div>
                        <div><span> Michael Kors x 007 </span></div>
                        <div className='michael__kros__margin'>
                            <div><span>HOLIDAY HEAD START</span></div>
                            <div><span> - 60%</span> на сумки, обувь и одежду</div>
                        </div>
                        <div className='black__friday__items__link'>В магазин →</div>
                    </div>
                </div>
                <div className='black__friday__item'>
                    <img src={require('./img/Saks.png').default} alt='Аутлет Saks OFF 5TH' />
                    <div>
                        <div className='black__friday__item__title'>Saks OFF 5TH</div>
                        <div>
                            <div><span>Black Friday Early Access</span></div>
                            <div>Брендовые шапки, шарфы и перчатки - <span>60% OFF</span></div>
                        </div>
                        <div className='black__friday__item__saks__text'>Shop Pajar, Sorel, UGG, Calvin Klein Jeans, Tommy Hilfiger</div>
                        <div className='black__friday__items__link'>Только выкуп с оператором →</div>
                    </div>
                </div>
            </div>
            <div className='black__friday__subItems'>
                <div className='black__friday__item'>
                    <img src={require('./img/VikaS.png').default} alt='Viktoria Secret' />
                    <div>
                        <div className='black__friday__item__vikaS'>
                            <div className='black__friday__item__title'>Victoria's Secret</div>
                            <div><span>Лосьоны и мисты за £7.99 (3365₽)</span></div>
                            <div><span>7 трусиков за £7.99 (3365₽)</span></div>
                            <div>Халаты за <span>£7.99 (3365₽)</span></div>
                        </div>
                        <div className='black__friday__item__vikaS__text'>
                            <div><span>Потрать £7.99 (3365₽) </span> - получи <span>купон на $25 </span>на следующий заказ</div>
                        </div>
                        <div className='black__friday__items__link'>В магазин →</div>
                    </div>
                </div>
                <div className='black__friday__item'>
                    <img src={require('./img/Levi.png').default} alt='Levi' />
                    <div>
                        <div className='black__friday__item__title'>levi.com</div>
                        <div> <span className='black__friday__item__text__span'>Джинсы </span> от <span>£7.99 (3365₽)</span></div>
                        <div className='black__friday__item__levi'><span>Скидка 30% на заказы от $100 с кодом TREAT30</span></div>
                        <div className='black__friday__items__link'>В магазин →</div>
                    </div>
                </div>
            </div>
            <div className='black__friday__subitems'>
                <div className='black__friday__item'>
                    <img src={require('./img/OGG.png').default} alt='UGG® - вход с VPN' />
                    <div>
                        <div className='black__friday__item__title'>UGG® - вход с VPN</div>
                        <div>
                            <div>Угги за <span>£7.99 (3365₽)</span></div>
                            <div>Ботинки UGG от <span>£7.99 (3365₽)</span>в разделе <span className='black__friday__item__text__span'>SALE</span></div>
                        </div>
                        <div className='black__friday__item__ogg'>
                            <div> <span className='black__friday__item__text__span'>Мужские угги </span> за <span>£7.99 (3365₽)</span></div>
                            <div> <span className='black__friday__item__text__span'>Слипперы </span> за <span>£7.99 (3365₽)</span></div>
                        </div>
                        <div className='black__friday__items__link'>В магазин →</div>
                    </div>
                </div>

                <div className='black__friday__item'>
                    <img src={require('./img/NoBalance.png').default} alt='New Balance' />
                    <div>
                        <div className='black__friday__item__title'>New Balance</div>
                        <div className='black__friday__item__noBalance'>
                            <div className=''><span>Вход с VPN </span></div>
                            <div className=''><span> - 30% </span>на некоторые модели</div>
                            <div className=''><span> Бесплатная </span> доставка <span>$50+</span></div>
                        </div>
                        <div className='black__friday__items__link'>В магазин →</div>
                    </div>
                </div>
            </div>
        </section>
        <SwitchTab/>
        </>
    )
};
export default BlackFridayItems;