import React, { Fragment, useState } from "react";
import  "./Header.scss";
import logo from "../../image/logo.png";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { logauth} from "../Store/AuthReducer";
import after from "../../image/userafter.png"
import admin from "../../image/admin.jpg"
const Header =()=>{
const [modalExit,setmodalExit]=useState(false)
const auth = useSelector((store)=>{
    return store.auth
})
const dispath =useDispatch()
const {user,isAuthenticated}= auth;

const Lgout = ()=>{
        dispath(logauth())
    
}
const Exet = ()=>{
        Lgout()
    }
 const sowExitWindow =()=>{
     setmodalExit(!modalExit)
 }   
   const authLink =(
       <Fragment>
        <p className="username">
             <img src={admin} alt="admin" className="admin" />
             {user && user.name}
             <img src={after} onClick={sowExitWindow}/>
          </p>
          {modalExit && <div className="modalExit">
                <h1>личные данные</h1>
                 <p>Создать пользователя</p>
                  <hr/>
                  <p onClick={Exet}>выход</p>
              </div>}
        </Fragment>
   )
   const unauthLink =(
    <Fragment>
         <NavLink className="vixod" to="/login">вход</NavLink>
     </Fragment>
)

    
    return(
        <div className="header">
            <div>
                <NavLink to="/"><img src={logo} alt="logo" className="logo" /></NavLink>
            </div>
        <div className="serchbar">
           <input type="text" placeholder="поиск" />
            <button></button>
        </div >
        <div className="headermenu">
           {
                 isAuthenticated ? authLink :unauthLink
             } 
        </div>
             
             
        </div>
    )

}

export default Header;


