import React from 'react';
import './style.css';

function AdditionalPackaging (props){
    return (
        <section className='AdditionalPackaging'>
            <div className='AdditionalPackaging__title insurance__title'>Многослойная пленка</div>
            <div className='AdditionalPackaging__items'>
            <div className='where__house__services__item'>
                <div className='where__house__services__itemInfo where__house__services__itemInfo_item'>
                    <div className='AdditionalPackaging__item__left'>
                        <div className='where__house__services__itemInfo__textBold '>Консолидация </div>
                        <div className='where__house__services__itemInfo__textLight'>Дополнительная защита покупок</div>
                    </div>
                    <div className='where__house__services__itemInfo__right'>
                        <p className='where__house__services__itemSeparator'></p>
                        <div className='where__house__services__itemInfo__textBold'>£3.99</div>
                    </div>
                </div>
                    <div className='where__house__services__itemInfo where__house__services__itemInfo_item'>
                        <div className='AdditionalPackaging__item__left'>
                            <div className='where__house__services__itemInfo__textBold '>Упаковка в пакет </div>
                            <div className='where__house__services__itemInfo__textLight'>Надежно защищает от влаги</div>
                        </div>
                        <div className='where__house__services__itemInfo__right'>
                            <p className='where__house__services__itemSeparator'></p>
                            <div className='where__house__services__itemInfo__textBold'>£1.99</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='where__house__services__item'>
                <div className='where__house__services__itemInfo where__house__services__itemInfo_item'>
                    <div className='AdditionalPackaging__item__left'>
                        <div className='where__house__services__itemInfo__textBold '>Упаковка в коробку с двойными стенками </div>
                        <div className='where__house__services__itemInfo__textLight'>Надежно защищает от влаги</div>
                    </div>
                    <div className='where__house__services__itemInfo__right'>
                        <p className='where__house__services__itemSeparator'></p>
                        <div className='where__house__services__itemInfo__textBold'>£4.99</div>
                    </div>
                </div>
                    <div className='where__house__services__itemInfo where__house__services__itemInfo_item'>
                        <div className='AdditionalPackaging__item__left'>
                            <div className='where__house__services__itemInfo__textBold '>Наклейка “Обращаться с осторожностью” </div>
                            <div className='where__house__services__itemInfo__textLight'>Дополнительная защита покупок</div>
                        </div>
                        <div className='where__house__services__itemInfo__right'>
                            <p className='where__house__services__itemSeparator'></p>
                            <div className='where__house__services__itemInfo__textBold'>£0.25</div>
                        </div>
                    </div>
                </div>
                <div className='where__house__services__itemInfo where__house__services__itemInfo_item'>
                    <div className='AdditionalPackaging__item__left'>
                        <div className='where__house__services__itemInfo__textBold '>Наклейка “Хрупкий груз”</div>
                        <div className='where__house__services__itemInfo__textLight'>Дополнительная защита покупок</div>
                    </div>
                    <div className='where__house__services__itemInfo__right'>
                        <p className='where__house__services__itemSeparator'></p>
                        <div className='where__house__services__itemInfo__textBold'>£0.25</div>
                    </div>
                </div>
        </section>
    )
}
export default AdditionalPackaging;