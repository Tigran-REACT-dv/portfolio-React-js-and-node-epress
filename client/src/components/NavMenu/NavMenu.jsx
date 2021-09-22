import React ,{useState}from "react";
import Categoryitem from "./Categoryitem";
import "./NavMenu.scss"



const NavMenu =({data,menuType,createPathCategory,activCategoty,setactivCategoty,close})=>{

    
    
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