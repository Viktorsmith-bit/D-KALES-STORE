import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class products extends Component {
    render() {
        return (
            <div className='flex justify-center mt-32'>
                <div className='flex-1 xl:max-w-7xl px-4 md:px-8 lg:px-8 xl:px-0'>
                    <div className='px-4 lg:px-0 lg:max-w-xl'>
                        <div className='bg-green-100 px-5 py-1 w-72 rounded-full mx-auto lg:mx-0'><h1 className='text-center'>Más información en <span className='font-bold'>nosotros</span></h1></div>
                        <h1 className='text-center lg:text-left text-4xl lg:text-7xl font-bold mt-3'>DISEÑOS ORIGINALES</h1>                       
                    </div>
                    <div className='lg:flex lg:gap-4 xl:gap-8 mt-16 px-4 lg:px-0'>
                        <div className='flex justify-center px-4 lg:px-0 lg:flex-1 py-32 lg:py-56 xl:py-64 bg-gray-100 mx-auto lg:mx-0'>
                            <Link to='neceseres'><div className='px-4 lg:px-0 lg:w-80 py-4 lg:py-7 bg-red-400 cursor-pointer'><h1 className='text-2xl lg:text-5xl text-center text-white'>Neceseres</h1></div></Link>
                        </div>
                        <div className='flex justify-center px-4 lg:px-0 lg:flex-1 py-32 lg:py-56 xl:py-64 bg-gray-100 mx-auto lg:mx-0 mt-4 lg:mt-0'>
                            <Link to='vinchas'><div className='px-4 lg:px-0 lg:w-80 py-4 lg:py-7 bg-red-400 cursor-pointer'><h1 className='text-2xl lg:text-5xl text-center text-white'>Vinchas</h1></div></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
