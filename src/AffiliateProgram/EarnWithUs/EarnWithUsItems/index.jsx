import React from 'react';
import './style.css';

function EarnWithUsItems (props){
    return (
        <section className='EarnWithUsItems'>
            <div><img src={props.img}  alt={props.alt} /></div>
            <div className='EarnWithUsItems__title'>{props.title}</div>
            <div className='EarnWithUsItems__text'>{props.text}</div>
        </section>
    )
}
export default EarnWithUsItems;