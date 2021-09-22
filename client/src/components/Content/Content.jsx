import React, { useState ,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Content.scss";
import filter from "../../image/filter.png"
import Filtermodal from "./filterModal/Filtermodal";
import { filterAc } from "../Store/ActiveType";
import close from "../../image/ix.png"
import { diletebtn } from "../Store/PlardReducer";

const Content = ({createPathCategory})=>{

const user=useSelector(store=>store.auth)
const active =useSelector(store=>store.active);
const [sowFilter,setsowFilter]=useState(false)
const [price, setPrice] = useState([1000, 5000]);
const [iteminfoModal,setiteminfoModal]=useState(null)
const dispath =useDispatch()
const [dop,setdop]=useState(null)

useEffect(() => {
   
}, [active])

const openModal =()=>{
    setsowFilter(!sowFilter)
    
}
const deleteitem=(id)=>{
   dispath(diletebtn(id,active))
   createPathCategory(true,active.activeinfo.id,active.activeinfo.type)
   setdop(null)
}


const filteritem=()=>{
    dispath(filterAc(price))
    
    setsowFilter(!sowFilter)
}
    return(
        <>
         <div className="container">
             <div className="contElement">
                {active.activeContentElement.map((itm)=>{
                    return(
                    <div className="product" key={itm.id}>
                        <img src={itm.img} alt="photo" />
                        <div className="info">
                                <p>{itm.title}</p>
                                <p>{itm.price}$</p>
                                <div className="dop" onClick={()=>setdop(itm.id)}>
                                   <div/>
                                   <div/>
                                   <div/>
                                </div>
                                {dop===itm.id ? <div className="deletemod">
                                      <div className="dilet"  onClick={()=>deleteitem(itm.id)}/>
                                      <div className="rename"  onClick={()=>{setiteminfoModal(itm);setdop(null)}}/>
                                    </div> : null}
                        </div>
                    </div>
                    )
                })}
             </div>
            </div>
           {iteminfoModal && 
            <div className="itmModalwraper">
               <div className="wrraper" onClick={()=>setiteminfoModal(null)}/>
                <div className="contentmodal">
                   <div className="verxnayachast">
                       <img src={close} alt="" onClick={()=>setiteminfoModal(null)}/>
                   </div>
                   <div className="content">
                       <img src={iteminfoModal.img} alt="" />
                       <div className="leftinfo">
                         <div>
                             <span>артикул</span><span>{iteminfoModal.title}</span>
                         </div>
                         <div>
                             <span>цена</span><span>{iteminfoModal.price}$</span>
                         </div>
                         <div>
                             <span>цена производства</span><span>{iteminfoModal.price}$</span>
                         </div>
                      </div> 

                   </div>
               </div>
            </div>
           }

           <div className="filtermodal" onClick={openModal}>
             <img src={filter} alt="" />
              <p>ф</p>
              <p>и</p>
              <p>л</p>
              <p>ь</p>
              <p>т</p>
              <p>р</p>
           </div>
           {sowFilter && 
             <div className="filtermodalwrapper">
                <div className="wrraper" onClick={openModal}/>
                <div className="filter">
                 <div className="closemod" onClick={openModal}>
                     <div className="closebtn">
                         <p>&lt;</p>
                     </div>
                 </div>
                 <div className="filterinput">
                   <h4>цена</h4>
                   <Filtermodal price={price} setPrice={setPrice}/>

                   <button  onClick={filteritem}>филтерь</button>
                 </div>
                   
                </div>
             </div>
           }  
           </>
    )
}


export default Content
