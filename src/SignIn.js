import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useNavigate } from 'react-router-dom';
import img1 from './Images/Amazon-logosignin.webp'
import './SignIn.css'
export const SignIn = () => {
  const navigate=useNavigate()
  const[userdataname,setUserdataname]=useState([]);
  const[userlogname,setuserLogname]=useState('');
const[number,setNumber]=useState('')
    const numberHandler=(e)=>{
        setNumber(e.target.value)
    }
    const LoginButtonHandler=()=>{
      let userlogdata=localStorage.getItem("data",userdataname)
      let userlogdata1=JSON.parse(userlogdata)
      console.log(userlogdata1);
      for(var i=0;i<userlogdata1.length;i++){
        // checking the data which is taken from user
        if(number===userlogdata1[i].number){
          console.log("success");
          navigate('/');
        }
        else if(number!==userlogdata1[i].number){
          alert("wrong mobile number");
        } 
      }
    }
  return (
    <div className='SignInPage'>
      <img className="AmazonsigninLogo" src={img1} alt=''/>
      <div className='SignInRow2'>
        <h2>Sign in</h2>
        <b>Mobile phone number</b>
       <input onChange={numberHandler} maxLength={10} minLength={10} className='SignInInput' type="text"/>
       <div className='ContinueDiv' onClick={LoginButtonHandler}>Continue</div>
       <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
      </div>
      <div className='signInRow3Div'>
      <Link style={{color:"blue"}} to={'/SignUp'}>Create your Amazon account</Link>
     </div>
    </div>
  )
}
