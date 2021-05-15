import React, { Component } from 'react'
import Nav from '../components/nav/nav';
import Header from '../store/components/header';
import Footer from '../components/footer/footer';
import Section from './components/section';

export default class index extends Component {
    render() {
        const title = 'UBICACIÓN';
        const sub = 'Contacto';
        return (
            <div className='store'>
                <Nav />
                <Header title={title} sub={sub}/>
                <Section />
                <Footer />
            </div>
        )
    }
}