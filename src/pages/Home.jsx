import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './UI/Button';

const Home = () => {
    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(!token) {navigate('./login')}
    },[])

    function logout(){
        navigate('./login')
    }
    return (
        <div className='flex flex-col justify-center items-center max-w-5xl pt-24'>
            <h1 className='text-xl font-black'>Success! Im so happy Thant you made full registration and enter! you are big boy or girl.</h1>
            <h2 className='text-xl '> now you can make at this site all what you want, put this button for example and <Button onClick={logout}>Sign Out</Button> get a fuck up from here!  </h2>
            <p className='w-5/6'>thanks me for all my time about one day, here i used technologies like: Node JS/Express, <br /> mongoBD/mongoose,<br /> jsonwebtoken/bcrypt,<br /> cookie-parser, cors <br />
            ReactJS/toolkit,<br />Redux thunk <br />TailwindCss and another. </p>
        </div>
    );
}

export default Home;
