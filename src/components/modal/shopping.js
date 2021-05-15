import React, { Component } from 'react'

export default class shopping extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className='flex items-center justify-center h-screen w-full absolute top-0 z-40 overFlow-hidden'>
                <div className='fixed md:w-9/12 lg:w-9/12 bg-white p-6 shadow-lg border border-gray-200 overscroll-auto overflow-auto h-screen lg:h-auto'>
                    <svg onClick={this.props.close} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="gray" className="cursor-pointer bi bi-x-square-fill" viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                    </svg>                  
                    <div className='lg:flex mt-5 gap-6'>
                        <div className='flex-1'>
                            <div className='h-80 bg-gray-100'></div>
                            <div className='gap-4 mt-5 hidden lg:flex'>
                                <div className='w-24 h-24 bg-gray-100'></div>
                                <div className='w-24 h-24 bg-gray-100'></div>
                                <div className='w-24 h-24 bg-gray-100'></div>
                            </div>
                        </div>
                        <div className='flex-1 mt-5 lg:mt-0'>
                            <h1 className='text-gray-500'>Neceseres</h1>
                            <h1 className='text-2xl font-bold'>Neceser color marrón</h1>
                            <h1><span className='font-bold text-red-400 text-xl'>s/40</span> <span>(en stock)</span></h1>
                            <h1 className=' mt-10'>Color: <span className='font-bold'>Marrón</span></h1>
                            <div className='flex flex-wrap gap-3 mt-3'>
                                <div className='p-3 border cursor-pointer'>
                                    <h1>Morado</h1>
                                </div>
                                <div className='p-3 border cursor-pointer'>
                                    <h1>Amarillo</h1>
                                </div>
                                <div className='p-3 border cursor-pointer'>
                                    <h1>Blanco</h1>
                                </div>
                                <div className='p-3 border cursor-pointer'>
                                    <h1>Negro</h1>
                                </div>
                            </div>
                            <div className='flex gap-4 mt-5'>
                                <select className='p-3 border cursor-pointer'>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                                <div className='py-3 px-10 bg-gray-900 cursor-pointer'><h1 className='text-white'>Añadir al carrito</h1></div>
                            </div>
                            <div className='flex items-center justify-center gap-4 py-3 w-56 border border-gray-900 cursor-pointer mt-5'>
                                <h1>Lista de deseos</h1>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
                                    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
