import React, { Component } from 'react'
import Nav from '../components/nav/nav';
import Body from './components/body';
import Header from '../store/components/header';
import Footer from '../components/footer/footer';

export default class about extends Component {
    render() {
        const title = 'NOSOTROS';
        const sub = 'Acerca de';
        return (
            <div className='about'>
                <Nav />
                <Header title={title} sub={sub}/>
                <Body />
                <Footer />
            </div>
        )
    }
}
