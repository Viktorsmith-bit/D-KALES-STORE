import React, { Component } from 'react'
import Politicas from './components/politicas';
import {Link} from 'react-router-dom';

export default class header extends Component {
    constructor(props){
        super(props);
        this.state={
            open: false
        }
        this.hundleClick = this.hundleClick.bind(this);
        this.hundleClose = this.hundleClose.bind(this);
    }
    hundleClick(e){
        e.preventDefault();
        this.setState({open:true})
    }
    hundleClose(e){
        e.preventDefault();
        this.setState({open:false})
    }

    render() {
        return (
            <div className='flex justify-center items-center flex-1 py-32 lg:py-36 xl:py-24 z-10'>  
                {this.state.open? <Politicas close={this.hundleClose} />: null}  
                <div className='flex flex-col lg:flex-row md:items-center flex-1 xl:max-w-7xl px-4 lg:px-8 xl:px-0 gap-5'>
                    <div className='lg:max-w-2xl mr-auto'>
                        <h1 className='text-yellow-400 text-xl lg:text-3xl font-bold text-center lg:text-left'>D'KALES STORE</h1>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-100 font-bold mt-3 text-center lg:text-left'>BIENVENIDO, DISFRUTE DE NUESTRA COLECCIÓN DE INVIERNO</h1>
                        <div className='md:flex lg:flex md:justify-center lg:justify-start mt-8 md:gap-3 lg:gap-3 px-4 lg:px-0'>
                            <Link to='/store'><div className='border-2 border-pink-400 bg-pink-400 px-10 py-3 text-gray-200 text-xl cursor-pointer font-semibold rounded-sm'>Ver colección</div></Link>
                            <div onClick={this.hundleClick} className='border-2 border-pink-400 hover:bg-pink-400 px-10 py-3 text-gray-200 text-xl cursor-pointer font-semibold rounded-sm mt-2 md:mt-0 lg:mt-0'>Políticas de uso</div>
                        </div>
                    </div>
                    <div className='flex-1 lg:max-w-md flex justify-center items-center lg:gap-0 xl:gap-20 flex-wrap'>
                        <div className='flex flex-col'>
                            <div className='iphone w-32 h-32'></div>
                            <h1 className='text-gray-300 font-medium text-xl'>Seguro</h1>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='sale w-32 h-32'></div>
                            <h1 className='text-gray-300 font-medium text-xl'>Barato</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
