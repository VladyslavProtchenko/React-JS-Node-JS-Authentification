import React from 'react';

const input = 'border-[.5px] border-black rounded px-4 py-1 outline-none italic text-neutral-600 mb-4' 

const Input = (props) => {
    return (
        <input {...props} className={input}/>
    );
}

export default Input;
