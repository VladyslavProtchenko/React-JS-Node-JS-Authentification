import React from 'react';
import { Outlet } from 'react-router-dom';

const Template = () => {
    return (
        <div className='flex flex-col w-screen h-screen items-center bg-zinc-50'>
            <Outlet/>
        </div>
    );
}

export default Template;
