import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class section extends Component {
    render() {
        return (
            <div className='flex justify-center pb-32 pt-20'>
                <div className='flex-1 max-w-6xl'>
                    <h1 className='text-4xl lg:text-6xl font-bold text-center'>INVIERNO</h1>
                    <div className='lg:flex lg:gap-8 mt-20 px-8 xl:px-0'>
                        <div className='flex-1 md:max-w-md lg:hidden xl:block xl:max-w-xs border lg:border-0 p-10 lg:p-0 md:mx-auto lg:mx-0'>
                            <h1 className='font-bold'>Dirección:</h1>
                            <h1 className='text-base'>Av. la Molina - La Molina</h1>
                            <h1 className='pb-3 border-b'>A la altura de la Planicie</h1>
                            <h1 className='mt-3 font-bold'>Teléfono:</h1>
                            <h1 className='pb-3 border-b'>(+51) 980394915</h1>

                            <Link to='/location'><div className='py-4 bg-gray-800 text-white mt-8 cursor-pointer text-center'>Ver localización</div></Link>
                        </div>
                        <div className='flex-1 mt-10 lg:mt-0'>
                            <div className='h-96 bg-gray-100'> </div>
                            <h1 className='font-bold text-2xl mt-20 text-center lg:text-left'>NUESTRA COLECCIÓN</h1>
                            <div className='flex flex-col md:flex-row lg:flex-row flex-wrap items-center md:justify-center lg:justify-between mt-10 gap-4'>
                                <div className='section'>
                                    <div className='w-72 xl:w-64 h-64 border'></div>
                                    <div className='mt-4'>
                                        <h1 className='text-gray-500'>Neceser</h1>
                                        <h1 className='font-bold'>Neceser color marrón</h1>
                                        <h1 className='text-red-400 font-bold'>s/40</h1>
                                    </div>
                                </div>
                                <div className='section'>
                                    <div className='w-72 xl:w-64 h-64 border'></div>
                                    <div className='mt-4'>
                                        <h1 className='text-gray-500'>Vincha</h1>
                                        <h1 className='font-bold'>Vincha multicolor para niñas</h1>
                                        <h1 className='text-red-400 font-bold'>s/40</h1>
                                    </div>
                                </div>
                                <div className='section'>
                                    <div className='w-72 xl:w-64 h-64 border'></div>
                                    <div className='mt-4'>
                                        <h1 className='text-gray-500'>Neceser</h1>
                                        <h1 className='font-bold'>Neceser color marrón</h1>
                                        <h1 className='text-red-400 font-bold'>s/40</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row lg:flex-row flex-wrap items-center md:justify-center lg:justify-between mt-10 gap-4'>
                                <div className='section'>
                                    <div className='w-72 xl:w-64 h-64 border'></div>
                                    <div className='mt-4'>
                                        <h1 className='text-gray-500'>Vincha</h1>
                                        <h1 className='font-bold'>Vincha multicolor para niñas</h1>
                                        <h1 className='text-red-400 font-bold'>s/40</h1>
                                    </div>
                                </div>
                                <div className='section'>
                                    <div className='w-72 xl:w-64 h-64 border'></div>
                                    <div className='mt-4'>
                                        <h1 className='text-gray-500'>Vincha</h1>
                                        <h1 className='font-bold'>Vincha multicolor para niñas</h1>
                                        <h1 className='text-red-400 font-bold'>s/40</h1>
                                    </div>
                                </div>
                                <div className='section'>
                                    <div className='w-72 xl:w-64 h-64 border'></div>
                                    <div className='mt-4'>
                                        <h1 className='text-gray-500'>Neceser</h1>
                                        <h1 className='font-bold'>Neceser color marrón</h1>
                                        <h1 className='text-red-400 font-bold'>s/40</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row lg:flex-row flex-wrap items-center md:justify-center lg:justify-between mt-10 gap-4'>
                            <div className='section'>
                                <div className='w-72 xl:w-64 h-64 border'></div>
                                    <div className='mt-4'>
                                        <h1 className='text-gray-500'>Neceser</h1>
                                        <h1 className='font-bold'>Neceser color marrón</h1>
                                        <h1 className='text-red-400 font-bold'>s/40</h1>
                                    </div>
                                </div>
                                <div className='section'>
                                    <div className='w-72 xl:w-64 h-64 border'></div>
                                    <div className='mt-4'>
                                        <h1 className='text-gray-500'>Vincha</h1>
                                        <h1 className='font-bold'>Vincha multicolor para niñas</h1>
                                        <h1 className='text-red-400 font-bold'>s/40</h1>
                                    </div>
                                </div>
                                <div className='section'>
                                    <div className='w-72 xl:w-64 h-64 border'></div>
                                    <div className='mt-4'>
                                        <h1 className='text-gray-500'>Neceser</h1>
                                        <h1 className='font-bold'>Neceser color marrón</h1>
                                        <h1 className='text-red-400 font-bold'>s/40</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center lg:justify-end mt-16 gap-6 px-8 xl:px-0'>
                        <code className='cursor-pointer'><h1 className='text-red-400 font-bold'>{'<'}</h1></code>
                        <h1 className='text-gray-500 cursor-pointer font-bold'>1</h1>
                        <h1 className='text-gray-500 cursor-pointer font-bold'>2</h1>
                        <h1 className='text-gray-500 cursor-pointer font-bold'>3</h1>
                        <h1 className='text-gray-500 cursor-pointer font-bold'>4</h1>
                        <h1 className='text-gray-500 cursor-pointer font-bold'>5</h1>
                        <h1 className='text-gray-500 cursor-pointer font-bold'>6</h1>
                        <code className='cursor-pointer'><h1 className='text-red-400 font-bold'>{'>'}</h1></code>
                    </div>
                </div>    
            </div>
        )
    }
}
