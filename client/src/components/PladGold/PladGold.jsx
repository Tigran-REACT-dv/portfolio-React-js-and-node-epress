import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Content from "../Content/Content";
import MenuType from "../MenuType/MenuType";
import NavMenu from "../NavMenu/NavMenu";
import { authTokenAc } from "../Store/AuthReducer";
import setAuthToken from "../Store/tokenAuth";
import "./PladGold.scss"
import axios from "axios";
import closeimg from "../../image/ix.png"
import { AddnewitemAc } from "../Store/PlardReducer";
import { addNewSupCategory, ContnetitemAc, renametype } from "../Store/ActiveType";








const PladGold =({history})=>{

   
    const authData = useSelector(store=>store.auth);
    const bigData = useSelector(store=>store.data);
    const active =useSelector(store=>store.active);
    const {id,type}=active.activeinfo;
    const {isAuthenticated,user} =authData;
    const dispath =useDispatch();
   
    const [toggleTabs,setToggleTabs] = useState(1)
    const [openMenu,setopenMenu]=useState(false)
     const[activeTypeElem,setactiveTypeElem]=useState(null)
    const[activemenustyle,setactivemenustyle]=useState(0)
    const [activCategoty,setactivCategoty]= useState(1)
    const[additemmodal,setAdditemmodal]=useState(false)

   
     useEffect(()=>{
             if(isAuthenticated || localStorage.getItem("token") ){
                 LoadUser()
             }
              
     },[isAuthenticated,history,localStorage.getItem("token")])

    

    
    const LoadUser = async ()=>{
        if(localStorage.token){
            setAuthToken(localStorage.token)
        }
        try {
            const res =await axios.get("/api/auth");
            dispath(authTokenAc(res.data))
            
        } catch (err) {
        //    dispath({
        //        type:AUTH_ERROR,
               
        //    })   
        }
    }


   const ToggleTab =(index)=>{
         setToggleTabs(index)
         createPathCategory(false)
         setactivCategoty(1)
    }

    useEffect(()=>{
      createPathCategory(true,id,type)
    },[])
    
    const createPathCategory=(sow,id,menuTupe)=>{
          if(sow){
           
             const activdata=bigData[menuTupe].menu.find((itm)=>itm.id===id)
            dispath(renametype(id,menuTupe,bigData,activdata))
             }
           setopenMenu(sow)
          setactivemenustyle(0)
         
         
    }
    const filter =(activcategory)=>{
        dispath(ContnetitemAc(activcategory))
     }
    const addNewCategory=(newcategory)=>{
       dispath(addNewSupCategory(newcategory,bigData,id,type))
    }

    const sowAddModal=()=>{
      setAdditemmodal(!additemmodal)
    }
    const SendNewDataCategory =(newdata)=>{
         dispath(AddnewitemAc(newdata,type,id))
        createPathCategory(true,id,type)
        setAdditemmodal(!additemmodal)
    }
    
    

    return(
         <div>
             <div>
                  <div className="tabsNavMenu">
                      <div className="tabsbutton">
                          <button className={toggleTabs===1 ? "girl active" : "girl"}
                            onClick={()=>ToggleTab(1)}></button>
                          <button  className={toggleTabs===2 ? "boy active" : "boy"}
                             onClick={()=>ToggleTab(2)}></button>
                      </div>
                  </div>
                  {toggleTabs===1 ?
                      <>
                      <div className="category">
                            <NavMenu  
                              activCategoty={activCategoty}
                              setactivCategoty={setactivCategoty}
                              data={bigData.girl.menu}
                              menuType="girl"
                              createPathCategory={createPathCategory}/>
                      </div>
                      {openMenu &&
                          <>
                           <MenuType
                            activemenustyle={activemenustyle}
                            setactivemenustyle={setactivemenustyle}
                            filter={filter}
                            addNewCategory={addNewCategory}
                            SendNewDataCategory={SendNewDataCategory}
                           
                            />
                           <Content  createPathCategory={createPathCategory}/>
                          </>
                      }
                      </>
                     :
                     <>
                      <div className="category">
                      <NavMenu 
                       activCategoty={activCategoty}
                        setactivCategoty={setactivCategoty}
                        data={bigData.boy.menu}
                        menuType="boy"
                        createPathCategory={createPathCategory}/>
                      </div>
                      {openMenu &&
                          <>
                           <MenuType
                            activemenustyle={activemenustyle}
                            setactivemenustyle={setactivemenustyle}
                            filter={filter}
                            addNewCategory={addNewCategory}
                            SendNewDataCategory={SendNewDataCategory}
                            />
                           <Content />
                          </>
                      }
                      </>

                    }
                {user && <div className="additemmodalbuton" onClick={sowAddModal}/>}
                    {additemmodal && <div className="modaladditem">
                         <div className="wrraper" onClick={sowAddModal}/>
                          <div className="additemcontent">
                              <div className="closemodal">
                                <h2>добавить изделия</h2>
                                <img src={closeimg} alt=""onClick={sowAddModal} />
                              </div>
                            <div className="modalbg"> 
                          <div className="tabsNavMenu">
                      <div className="tabsbutton">
                          <button className={toggleTabs===1 ? "girl active" : "girl"}
                            onClick={()=>ToggleTab(1)}></button>
                          <button  className={toggleTabs===2 ? "boy active" : "boy"}
                             onClick={()=>ToggleTab(2)}></button>
                      </div>
                  </div>
                  {toggleTabs===1 ?
                      <>
                      <div className="category">
                            <NavMenu  
                              activCategoty={activCategoty}
                              setactivCategoty={setactivCategoty}
                              data={bigData.girl.menu}
                              menuType="girl"
                              createPathCategory={createPathCategory}
                              close={additemmodal}/>
                              
                      </div>
                      {openMenu &&
                          <>
                           <MenuType
                            activemenustyle={activemenustyle}
                            setactivemenustyle={setactivemenustyle}
                            filter={filter}
                            addNewCategory={addNewCategory}
                            close={additemmodal}
                            SendNewDataCategory={SendNewDataCategory}
                            />
                          
                          </>
                      }
                          </>
                     :
                       <>
                      <div className="category">
                      <NavMenu 
                       activCategoty={activCategoty}
                        setactivCategoty={setactivCategoty}
                        data={bigData.boy.menu}
                        menuType="boy"
                        createPathCategory={createPathCategory}
                        close={additemmodal}
                        />
                     </div>
                      {openMenu &&
                          <>
                           <MenuType 
                            activemenustyle={activemenustyle}
                            setactivemenustyle={setactivemenustyle}
                            filter={filter}
                            addNewCategory={addNewCategory}
                            close={additemmodal}
                            SendNewDataCategory={SendNewDataCategory}
                            />
                          </>
                      }
                      </>
                      }
                      </div> 
                      </div>
                        </div>
                        
                    }
                
               </div>

         </div>
    )
}
export default PladGold;