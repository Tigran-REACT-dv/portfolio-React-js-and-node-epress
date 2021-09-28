import React, { useEffect, useState } from "react";
import "./Login.scss"
import { motion } from "framer-motion";
import {Link} from "react-router-dom"
import { animation1, animation2 } from "../animeation";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginAC, regfailetAC } from "../Store/AuthReducer";

const Login  =({history})=>{

    const store = useSelector((store)=>{
        return store.auth
    })
    const dispath = useDispatch()
    const {loginuser, isAuthenticated} = store;


    useEffect(()=>{
          if(isAuthenticated){
              history.push("/")
              
          }    
    },[isAuthenticated,history])
const [user,setUser]=useState({
    email:"",
    password:"",
})


const {email,password}=user;

 const onChange=(e)=>{
    setUser({
        ...user,
        [e.target.name]:e.target.value
    })
 }
 const Loginuser = async (formData)=>{
    const config={
        Headers:{
            'Content-Type':'application/json'
        }
    }
    try {
        const res=await axios.post("/api/auth", formData,config)
        dispath(loginAC(res.data));
        
    } catch (err) {
        dispath(regfailetAC(err))
    }
}

 const onSubmit =(e)=>{
     e.preventDefault();
     Loginuser({
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
           ><div className="login_right">
               <div className='title'>
                    <h2>вход</h2>
               </div>
               <form onSubmit={onSubmit}>
                   <label htmlFor="log">Эл. адрес</label>
                    <input 
                    className="emailinp" 
                    type="email"
                     name="email"
                     value={email}
                     required
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
                     <div>
                         <input type="checkbox" name="checkbox" id="check" />
                         <label htmlFor="check">Запомни меня</label>
                     </div>
                     <button>вход</button>
                     <Link  className="register" to="/register">Регистрация</Link>
               </form>
                 <div className="footer">
                 <Link className="zabil" to="/zabil">забыли пароль?</Link>
                 <Link className="vostanovit" to="/vostanovit">восстановить</Link>
                 </div>

           </div>
           <div className="login_left">
               <h1>PlardGold</h1>
           </div>
            

           </motion.div>
            </motion.div>
       </div>  
    )
}

export default Login;