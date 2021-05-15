import React, { Component, createElement } from 'react'
import Car from './components/car';
import {Link} from 'react-router-dom';
import HiddenMenu from './components/hiddenMenu';

export default class nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            close: true,
            menu: false,
            items: []
        }
        this.hundleOpen = this.hundleOpen.bind(this);
        this.hundleClose = this.hundleClose.bind(this);
        this.hundleOpenMenu = this.hundleOpenMenu.bind(this);
        this.hundleCloseMenu = this.hundleCloseMenu.bind(this);
    }
    hundleOpen(e) {
        e.preventDefault();
        this.setState({ open: true, close: false })
    }
    hundleClose(e) {
        e.preventDefault();
        this.setState({ open: false, close: true })
    }
    hundleOpenMenu(e){
        e.preventDefault();
        this.setState({menu:true})
    }
    hundleCloseMenu(e){
        e.preventDefault();
        this.setState({menu:false})
    }


    render() {
        return (
            <div className='navBar bg-white'>
                {this.state.open ? <Car close={this.hundleClose} /> : null}
                <div className='lg:h-20'>
                    <nav className='flex justify-center fixed lg:h-20 w-full z-10 bg-white border-b shadow-sm' >
                        <div className='flex items-center lg:h-20 w-full flex-1 px-4 md:px-8 lg:px-8 xl:px-0 lg:max-w-7xl'>
                            <div className='py-4 lg:py-0 lg:hidden'>
                                {!this.state.menu?<svg onClick={this.hundleOpenMenu} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="cursor-pointer bi bi-justify" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                                </svg>:<svg onClick={this.hundleCloseMenu} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="cursor-pointer bi bi-justify" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                                </svg>}
                                {this.state.menu?<HiddenMenu openModal={this.hundleOpen} />:null}
                            </div>
                            <div className='flex mr-auto hidden lg:block'>
                                <Link to='/'><h1 className='cursor-pointer font-bold text-base'>HOME</h1></Link>
                            </div>
                            <div className='hidden lg:flex gap-4 items-center'>
                                <Link to='/store'><h1 className='cursor-pointer font-normal text-base text-gray-500'>Colección</h1></Link>
                                <Link to='/vinchas'><h1 className='cursor-pointer font-normal text-base text-gray-500'>Vinchas</h1></Link>
                                <Link to='/neceseres'><h1 className='cursor-pointer font-normal text-base text-gray-500'>Neceseres</h1></Link>
                                <Link to='/location'><h1 className='cursor-pointer font-normal text-base text-gray-500' >Ubicación</h1></Link>
                                <Link to='/about'><h1 className='cursor-pointer font-normal text-base text-gray-500' >Nosotros</h1></Link>
                                <h1 onClick={this.hundleOpen} className='cursor-pointer font-normal text-base text-gray-500'>Carrito</h1>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
