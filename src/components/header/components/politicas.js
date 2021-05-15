import React, { Component } from 'react';

export default class politicas extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className='flex items-center justify-center h-screen w-full absolute top-0 z-40'>
                <div className='fixed h-96 w-full md:w-6/12 lg:w-6/12 bg-yellow-100 p-10 shadow-lg'>
                    <svg onClick={this.props.close} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="gray" className="cursor-pointer bi bi-x-square-fill" viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                    </svg>
                   
                    <h1 className='text-base mt-10 text-gray-500' id='insert'></h1>
                </div>
            </div>
        )
    }
}
