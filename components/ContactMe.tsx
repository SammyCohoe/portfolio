'use client';
import React from 'react'
import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/16/solid'
import { useForm, SubmitHandler } from 'react-hook-form';


type Props = {}
type Inputs = {
    name: string;
    email:string;
    subject:string;
    message:string;
}

function ContactMe({}: Props) {
    const {
        register,
        handleSubmit,      
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {window.location.href = `mailto:scohoe@gmail.com?subject
    =${data.subject}&body=${data.message}`;
    };

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl 
    px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center text-[#ccd6f6]'>
                Lets get in touch!
            </h4>

            <div className='space-y-5'>
                <div className='flex items-center justify-center space-x-5'>
                    <MapPinIcon className='text-[#64ffda] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl text-[#8892b0]'>London, ON</p>
                </div>
                <div className='flex items-center justify-center space-x-5'>
                    <EnvelopeIcon className='text-[#64ffda] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl text-[#8892b0]'>scohoe@uwo.ca</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4 w-fit mx-auto'>
                <div className='flex flex-col space-y-2'>
                    <div className='flex space-x-2'>
                    
                    <input
                        {...register('email')}
                        placeholder='Email'
                        className='contactInput'
                        style={{ padding: '15px', fontSize: '18px', color: '#8892b0' }}
                        type='email'
                    />

                    <input
                    {...register('subject')}
                    placeholder='Subject'
                    className='contactInput'
                    style={{ padding: '15px', fontSize: '18px', color: '#8892b0' }}
                    type='text'
                    />
                    </div>

                    <textarea
                    {...register('message')}
                    placeholder='Message'
                    className='contactInput'
                    style={{ padding: '15px', fontSize: '18px', color: '#8892b0' }}
                    />

                    <button type='submit' className='bg-[#64ffda]/80 py-5 px-10 rounded-md text-white font-bold text-lg'>
                    Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ContactMe