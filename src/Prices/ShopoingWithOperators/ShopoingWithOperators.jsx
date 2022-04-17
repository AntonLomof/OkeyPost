import React from 'react';
import './style.css';

function ShopoingWithOperators(props){
    return (
        <section className='ShopoingWithOperators'>
            <div className='ShopoingWithOperatorsTitle'>Покупки с операторами Okeypost.com</div>
            <div className='where__house__services__item'>
                <div className='where__house__services__itemInfo'>
                    <div>
                        <div className='where__house__services__itemInfo__textBold '>Быстрое оформление покупок в интернет-магазинах </div>
                             <div className='where__house__services__itemInfo__textLight where__house__services__item_ShopoingWithOperators'>Вы присылаете ссылки, а оформлением заказов занимаются операторы Почтой.ком. Они сделают покупки за вас, проконтролируют доставку на склад и сообщат, когда всё будет готово.</div>
                            </div>
                        <div className='where__house__services__itemInfo__right_single'>
                                <p className='where__house__services__itemSeparator'></p>
                                <div className='where__house__services__itemInfo__textBold where__house__services__itemInfo__textBold_ShopoingWithOperators'>5% от стоимости товаров минимум £7 для каждого магазина. Но не менее £7 для каждого лота eBay</div>
                        </div>
                    </div>
                </div>
                <div className='where__house__services__item'>
                <div className='where__house__services__itemInfo'>
                    <div>
                        <div className='where__house__services__itemInfo__textBold '>Фото товара по услуге "Покупка с операторами" </div>
                             <div className='where__house__services__itemInfo__textLight '>Три фото выбранного вами товара, приобретенного по услуге "Полное сопровождение"</div>
                            </div>
                        <div className='where__house__services__itemInfo__right_single'>
                                <p className='where__house__services__itemSeparator'></p>
                                <div className='where__house__services__itemInfo__textBold '>£2</div>
                        </div>
                    </div>
                </div>
        </section>
    )
}
export default ShopoingWithOperators;