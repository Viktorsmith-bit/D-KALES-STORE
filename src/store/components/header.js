import React, { Component } from 'react'

export default class header extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className='bg-color pt-24 pb-10 lg:py-12'>
                <div className='flex justify-center'>
                    <div className='flex-1 xl:max-w-6xl px-4 md:px-8 lg:px-8 xl:px-0'>
                        <h1 className='text-gray-100 text-xl'>{this.props.sub}</h1>
                        <h1 className='text-gray-100 font-bold text-4xl lg:text-7xl mt-2'>{this.props.title}</h1>
                        <div className='flex justify-end items-center mt-5 gap-4'>
                            <h1 className='text-white'>Nuestras redes</h1>
                            <h1 className='text-white text-3xl -mt-2'>|</h1>
                            <div className='flex gap-3'>
                                <a href='http://www.facebook.com' target='blank'>
                                    <span style={{color:'white'}} ><i className="fab fa-facebook-square text-3xl"></i></span>
                                </a>
                                <a href='http://www.instagram.com' target='blank'>
                                    <span style={{color:'white'}}><i class="fab fa-instagram text-3xl"></i></span>
                                </a>
                                <a href='http://www.whatsapp.com' target='blank'>
                                    <span style={{color:'white'}}><i class="fab fa-whatsapp text-3xl"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}