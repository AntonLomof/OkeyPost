import React from 'react';
import './style.css';

// function openClose (){
//         document.querySelector('.panel').classList.toggle('panelVisible');
// }
// let a = document.querySelectorAll('.SectionQuestionsAndAnswers__item');
// console.log(a)
// function openClose (){
//     let acc = document.getElementsByClassName('SectionQuestionsAndAnswers__item__button');
//     for (let i = 0 ;i< acc.length; i++){
//     acc[i].onclick = function (){
//         this.nextElementSibling.classList.toggle('panelVisible')
//         console.log(1)
//     }
// }}
// openClose ()


function SectionQuestionsAndAnswers(props){
    return (
        <section className='SectionQuestionsAndAnswers'>
            <div className='SectionQuestionsAndAnswers__title' >{props.title}</div>
            <div className='SectionQuestionsAndAnswers__item' >
                <div className='SectionQuestionsAndAnswers__item__text'>{props.itemText}</div>
                <div className='SectionQuestionsAndAnswers__item__button'>
                    <img className='SectionQuestionsAndAnswers__item__button__img' src={require('./img/Vector.png').default} alt='Vector' />
                </div>
            <div className='panel'>
                <div className='panel__text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nisi animi quasi veritatis fugiat omnis repellat ipsam explicabo eligendi temporibus, dolorem eveniet alias nulla architecto deleniti harum voluptatum amet hic, fuga eum ducimus provident. Similique voluptatibus, ut ipsa quibusdam omnis nostrum voluptatum ad a dignissimos aut assumenda provident quos itaque quaerat rerum. Consectetur, quibusdam temporibus animi quasi, iste dolorum voluptas, atque laboriosam sed veritatis voluptatum? Magni ducimus autem dolores quo voluptatibus. Excepturi iure quasi, a explicabo dolore nulla voluptates quibusdam laborum quod vero consectetur delectus dolores accusamus fugit sit ipsum facere. Iste assumenda exercitationem facilis voluptas molestiae dolorem, consequatur molestias. Natus in inventore quisquam dolorem iure, id neque, ab numquam alias quia ullam consectetur. Dolores a quos quia voluptate asperiores, autem, accusantium doloremque dolor nisi provident cumque qui officiis, fugiat itaque illo ducimus numquam quisquam delectus. Quidem nisi, ipsa, praesentium, dolor architecto minima blanditiis corrupti soluta in quas veritatis esse? Nostrum, reiciendis nesciunt ut similique dicta, quibusdam in a ipsa error ad, sed neque illum ratione optio. Veniam maiores aperiam dolor obcaecati assumenda nihil doloribus incidunt accusamus ducimus, dolorem quod cupiditate nemo! Laudantium dolorem a pariatur magni dicta corporis! Deleniti excepturi animi et? Voluptatem iste quae ad sed, aut corporis provident optio ratione exercitationem debitis, accusantium error ut sunt quod harum nihil aliquid, fuga et possimus architecto modi? Optio cum dolorem ab cupiditate provident architecto aut harum nulla eos hic quo quaerat vero mollitia enim nisi blanditiis ipsam, accusantium, officiis dignissimos eius perspiciatis, voluptate perferendis inventore et? Autem doloremque numquam, et praesentium quo assumenda impedit dolores cumque non ea, facilis, similique nemo quasi laudantium unde sed aperiam voluptate. Debitis tempora illo nulla! Officiis provident corporis vel eos explicabo quo obcaecati repellendus harum illum magnam, ab molestiae, vero animi commodi doloremque aliquam sed natus temporibus quas. Sit ad rem excepturi debitis.
                </div>
            </div>
            </div>
        </section>
    )
}
export default SectionQuestionsAndAnswers;