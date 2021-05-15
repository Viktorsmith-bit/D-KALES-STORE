import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class hiddenMenu extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className='gap-4 items-center mt-3'>
                <Link to='/'><h1 className='cursor-pointer font-bold text-base'>HOME</h1></Link>
                <Link to='/store'><h1 className='cursor-pointer font-normal text-base text-gray-500'>Colección</h1></Link>
                <h1 className='cursor-pointer font-normal text-base text-gray-500'>Vinchas</h1>
                <Link to='/neceseres'><h1 className='cursor-pointer font-normal text-base text-gray-500'>Neceseres</h1></Link>
                <Link to='/location'><h1 className='cursor-pointer font-normal text-base text-gray-500' >Ubicación</h1></Link>
                <Link to='/about'><h1 className='cursor-pointer font-normal text-base text-gray-500' >Nosotros</h1></Link>
                <h1 onClick={this.props.openModal} className='cursor-pointer font-normal text-base text-gray-500'>Carrito</h1>
            </div>
        )
    }
}
