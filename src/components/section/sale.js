import React, { Component } from 'react';
import View from '../modal/shopping';

export default class sale extends Component {
    constructor(props){
        super(props);
        this.state={
            open:false,
            openView: false
        }

        this.hundleMouseOver = this.hundleMouseOver.bind(this);
        this.hundleMouseOut = this.hundleMouseOut.bind(this);
        this.hundleClick = this.hundleClick.bind(this);
        this.hundleClose = this.hundleClose.bind(this);
    }

    hundleMouseOver(){
        this.setState({open:true})
    }

    hundleMouseOut(){
        this.setState({open:false})
    }
    hundleClick(e){
        e.preventDefault();
        this.setState({openView:true})
    }
    hundleClose(e){
        e.preventDefault();
        this.setState({openView:false})
    }

    render() {
        return (
            <div className='flex justify-center py-20 bg-gray-100 mt-32'  >
                {this.state.openView?<View close={this.hundleClose} />:null}
                <div className='flex-1 max-w-7xl'>
                    <h1 className='font-bold text-5xl text-center'>RECIÉN LLEGADOS</h1>
                    <code className='lg:block xl:hidden cursor-pointer mt-16'><h1 className='text-center text-red-400 font-bold text-2xl'><span>{'<'}</span> <span>{'>'}</span></h1></code>
                    <div className='md:flex lg:flex flex-wrap justify-center items-center lg:justify-center xl:justify-between mt-5 md:gap-6 lg:gap-6 xl:gap-0'>
                        <code className='md:hidden lg:hidden xl:block cursor-pointer'><h1 className='text-center text-red-400 font-bold text-2xl'>{'<'}</h1></code>
                        <div className='products'>
                            <div onClick={this.hundleClick} className='mx-auto lg:mx-0 flex items-center p-6 h-80 w-72 bg-white' onMouseOver={this.hundleMouseOver} onMouseOut={this.hundleMouseOut}>
                                <div className='flex items-center w-full'>
                                    {this.state.open?<div className='flex-1 flex items-center justify-center h-10 cursor-pointer bg-gray-800'>
                                        <h1 className='font-bold text-base text-white'>Ver</h1>
                                    </div>:null}
                                </div>
                            </div>
                            <h1 className='mt-5 text-center text-lg'>Vincha</h1>
                            <h1 className='text-center text-red-400 font-bold font-mono text-lg'>s/15</h1>
                        </div>
                        <div className='products'>
                            <div className='mx-auto lg:mx-0 flex items-center p-6 h-80 w-72 bg-white'>
                                <div className='flex items-center gap-2 w-full'>
                                    <div onClick={this.hundleClick} className='flex-1 flex items-center justify-center h-10 cursor-pointer bg-gray-800'>
                                        <h1 className='font-bold text-base text-white'>Ver</h1>
                                    </div>
                                </div>
                            </div>
                            <h1 className='mt-5 text-center text-lg'>Neceser</h1>
                            <h1 className='text-center text-red-400 font-bold font-mono text-lg'>s/40</h1>
                        </div>
                        <div className='products'>
                            <div className='mx-auto lg:mx-0 flex items-center p-6 h-80 w-72 bg-white'>
                                <div className='flex items-center gap-2 w-full'>
                                    <div onClick={this.hundleClick} className='flex-1 flex items-center justify-center h-10 cursor-pointer bg-gray-800'>
                                        <h1 className='font-bold text-base text-white'>Ver</h1>
                                    </div>
                                </div>
                            </div>
                            <h1 className='mt-5 text-center text-lg'>Vincha</h1>
                            <h1 className='text-center text-red-400 font-bold font-mono text-lg'>s/15</h1>
                        </div>
                        <div className='products'>
                            <div className='mx-auto lg:mx-0 flex items-center p-6 h-80 w-72 bg-white'>
                                <div className='flex items-center gap-2 w-full'>
                                    <div onClick={this.hundleClick} className='flex-1 flex items-center justify-center h-10 cursor-pointer bg-gray-800'>
                                        <h1 className='font-bold text-base text-white'>Ver</h1>
                                    </div>
                                </div>
                            </div>
                            <h1 className='mt-5 text-center text-lg'>Neceser</h1>
                            <h1 className='text-center text-red-400 font-bold font-mono text-lg'>s/35</h1>
                        </div>
                        <code className='md:hidden lg:hidden xl:block cursor-pointer'><h1 className='text-center text-red-400 font-bold text-2xl'>{'>'}</h1></code>
                    </div>
                </div>
            </div>
        )
    }
}
