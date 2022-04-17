import React from 'react';
import './style.css';
import acces from './ShopsItem/img/acces.png';
import addidas from './ShopsItem/img/addidas.png';
import amazon from './ShopsItem/img/amazon.png';
import asda from './ShopsItem/img/asda.png';
import asos from './ShopsItem/img/asos.png';
import betterware from './ShopsItem/img/betterware.png';
import boohoo from './ShopsItem/img/boohoo.png';
import brandalley from './ShopsItem/img/brandalley.png';
import clarks from './ShopsItem/img/clarks.png';
import crocs from './ShopsItem/img/crocs.png';
import ebay from './ShopsItem/img/ebay.png';
import fandf from './ShopsItem/img/f&f.png';
import handm from './ShopsItem/img/h&m.png';
import mands from './ShopsItem/img/m&s.png';
import mango from './ShopsItem/img/mango.png';
import mango1 from './ShopsItem/img/mango1.png';
import matalan from './ShopsItem/img/matalan.png';
import minimode from './ShopsItem/img/minimode.png';
import mothercare from './ShopsItem/img/mothercare.png';
import newlook from './ShopsItem/img/newlook.png';
import next from './ShopsItem/img/next.png';
import panachekids from './ShopsItem/img/panachekids.png';
import primark from './ShopsItem/img/primark.png';
import puma from './ShopsItem/img/puma.png';
import showroomprive from './ShopsItem/img/showroomprive.png';
import sportdirect from './ShopsItem/img/sportdirect.png';
import timberland from './ShopsItem/img/timberland.png';
import tucci from './ShopsItem/img/tucci.png';
import zara from './ShopsItem/img/zara.png';
import zulily from './ShopsItem/img/zulily.png';
import ShopItem from './ShopsItem/index.jsx';
import SwitchTab from '../../Sales/SwitchTab/SwitchTab.jsx';


function ShopItems (props){
    return (
        <section className='ShopItems'>
            <div className='ShopItem__item'>
                <ShopItem
                    img = {primark}
                    title = 'Primark (Форма заказа)'
                />
                <ShopItem
                    img = {handm}
                    title = 'H&M'
                />
                <ShopItem
                    img = {mango}
                    title = 'Mangooutlet'
                />
                <ShopItem
                    img = {next}
                    title = 'Next'
                />
                <ShopItem
                    img = {sportdirect}
                    title = 'Sportdirect'
                />
            </div>
            <div className='ShopItem__item'>
                <ShopItem
                    img = {fandf}
                    title = 'Clothing at Tesco'
                />
                <ShopItem
                    img = {asda}
                    title = 'George at ASDA'
                />
                <ShopItem
                    img = {acces}
                    title = 'Accessorize'
                />
                <ShopItem
                    img = {addidas}
                    title = 'Adidas UK'
                />
                <ShopItem
                    img = {amazon}
                    title = 'Amazon'
                />
            </div>
            <div className='ShopItem__item'>
                <ShopItem
                    img = {asos}
                    title = 'ASOS'
                />
                <ShopItem
                    img = {boohoo}
                    title = 'Boohoo'
                />
                <ShopItem
                    img = {crocs}
                    title = 'Crocs'
                />
                <ShopItem
                    img = {ebay}
                    title = 'Ebay'
                />
                <ShopItem
                    img = {matalan}
                    title = 'Matalan'
                />
            </div>
            <div className='ShopItem__item'>
                <ShopItem
                    img = {mothercare}
                    title = 'Mothercare'
                />
                <ShopItem
                    img = {newlook}
                    title = 'New Look'
                />
                <ShopItem
                    img = {puma}
                    title = 'Puma'
                />
                <ShopItem
                    img = {timberland}
                    title = 'Timberland'
                />
                <ShopItem
                    img = {showroomprive}
                    title = 'Showroomprive'
                />
            </div>
            <div className='ShopItem__item'>
                <ShopItem
                    img = {brandalley}
                    title = 'Brand Alley'
                />
                <ShopItem
                    img = {mands}
                    title = 'M&S'
                />
                <ShopItem
                    img = {clarks}
                    title = 'Clarks'
                />
                <ShopItem
                    img = {zara}
                    title = 'Zara'
                />
                <ShopItem
                    img = {mango1}
                    title = 'Mango'
                />
            </div>
            <div className='ShopItem__item'>
                <ShopItem
                    img = {zulily}
                    title = 'Zulily'
                />
                <ShopItem
                    img = {panachekids}
                    title = 'Panachekids'
                />
                <ShopItem
                    img = {betterware}
                    title = 'Betterware'
                />
                <ShopItem
                    img = {tucci}
                    title = 'Tucci Store'
                />
                <ShopItem
                    img = {minimode}
                    title = 'Mini Mode'
                />
            </div>
            <SwitchTab/>
        </section>
    )
}
export default ShopItems;