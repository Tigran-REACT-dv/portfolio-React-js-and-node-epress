import React from "react";
import { useSelector } from "react-redux";
import Categoryitem from "./Categoryitem";
import "./NavMenu.scss"



const NavMenu =(props)=>{

    const {toggleTabs,createPathCategory,activCategoty,setactivCategoty,close}=props
    const state=useSelector(s=>s.data)
     const data = toggleTabs===1 ? state.girl.menu : state.boy.menu
    const menuType =  toggleTabs===1 ? "girl" : "boy"
    return(
        <div className="navmenu">
          {
              data.map((item)=>{
                  return(
                      <Categoryitem key={item.id} Item={item} menuType={menuType} activCategoty={activCategoty} setactivCategoty={setactivCategoty} createPathCategory={createPathCategory} close={close}/>  
                  )
              })
          }
          <Categoryitem  Item={null} menyType={menuType} close={close}/>
        </div>
    )
}

export default NavMenu;