import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { fetchLogin,} from '../../store/userSlice';
import Button from './Button';
import Input from './Input';

const LoginForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const user = useSelector(state=> state.user.user);
    
    useEffect(()=>{
        localStorage.clear()
    },[])

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    if(user.status === 'success') {

        const token = user.accessToken
        localStorage.setItem('token', token);
        console.log(localStorage.getItem('token'));

        navigate('/')
    }

    const login = async () => {
        const user = {email,password}
        dispatch(fetchLogin(user))
    }


    return (
        <form className='flex flex-col px-20 py-10 bg-white rounded-xl shadow-xl' onSubmit={(e)=>e.preventDefault()}>
            <h1 className='flex flex-col items-left uppercase font-bold mb-2'> Sign In </h1>
                {user.error === 'notExist' && <h2 className='text-red-500 text-sm'>No account</h2>}
                {user.error === 'wrongPassword' && <h2 className='text-red-500 text-sm'>Wrong password</h2>}

                <Input type='email' placeholder='email' value={email} onChange={(e)=>  setEmail(e.target.value)}/>
                <Input type='password' placeholder='password' value={password} onChange={(e)=>  setPassword(e.target.value)}/>
                <nav className='flex items-center justify-between'> 
                <Button onClick={login} >Log In</Button>
                <NavLink to="/registration" className='hover:underline'>Sign In</NavLink>
                </nav>
        </form>
    );
}

export default LoginForm;
