import React from 'react';
import './style.css';
import BlogItem from './BlogItem/index.jsx';
import image1 from './BlogItem/img/image1.png';
import image2 from './BlogItem/img/image2.png';
import image3 from './BlogItem/img/image3.png';
import image4 from './BlogItem/img/image4.png';
import image5 from './BlogItem/img/image5.png';
import image6 from './BlogItem/img/image6.png';
import image7 from './BlogItem/img/image7.png';
import image8 from './BlogItem/img/image8.png';
import image9 from './BlogItem/img/image9.png';
import image10 from './BlogItem/img/image10.png';
import image11 from './BlogItem/img/image11.png';
import image12 from './BlogItem/img/image12.png';

function BlogItems (props){
    return(
        <section className='BlogItems'>
            <div>
            <BlogItem
                img = {image1}
                title = 'Интернет-магазин Urban Outfitters в UK: обзор'
                date ='22.10.2021'
            />
            <BlogItem
                img = {image2}
                title = 'Overstock. Брендовые товары по доступным ценам'
                date ='22.10.2021'
            />
            <BlogItem
                img = {image3}
                title = 'Skechers с Amazon. Удобная обувь для всей семьи'
                date ='22.10.2021'
            />
            </div>
            <div>
            <BlogItem
                img = {image4}
                title = '16 лучших подарков с Амазона в 2021 году'
                date ='22.10.2021'
            />
            <BlogItem
                img = {image5}
                title = 'Target — семейный супермаркет с ценами от 300 рублей!'
                date ='22.10.2021'
            />
            <BlogItem
                img = {image6}
                title = 'Английский магазин RIPNDIP. Покупаем самовыражение'
                date ='22.10.2021'
            />
            </div>
            <div>
            <BlogItem
                img = {image7}
                title = 'Nautica. Элитные товары из Англии по низким ценам'
                date ='22.10.2021'
            />
            <BlogItem
                img = {image8}
                title = 'Forever 21 - покупаем джинсы за 1 500 рублей'
                date ='22.10.2021'
            />
            <BlogItem
                img = {image9}
                title = 'Как купить кроссовки Balenciaga на 30 000 рублей дешевле?'
                date ='22.10.2021'
            />
            </div>
            <div>
            <BlogItem
                img = {image10}
                title = 'Топ-10 самых дорогих сумок Louis Vuitton'
                date ='22.10.2021'
            />
            <BlogItem
                img = {image11}
                title = 'BH Cosmetics Galaxy. Галактика красоты и ухода '
                date ='22.10.2021'
            />
            <BlogItem
                img = {image12}
                title = '“Вансы”. Крутые кеды, которые не выйдут из моды никогда!'
                date ='22.10.2021'
            />
            </div>
        </section>
    )
}
export default BlogItems;