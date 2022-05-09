import React from 'react';

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
                            <form className=''>
                                <input
                                    type='email'
                                    placeholder='Email'
                                    autoComplete='email'
                                />
                                <input
                                    type='password'
                                    placeholder='Password'
                                    autoComplete='current-password'
                                />
                                <button className='bg-red-600 py-3 my-6 rounded font-bold'>
                                    SIGN UP
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
