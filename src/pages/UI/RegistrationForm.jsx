import React from 'react';
import { useState, useEffect } from 'react';
import Button from './Button';
import Input from './Input';
import { NavLink, useNavigate } from 'react-router-dom';


import {useDispatch, useSelector} from 'react-redux'
import { fetchRegistration, reset} from '../../store/userSlice'


const RegistrationForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const user = useSelector(state=> state.user.user);
    console.log(user);
    useEffect(()=>{localStorage.clear()},[dispatch])



    if(user.status === 'success') {
        dispatch(reset())
        navigate('/login');
        console.log('status work');
    }

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [userName,setUserName] = useState('');


    const signIn = async () => {
        
        if(password.length>3) {
            const user = {firstName,lastName,userName,email,password,}
            dispatch(fetchRegistration(user))
        }

    }

    return (
            <form className='flex flex-col px-20 py-10 bg-white rounded-xl shadow-xl' onSubmit={(e)=>e.preventDefault()}>
                <h1 className='flex flex-col items-left uppercase font-bold mb-2'> Sign In </h1>
                    {user.error === 'isExist' && <h2 className='text-green-500 text-sm'>Еhis email is being used</h2>}
                    {user.error === 'wrongMail' && <h2 className='text-red-500 text-sm'>Icorrect mail</h2>}

                    <Input type='text' placeholder='name' value={firstName} onChange={(e)=>  setFirstName(e.target.value)}/>
                    <Input type='text' placeholder='last name' value={lastName} onChange={(e)=>  setLastName(e.target.value)}/>
                    <Input type='text' placeholder='nickname' value={userName} onChange={(e)=>  setUserName(e.target.value)}/>

                    <Input type='email' placeholder='email' value={email} onChange={(e)=>  setEmail(e.target.value)}/>
                    <Input type='password' placeholder='password' value={password} onChange={(e)=>{ setPassword(e.target.value)}}/>
                    <nav className='flex items-center justify-between'> 
                    <Button onClick={signIn} >Sign in</Button>
                    <NavLink to='/login' className='cursor-pointer hover:underline'>Login</NavLink>
                    </nav>
                    
            
            </form>
    );
}

export default RegistrationForm;
