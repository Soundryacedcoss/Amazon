import React, {useState } from "react";
import { useNavigate,Link } from 'react-router-dom';
import img1 from './Images/Amazon-logosignin.webp'
export const SignUp = () => {
  const navigate=useNavigate();
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[username,setUsername]=useState("")
  const[password,setPassword]=useState('')
  const[number,setNumber]=useState('')
  const[logarr,setLogarr]=useState([])
   // functions for taking the value from input boxes
const nameHandler=(e)=>{
  setName(e.target.value)
}
const passwordHandler=(e)=>{
  setPassword(e.target.value)
}
const numberHandler=(e)=>{
  setNumber(e.target.value)
}
const SignUpButtonHandler=()=>{
  if(name===""){
    alert("name should not be empty")
    document.form.name.focus();
  }
  else if(!isNaN(name)){
    alert("Name Should not be integer");
    document.form.name.focus();
  }
  else if(password===""){
    alert("please enter password");
    document.form.psw.focus();
  }
  else if(number===""){
    alert("Enter mobile number")
    document.form.number.focus();
  }
  else if(isNaN(number)){
    alert("number should be integer")
    document.form.number.focus();
 }
 else{
  var obj={
      name:name,
      password:password,
      number:number,
  }
  logarr.push(obj)
  let arr= JSON.stringify(logarr)
  // set the values in local storage
  localStorage.setItem("data",arr);
  alert("Created account succesfully Now please login")
  navigate('/SignIn')
}
}
  return (
    <div>
    <img className="AmazonsigninLogo" src={img1} alt=''/>
      <div className='SignInRow2'>
        <h2>Create account</h2>
        <b>Your name</b>
        <input className='SignInInput' type="text" name="name" placeholder="Full name" onChange={nameHandler}/>
        <b> Mobile phone number</b>
       <input className='SignInInput' type="text" onChange={numberHandler} maxLength={10} minLength={10}/>
       <b>Password</b>
       <input className='SignInInput' type="password" placeholder="Enter Password"
            name="psw" onChange={passwordHandler}
            minLength={4} maxLength={20}/>
       <div className='ContinueDiv' onClick={SignUpButtonHandler}>Continue</div>
       <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
      <hr/>
      <p>Already account <Link style={{color:"blue"}} to={'/SignIn'}>SignIn</Link> </p>
      </div>
      
    </div>
  )
}
