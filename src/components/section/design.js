import React, { Component } from 'react'

export default class design extends Component {
    render() {
        return (
            <div className='flex justify-center mt-32'>
                <div className='flex-1 xl:max-w-7xl px-4 md:px-8 lg:px-8 xl:px-0'>
                    <div className='max-w-xl'>
                        <h1 className='text-center lg:text-left text-4xl lg:text-7xl font-bold'>DISEÑOS DESTACADOS</h1>
                    </div>
                    <div className='lg:flex items-center lg:gap-10 xl:gap-24 mt-24'>
                        <code><h1 className='text-center lg:text-center text-5xl text-gray-400 hover:text-gray-800 cursor-pointer'>{`<`}</h1></code>
                        <div className='flex-1 bg-gray-100 py-72 hidden lg:block'></div>
                        <div className='w-72 lg:flex-1 mx-auto lg:mx-0'>
                            <h1 className='text-2xl'>Tendencia en Neceseres</h1>
                            <div className='py-48 bg-gray-100 mt-4'></div>
                            <h1 className='text-lg mt-3'>Neceser color marrón</h1>
                            <h1 className='text-lg mt-1 text-red-400 font-mono font-bold'>s/40</h1>
                        </div>
                        <code><h1 className='text-center lg:text-center text-5xl text-gray-400 hover:text-gray-800 cursor-pointer'>{`>`}</h1></code>
                    </div>
                </div>
                
            </div>
        )
    }
}
