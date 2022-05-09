import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <>
            <div className='w-full h-screen'>
                <img
                    className='hidden sm:block absolute w-full h-full object-cover'
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/bc84a758-2569-4c65-b774-cb8a4ef7946f/UA-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
                    alt='/'
                />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
                <div className='fixed w-full px-4 py-24 z-50'>
                    <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl font-bold'>SIGN UP</h1>
                            <form className='w-full flex flex-col py-4'>
                                <input
                                    className='p-3 my-2 bg-gray-700 rounded'
                                    type='email'
                                    placeholder='Email'
                                    autoComplete='email'
                                />
                                <input
                                    className='p-3 my-2 bg-gray-700 rounded'
                                    type='password'
                                    placeholder='Password'
                                    autoComplete='current-password'
                                />
                                <button className='bg-red-600 py-3 my-6 rounded font-bold'>
                                    SIGN UP
                                </button>
                                <div className='flex justify-between items-center text-sm text-gray-600'>
                                    <p>
                                        <input
                                            className='mr-2'
                                            type='checkbox'
                                        />
                                        Remember me
                                    </p>
                                    <p>Need help?</p>
                                </div>
                                <p className='py-8'>
                                    <span className='text-gray-600'>
                                        Already subsribed to Webflix?
                                    </span>{' '}
                                    <Link to='/login'>Sign in</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
