import React, { useEffect, useRef, useState } from "react";
import "./NavMenu.scss"
import addimg from "../../image/addimg.png"
import { useDispatch, useSelector } from "react-redux";


const Categoryitem =({Item,menuType="Girl",activCategoty,setactivCategoty,createPathCategory,close})=>{

  const auth =useSelector(store=>store.auth)
const {user}=auth
const dispath = useDispatch()
const[menutyps,setmenutyps]=useState(null)
const [openModal,setOpenModal]=useState(false)
const [NewcategoryValue,setNewcategoryValue]=useState("")
const [preview,setPreview]=useState()
const [addImage,setaddImage]=useState(null)
const [activeadddatastyle,setactiveadddatastyle]=useState(0)
const inputRef =useRef()
  const openCategory =(e)=>{
    createPathCategory(true,Item.id,menuType)
    setactivCategoty(Item.id)
  }


  const sowWindow=()=>{
    setOpenModal(!openModal);
    
  }
  useEffect(()=>{
    if(openModal){
      document.body.style.overflow="hidden"
      document.body.style.paddingRight = "17px";
    }
    else{
      document.body.style.overflow=""
      document.body.style.paddingRight = "";
    }
  },[openModal])

  const onChange=(e)=>{
    setNewcategoryValue(e.target.value)
  }
  const onchangeImage=(e)=>{
   const file=e.target.files[0];
   if(file && file.type.substr(0,5)==="image"){
     setaddImage(file)

   }
  }

  const onchangeSer =(e)=>{
    setmenutyps(e.target.value)
    
  }

  

  useEffect(() => {
    if(addImage) {
        const reader = new FileReader();
       
        reader.onloadend = () => {
            setPreview(reader.result)
             
        };
        reader.readAsDataURL(addImage)
    }else{
        setPreview(null)
    }
}, [addImage]);



const createNewData=()=>{
   if(NewcategoryValue==="" || NewcategoryValue===null || addImage===null){
     alert("category  name or image empty")
   }else{
    dispath({
      type:"ADD_NEW_CATEGORY",
      payload:{
       newdetainfo:{
           id:new Date().getTime(),
           icon: URL.createObjectURL(addImage) ,
           title:NewcategoryValue,
           data:[],
        },
        menutype:menutyps
     }
    })
    setOpenModal(!openModal);
    setaddImage(null)
    setNewcategoryValue('')
   }
}
    
    return(
        <>
         { Item ?
           <div className="catitem" onClick={openCategory} style={{boxShadow:  activCategoty ===Item.id && `0px 0px 14px 10px red`}}>
                <img src={Item.icon} alt="" />
                <p>{Item.title}</p>
           </div>
           :
           <>
          {user && !close && <button className="additem" onClick={sowWindow}></button>}
           { openModal &&
            <div className="modals">
             <div className="wraper" onClick={sowWindow}/>
             <div className="formaElem">
                 <div className="head"> 
                      <h1>добавить категория</h1>
                      <div className="close" onClick={sowWindow}/>
                 </div>
                 <div className="radeobutton">
                   <label htmlFor="1">
                  <div 
                      onClick={()=>setactiveadddatastyle(1)}
                      className={activeadddatastyle===1 ? "girl active" :"girl"}>женский</div></label>
                   <input type="radio"  name="1" id="1"  value="girl" onChange={onchangeSer}/> 
                   <label htmlFor="2">
                     <div onClick={()=>setactiveadddatastyle(2)} 
                     className={activeadddatastyle===2 ? "boy active" :"boy"}>мужской</div></label>
                   <input type="radio"  name="1"  id="2" value="boy" onChange={onchangeSer}/>
                
                                     
                 </div>
                  <div className="addcategory">
                     <input type="text" name="" value={NewcategoryValue} onChange={onChange} placeholder="категория"/>                      
                      <div className="uploade_image">
                        {preview ? <img src={preview} className="uplodimg" onClick={()=>setaddImage(null)}/>
                         :
                         <button onClick={(e)=>{
                          e.preventDefault();
                          inputRef.current.click()
                         }}>
                           <img src={addimg} alt="" />
                           <p>загрузить <br /> фото</p>
                         </button>}
                         <input type="file" style={{display:"none"}} ref={inputRef} accept="image/*" onChange={onchangeImage} />
                      </div>
                      <button className="submit" onClick={createNewData}>добавить</button>
                  </div>
               </div>
            </div>
            }
           </>
         }
        </>
    )
}

export default Categoryitem;