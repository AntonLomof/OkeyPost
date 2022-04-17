import React from 'react';
import './style.css';

function BlogItem (props){
    return(
        <section className='BlogItem'>
            <div><img src={props.img}  alt={props.alt} /></div>
            <div className='BlogItem__title'>{props.title}</div>
            <div className='BlogItem__info'>
                <div className='BlogItem__info__publicationDate'>{props.date}</div>
                <div className='BlogItem__info__timeForReading'>
                    <img src={require('./img/Clock.png').default} alt='Clock'/>
                     <div>Читать: 8 минут</div>
                </div>
            </div>
        </section>
    )
}
export default BlogItem;