import React,{useState,useRef,useEffect}  from "react";
import { useSelector } from "react-redux";
import "./MenuType.scss";
import addimg from "../../image/addimg.png"

const MenuType = ({activemenustyle,setactivemenustyle,filter,addNewCategory,close, SendNewDataCategory})=>{
  
   const auth = useSelector(state=>state.auth)
   const menuTypeCat=useSelector(state=>state.active.category)
 
   const {user}=auth;
    const[sowaddSupCategory,setsowaddSupCategory]=useState(false)
    const [categorys,setCategory]=useState("")
    const [preview,setPreview]=useState()
    const [addImage,setaddImage]=useState(null)
    const inputRef =useRef()
    const [NewcategoryValue,setNewcategoryValue]=useState("")
    const [collectedData, setCollectedData] = useState({
        id: new Date().getTime(),
        img: null,
        category: null,
         
        
    })
    
    const sowline=(category)=>{
        setactivemenustyle(category)
       filter(category)
    }
    const sowModal=()=>{
        setsowaddSupCategory(!sowaddSupCategory)
    } 

    const onSubmit=(e)=>{
        e.preventDefault();
        addNewCategory(categorys)
        setsowaddSupCategory(!sowaddSupCategory)
        setCategory("")
    }

    const onchangeImage=(e)=>{
        const file=e.target.files[0];
        if(file && file.type.substr(0,5)==="image"){
          setaddImage(file)
          let img = e.target.files[0];
        setCollectedData({...collectedData, img: URL.createObjectURL(img)})
        }
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

    const onChange=(e)=>{
     const  {name , value}=e.target;
     setCollectedData({...collectedData,[name]:value})
    }
    const Additem=()=>{
        SendNewDataCategory(collectedData)
       
    }

    return(
        <>
          <div className="menuType">
              <div className="menuglobal">
                 {menuTypeCat.map((itm,i)=>{
                     return(
                         <div className="menuItem" key={i}>
                             <button onClick={()=>sowline(itm.category)}
                             >{itm.category}
                             {activemenustyle==itm.category && <div className="activeline"></div>}</button>
                         </div>
                     )
                 })}
                 
              </div>
              {user && !close && <div className='addnewcat' onClick={sowModal}/>}
              {sowaddSupCategory && 
                      <div className="supcatModal">
                         <div className="wrapper" onClick={sowModal}/>
                             <div className="addsup"> 
                             <div>
                                 <h1>добавить подкатегория</h1>
                                 <img src={close} alt="" onClick={sowModal} />

                             </div>
                                 <form onSubmit={onSubmit}>
                                     <input type="text" value={categorys} placeholder="подкатегория" onChange={(e)=>setCategory(e.target.value)} name="" id="" />
                                      <button >добавить</button>
                                 </form>
                             </div>
                     </div> 
                    }
        
         </div>
         {close && 
         <div className="addElementBigState">
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
            <div className="inputnameprice">
                <input type="text" required name="title"  onChange={onChange} placeholder="Название"/>
                <input type="number" required name="price"  onChange={onChange} placeholder="цена"/>
            </div>
            
            <div className="selectbuton">
                 <select name="category" onChange={onChange} id="">
              <option>Выберите категорию</option>
              {
                 menuTypeCat.map(itm=>{
                     return (
                        <>
                        <option value={`${itm.category}`}>{itm.category}</option>
                        </>
                     )
                 }) 
              }
             </select>
             <button onClick={Additem}>добавить</button>
            </div>
            
        </div>}
         </>
    )
}


export default MenuType;



