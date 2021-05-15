import React, { Component } from 'react'
import Nav from '../components/nav/nav';
import Header from '../components/header/header';
import Information from '../components/section/information';
import Products from '../components/section/products';
import Sale from '../components/section/sale';
import Design from '../components/section/design';
import Contact from '../components/contact/contact';
import Footer from '../components/footer/footer';
import Season from '../components/section/season';

export default class home extends Component {
    render() {
        return (
            <div className='home'>
                <div className='redes' >
                    <Nav />
                    <Header />                   
                </div>
                <Information />
                <Season />   
                <Products />
                <Sale />
                <Design />
                <Contact />
                <Footer />
            </div>
        )
    }
}
