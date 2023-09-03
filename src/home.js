import React from 'react';
import './home.css';
import { useForm } from 'react-hook-form';
import { GoogleLogin } from '@react-oauth/google';


export const Home = () => {

    const { register, handleSubmit, formState : { errors, isValid } } = useForm({mode:'all'});
    const submit = (data)=>{
        console.log("Hello from submit",data);
        
    }
    const success = (response)=>{
        console.log(response);
    }
    const errorLogin = (error)=>{
        console.log(error);
    }
  return (
    <div>
        <div className="container">
            <form>
                <div className="formGroup">
                    <label htmlFor='name'>Enter your Name : </label>
                    <input type="text" {...register('name', { required:'Please enter your name', maxLength:15 && 'Please enter a valid name '})} />
                    {errors.name ? <p className='errorMessage'>{errors.name.message}</p> : ''}
                </div>
                <div className="formGroup">
                    <label htmlFor='email'>Enter your email : </label>
                    <input type="email" {...register('email',{required:true})} />
                    {errors.email && <p className='errorMessage'>Please enter your email id</p>}
                </div>
                <div className="formGroup">
                    <label htmlFor='password'>Enter your Password : </label>
                    <input type="password" {...register('password',{required:true})}/>
                    {errors.password && <p className='errorMessage'>Please enter your password</p>}
                </div>
                <div className="submitButton">
                    <button type="button" disabled={!isValid} onClick={handleSubmit(submit)}>Submit</button>
                </div>
                <div className="seperator">------- Or -------</div>
                    <GoogleLogin onSuccess={success} onError={errorLogin} />
            </form>
        </div>

    </div>
  )
}
