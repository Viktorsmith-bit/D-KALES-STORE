import React, { Component } from 'react'

export default class temporada extends Component {
    render() {
        return (
            <div className='flex justify-center mt-16 lg:mt-32'>           
                <div className='flex-1 xl:max-w-7xl lg:px-8 xl:px-0'>
                    <div className='max-w-xl mx-auto'>
                        <h1 className='text-4xl lg:text-7xl font-bold text-center'>DISEÑOS</h1>
                        <h1 className='text-xl lg:text-2xl text-center'>DE</h1>
                        <h1 className='text-4xl lg:text-7xl font-bold text-center'>TEMPORADA</h1>
                    </div>
                    <div className='lg:flex lg:gap-6 xl:gap-8 mt-24'>
                        <div className='bg-gray-100 flex-1 lg:max-w-xl rounded-md p-10'>
                            <div className='flex justify-between items-center'>
                                <h1 className='font-bold text-2xl'>DÍAS DE INVIERNO</h1>
                                <code><h1 className='flex gap-1'><span className='flex justify-center items-center bg-yellow-200 rounded-full h-7 w-7 cursor-pointer font-bold'>{'<'} </span> <span className='flex justify-center items-center bg-yellow-200 rounded-full h-7 w-7 cursor-pointer font-bold'>{'>'} </span></h1></code>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div className='flex flex-col'>
                                <div className='flex flex-wrap justify-center lg:justify-between mt-10 lg:mt-0 gap-6 lg:gap-0'>
                                    <div className='season'>
                                        <div className='border border-gray-200 w-72 lg:w-52 h-56'></div>
                                        <h1>Neceser color marrón</h1>
                                        <div className='flex items-center'>
                                            <p className='text-gray-500 font-bold'>s/40</p>
                                            <i className="ml-auto fas fa-shopping-cart cursor-pointer text-lg"></i>
                                        </div>
                                    </div>
                                    <div className='season'>
                                        <div className='border border-gray-200 w-72 lg:w-52 h-56'></div>
                                        <h1>Neceser color marrón</h1>
                                        <div className='flex items-center'>
                                            <p className='text-gray-500 font-bold'>s/40</p>
                                            <i className="ml-auto fas fa-shopping-cart cursor-pointer text-lg"></i>
                                        </div>
                                    </div>
                                    <div className='season lg:hidden xl:block'>
                                        <div className='border border-gray-200 w-72 lg:w-52 h-56'></div>
                                        <h1>Neceser color marrón</h1>
                                        <div className='flex items-center'>
                                            <p className='text-gray-500 font-bold'>s/40</p>
                                            <i className="ml-auto fas fa-shopping-cart cursor-pointer text-lg"></i>
                                        </div>                                      
                                    </div>
                                </div>
                                <div className='flex flex-wrap justify-center lg:justify-between gap-6 lg:gap-0 lg:mt-3'>
                                    <div className='season'>
                                        <div className='border border-gray-200 w-72 lg:w-52 h-56'></div>
                                        <h1>Neceser color marrón</h1>
                                        <div className='flex items-center'>
                                            <p className='text-gray-500 font-bold'>s/40</p>
                                            <i className="ml-auto fas fa-shopping-cart cursor-pointer text-lg"></i>
                                        </div>
                                    </div>
                                    <div className='season'>
                                        <div className='border border-gray-200 w-72 lg:w-52 h-56'></div>
                                        <h1>Neceser color marrón</h1>
                                        <div className='flex items-center'>
                                            <p className='text-gray-500 font-bold'>s/40</p>
                                            <i className="ml-auto fas fa-shopping-cart cursor-pointer text-lg"></i>
                                        </div>
                                    </div>
                                    <div className='season lg:hidden xl:block'>
                                        <div className='border border-gray-200 w-72 lg:w-52 h-56'></div>
                                        <h1>Neceser color marrón</h1>
                                        <div className='flex items-center'>
                                            <p className='text-gray-500 font-bold'>s/40</p>
                                            <i className="ml-auto fas fa-shopping-cart cursor-pointer text-lg"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>            
                </div>
            </div>
        )
    }
}
