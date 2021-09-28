import React, { useEffect, useState } from "react";
import "./Login.scss"
import { motion } from "framer-motion";
import {Link} from "react-router-dom"
import { animation1, animation2 } from "../animeation";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"
import { regfailetAC, registeractioncreator } from "../Store/AuthReducer";
const Register  =({history})=>{
  

const store = useSelector((store)=>{
    return store.auth
})
const dispath = useDispatch()
const {isAuthenticated,error} =store;


useEffect(()=>{
  if(isAuthenticated){
    history.push("/")
  }
},[isAuthenticated,history])

const [user,setUser]=useState({
    name:"",
    email:"",
    password:"",
    cpassword:""

})


const {name,email,password,cpassword}=user;

 const onChange=(e)=>{
    setUser({
        ...user,
        [e.target.name]:e.target.value
    })
 }
 const Registeruser = async (formData)=>{
  const config={
      Headers:{
          'Content-Type':'application/json'
      }
  }
  try {
      const res=await axios.post("/api/users", formData,config)
      dispath(registeractioncreator(res.data))
  } catch (err) {
      dispath(regfailetAC(err.response.data.msg))
  }
}

 const onSubmit =(e)=>{
  e.preventDefault();
  Registeruser({
    name,
    email,
    password,
  })
 }

    return(
       <div className="animediv">
           <motion.div
            initial='out'
            animate='in'
            exit='out'
            transition={{ duration: 1 }}
            variants={animation1}
            className="wrapeer"
           ><motion.div
            initial='out'
            animate='in'
            exit='out'
            transition={{ duration: 2 }}
            variants={animation2}
            className="wrapeer2"
           >     <div className="login_left">
                   <h1>PlardGold</h1>
                 </div>
               <div className="login_right">
               <div className='title'>
                    <h2>Регистрация</h2>
               </div>
               <form className="formReg" onSubmit={onSubmit}>
               <label htmlFor="name">полное имя</label>
                    <input 
                    className="emailinp" 
                    type="text"
                    name="name"
                    required
                    value={name}
                    onChange={onChange}
                      id="name" />
                   <label htmlFor="log">Эл. адрес</label>
                    <input 
                    className="emailinp" 
                    type="email"
                     name="email"
                     required
                     value={email}
                     onChange={onChange}
                      id="log" />
                    <label htmlFor="pas">пароль</label>
                    <input 
                    className="passinp"
                     type="password" 
                     name="password" 
                     required
                     value={password}
                     onChange={onChange}
                     id="pas" />
                     <label htmlFor="pas2">пароль</label>
                    <input 
                    className="passinp"
                     type="password" 
                     name="cpassword" 
                     required
                     value={cpassword}
                     onChange={onChange}
                     id="pas2" />
                     
                     <button>Регистрация</button>
                    
               </form>
                
                 

           </div>
          </motion.div>
            </motion.div>
       </div>  
    )
}

export default Register;