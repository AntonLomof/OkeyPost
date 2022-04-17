import React from 'react';
import './style.css';

let a = 1;
let b = 2;

const onSwitchPlus = () =>{
    document.querySelector('.black__friday__items').classList.toggle('svipe');
    a +=1;
    b +=1;
    if (a <= 20){
        document.querySelector('.onswitchA').innerText = `${a}`;
        document.querySelector('.onswitchB').innerText = `${b}`;
    }
    switch(a){
        case 20:
            document.querySelector('.switchTab__dot').classList.add('switchTab__etc');
            document.querySelector('.switchTab__dot').innerText = '22';
            break;
    }
}
const onSwitchMinus = () =>{
    document.querySelector('.black__friday__items').classList.toggle('svipe');
    if (a > 1){
        a -=1;
        b -=1;
        document.querySelector('.onswitchA').innerText = `${a}`;
        document.querySelector('.onswitchB').innerText = `${b}`;
        switch(a){
            case 19:
                document.querySelector('.switchTab__dot').classList.remove('switchTab__etc');
                document.querySelector('.switchTab__dot').innerText = '...';
                break;
        }
    }
}
function SwitchTab (props) {
    return(
        <section className='switchTab'>
            <a className='switchTab__etc' onClick={onSwitchMinus}>←</a>
            <a className='switchTab__etc onswitchA'>{a}</a>
            <a className='switchTab__etc onswitchB'>{b}</a>
            <a className='switchTab__dot'>...</a>
            <a className='switchTab__etc onswitchC'>23</a>
            <a className='switchTab__etc onswitchD'>24</a>
            <a className='switchTab__etc'onClick={onSwitchPlus} >→</a>
        </section>
    )
};

export default SwitchTab;