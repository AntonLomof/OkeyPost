import React from 'react';
import './style.css';

function ShopItem (props){
    return (
        <section className='ShopItem'>
            <div className='ShopItem__img'><img src={props.img}  alt={props.alt} /></div>
            <div className='ShopItem__title'>{props.title}</div>
        </section>
    )
}
export default ShopItem;