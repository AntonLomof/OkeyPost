import React from 'react';
import './style.css';


function Intro(props){
    return (
        <section className='intro'>
           <img src={require('./img/OkeyPost.gif').default} alt='' />
        </section>
    )
}

export default Intro;