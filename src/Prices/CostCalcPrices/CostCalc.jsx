import React from 'react';
import './style.css';


async function getCurrencies (){
    //Получение курса валюты
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();
    const result = await data;
        //Расчет посыки с учетом способа доставки
    let weight =await document.querySelector('.weight');
        const costForPostOfficeRusLowWeight = (13 + (weight.value * 0.6)).toFixed(2);
        const finalCostPostRus = (27 + (weight.value * 0.6)).toFixed(2);
        const finalCostEms = (40 + (weight.value * 0.6)).toFixed(2);

        //Перевод цены в росс руб
        const costForPostOfficeRusLowWeight1 = costForPostOfficeRusLowWeight * result.Valute.GBP.Value.toFixed();
        const finalCostPostRus1 = finalCostPostRus * result.Valute.GBP.Value.toFixed();
        const finalCostEms1 = finalCostEms * result.Valute.GBP.Value.toFixed();

        //Проверка на отриц значение в поле
        if (weight.value > 0){
            //Вывод цены на экран
            document.querySelector('.finalCostEms').innerText = `£${finalCostEms}(${finalCostEms1.toFixed()} ₽)`;
            document.querySelector('.finalCostPostRus').innerText = `£${finalCostPostRus}(${finalCostPostRus1.toFixed()} ₽)`;
            document.querySelector('.finalCostLowPackage').innerText = `£${costForPostOfficeRusLowWeight}(${costForPostOfficeRusLowWeight1.toFixed()} ₽)`;
        }else{
            alert('Давай не выпендривайся');
        }
        return weight.value = ''
}


function ConstCalc(props){
    return (
        <>
        <section className='const__calc'>
            <div className='const__calc__title'>OkeyPost удобная и быстрая доставка посылок из Великобритании </div>
            <div className='const__calc__text'>Рассчитайте стоимость доставки из Англии к вам домой. Мы получим ваши посылки на складе, при необходимости объединим несколько доставок в одну и отправим их к вам надежно упакованными.</div>
            <section className='const__calc__calc'>
                <section className='const__calc__calc__form'>
                        <div className='const__calc__calc__form__items'>
                            <div className='const__calc__calc__form__item'>
                                <div className='const__calc__calc__form__item__title'>Страна:</div>
                                <div>
                                    <img src={require('./img/GlobeHemisphereWest.png').default} alt='GlobeHemisphereWest' />
                                    <input type="text" placeholder='Россия'/>
                                </div>
                            </div>
                            <div className='const__calc__calc__form__item'>
                                <div className='const__calc__calc__form__item__title'>Город:</div>
                                <div>
                                    <img src={require('./img/Buildings.png').default} alt='Buildings' />
                                    <input type="text" placeholder='Москва'/>
                                </div>
                            </div>
                            <div className='const__calc__calc__form__item'>
                                <div className='const__calc__calc__form__item__title'>Индекс:</div>
                                <div>
                                    <img src={require('./img/Notebook.png').default} alt='Notebook' />
                                    <input type="text" placeholder='Введите индекс'/>
                                </div>
                            </div>
                            <div className='const__calc__calc__form__item'>
                                <div className='const__calc__calc__form__item__title'>Вес посылки:</div>
                                <div>
                                    <img src={require('./img/Barbell.png').default} alt='Barbell' />
                                    <input className='weight' type="text" placeholder='0.5 кг'/>
                                </div>
                            </div>
                            <div className='const__calc__calc__form__item'>
                                <div className='const__calc__calc__form__item__title'>Дополнительные услуги:</div>
                                <div>
                                    <img src={require('./img/FileText.png').default} alt='FileText' />
                                    <input type="text" placeholder='Выберите услугу'/>
                                </div>
                            </div>
                        </div>
                </section>
                <button className='const__calc__calc__button' onClick={getCurrencies}>Рассчитать</button>
            </section>
        </section>
        <section className='delivery__options'>
            <div className='delivery__options__title'>Варианты доставки :</div>
            <section className='delivery__options__items'>
                <div className='delivery__options__items__right'>
                    <img className='delivery__options__img' src={require('./img/rus.png').default} alt='post office'/>
                    <div className='delivery__options__text'>Почта России</div>
                </div>
                <div className='delivery__options__item__right'>
                    <div className='stick'></div>
                    <div className='delivery__options__item'>
                        <div className='delivery__options__text__default'>Сроки :</div>
                        <div className='delivery__options__text'>10-14 дней</div>
                    </div>
                    <div className='stick'></div>
                    <div className='delivery__options__item'>
                        <div className='delivery__options__text__default'>Стоимость доставки :</div>
                        <div className='delivery__options__text'>от <span>£27.00</span></div>
                    </div>
                    <div className='stick'></div>
                    <div className='delivery__options__item'>
                        <div className='delivery__options__text__default'>Итого :</div>
                        <div className='delivery__options__text finalCostPostRus'></div>
                    </div>
                    <div className='stick'></div>
                </div>
            </section>
            <section className='delivery__options__items'>
                <div className='delivery__options__items__right'>
                    <img className='delivery__options__img' src={require('./img/ruspost.png').default} alt='post office'/>
                    <div className='delivery__options__text'>EMS ПОЧТА РОССИЯ</div>
                </div>
                <div className='delivery__options__item__right'>
                    <div className='stick'></div>
                    <div className='delivery__options__item'>
                        <div className='delivery__options__text__default'>Сроки :</div>
                        <div className='delivery__options__text'>9-12 дней</div>
                    </div>
                    <div className='stick'></div>
                    <div className='delivery__options__item'>
                        <div className='delivery__options__text__default'>Стоимость доставки :</div>
                        <div className='delivery__options__text'>от <span>£40.00</span></div>
                    </div>
                    <div className='stick'></div>
                    <div className='delivery__options__item'>
                        <div className='delivery__options__text__default'>Итого :</div>
                        <div className='delivery__options__text finalCostEms'></div>
                    </div>
                    <div className='stick'></div>
                </div>
            </section>
            <section className='delivery__options__items'>
                <div className='delivery__options__items__right'>
                    <img className='delivery__options__img' src={require('./img/ems.png').default} alt='post office'/>
                    <div className='delivery__options__text'>ПОЧТА РОССИИ МЕЛКИЕ ПАКЕТЫ</div>
                </div>
                <div className='delivery__options__item__right'>
                    <div className='stick'></div>
                    <div className='delivery__options__item'>
                        <div className='delivery__options__text__default'>Сроки :</div>
                        <div className='delivery__options__text'>10-14 дней</div>
                    </div>
                    <div className='stick'></div>
                    <div className='delivery__options__item'>
                        <div className='delivery__options__text__default'>Стоимость доставки :</div>
                        <div className='delivery__options__text'>от <span>£13.00</span></div>
                    </div>
                    <div className='stick'></div>
                    <div className='delivery__options__item'>
                        <div className='delivery__options__text__default'>Итого :</div>
                        <div className='delivery__options__text finalCostLowPackage'></div>
                    </div>
                    <div className='stick'></div>
                </div>
            </section>
        </section>
        </>
    )
};
export default ConstCalc;