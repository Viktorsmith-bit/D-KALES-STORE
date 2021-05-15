import React, { Component } from 'react'

export default class section extends Component {
    render() {
        return (
            <div className='flex justify-center pt-20 pb-32'>
                <div className='flex-1 xl:max-w-6xl px-4 md:px-8 lg:px-8 xl:px-0'>
                    <h1 className='text-4xl font-bold text-center'>RECUERDE</h1>
                    <p className='text-center mt-2'>Solo atendemos pedidos online por motivo de la pandemia</p>
                    <div className='lg:flex mt-20'>
                        <div className='flex-1 max-w-md border p-10 mx-auto lg:mx-0'>
                            <div className='flex-1'>
                                <h1 className='font-bold'>Dirección:</h1>
                                <h1 className='text-base'>Av. la Molina - La Molina</h1>
                                <h1 className='pb-3 border-b'>A la altura de la Planicie</h1>
                                <h1 className='mt-3 font-bold'>Teléfono:</h1>
                                <h1 className='pb-3 border-b'>(+51) 980394915</h1>
                                <h1 className='mt-3 font-bold'>Horario:</h1>
                                <h1 className='mt-2 text-base font-bold'>Lunes a Vienes</h1>
                                <h1 className='text-base'>9:00 am - 8:00pm</h1>
                                <h1 className='mt-2 text-base font-bold'>Sábado</h1>
                                <h1 className='pb-3 border-b'>9:00am - 1:00pm</h1>
                            </div>
                        </div>
                        <div className='flex-1 border md:mt-5 lg:mt-0'>
                            <iframe style={{width:"100%", height:"30rem", border:'0'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62421.14112346811!2d-76.96516615124266!3d-12.090141279361568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c72566a53583%3A0xe2e4280940be4ce6!2sLa%20Molina!5e0!3m2!1ses-419!2spe!4v1620887210236!5m2!1ses-419!2spe" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
