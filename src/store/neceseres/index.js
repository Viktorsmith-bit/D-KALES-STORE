import React, { Component } from 'react'
import Nav from '../../components/nav/nav';
import Header from '../components/header';
import Section from './components/section';
import Footer from '../../components/footer/footer';

export default class index extends Component {
    render() {
        const title = 'NECESERES';
        const sub = 'Ofertas limitadas';
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
