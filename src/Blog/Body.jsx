import './index.css';
import React from 'react';
import BlogTitle from './BlogTitle/index.jsx';
import BlogItems from './BlogItems/index.jsx';
import SwitchTab from '../Sales/SwitchTab/SwitchTab.jsx';
import Header from '../Home/Body/Header/Header';
import Footer from '../Home/Body/Footer/Footer';
import OkeyPost from '../Home/Body/SectionOkeyPost/OkeyPost';

function Blog (props){
    return (
        <section className='Blog'>
            <Header/>
            <BlogTitle/>
            <BlogItems/>
            <SwitchTab/>
            <Footer/>
            <OkeyPost />
        </section>
    );
};

export default Blog;