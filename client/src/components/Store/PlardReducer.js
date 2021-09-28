
import cat1 from "../../image/axjka_zarder/kolco.png";
import cat2 from "../../image/axjka_zarder/vznoc.png";
import cat3 from "../../image/axjka_zarder/akanjox.png";
import cat4 from "../../image/axjka_zarder/tevkap.png";
import cat5 from "../../image/axjka_zarder/biju.png";
import cat6 from "../../image/axjka_zarder/kulon.png";
import cat7 from "../../image/axjka_zarder/brazlet.png";
import girl1 from "../../image/kolco/1.png";
import girl2 from "../../image/kolco/2.png";
import girl3 from "../../image/kolco/3.png";
import girl4 from "../../image/kolco/4.png";
import girl5 from "../../image/kolco/5.png";
import girl6 from "../../image/kolco/6.png";
import girl7 from "../../image/kolco/7.png";
import girl8 from "../../image/kolco/8.png";
import girl9 from "../../image/kolco/9.png";
import girl10 from "../../image/kolco/10.png";
import girl11 from "../../image/kolco/11.png";
import girl12 from "../../image/kolco/12.png";
import girl13 from "../../image/kolco/13.png";
import girl14 from "../../image/kolco/14.png";
import girl15 from "../../image/kolco/15.png";
import girl16 from "../../image/kolco/16.png";
import girl17 from "../../image/kolco/17.png";
import girl18 from "../../image/kolco/18.png";
import girl19 from "../../image/kolco/19.png";
import girl20 from "../../image/kolco/20.png";
import girl21 from "../../image/kolco/21.png";
import girl22 from "../../image/kolco/22.png";
import girl23 from "../../image/kolco/23.png";
import girl24 from "../../image/kolco/24.png";
const ADD_NEW_CATEGORY ="ADD_NEW_CATEGORY";
const DILETE_BTN ="DILETE_BTN";
const ADD_NEW_ELEMENT ="ADD_NEW_ELEMENT";
const FETCHINGDATA ="FETCHINGDATA";

export const initialstate ={
    
  girl:{
       menu:[
           { id:1,
            icon:cat1,
            title:"кольцo",
            data:[
              {id:1,title:"A555",price:"2500",category:"кольцo",img:girl1},
              {id:2,title:"A555",price:"2500",category:"кольцo",img:girl2},
              {id:3,title:"A555",price:"3500",category:"кольцo",img:girl3},
              {id:4,title:"A555",price:"3500",category:"кольцo",img:girl4},
              {id:5,title:"A555",price:"4500",category:"кольцo",img:girl5},
              {id:6,title:"A555",price:"4500",category:"кольцo",img:girl6},
              {id:7,title:"A555",price:"5100",category:"кольцo",img:girl7},
              {id:8,title:"A555",price:"5100",category:"кольцo",img:girl8},
              {id:9,title:"A555",price:"2500",category:"обручальные",img:girl9},
              {id:10,title:"A555",price:"2500",category:"обручальные",img:girl10},
              {id:11,title:"A555",price:"2500",category:"кольцo",img:girl11},
              {id:12,title:"A555",price:"2500",category:"кольцo",img:girl12},
              {id:13,title:"A555",price:"2500",category:"кольцo",img:girl13},
              {id:14,title:"A555",price:"2500",category:"кольца кастеты",img:girl14},
              {id:15,title:"A555",price:"2500",category:"кольца кастеты",img:girl15},
              {id:16,title:"A555",price:"2500",category:"кольцo",img:girl16},
              {id:17,title:"A555",price:"2500",category:"кольцo",img:girl17},
              {id:18,title:"A555",price:"2500",category:"кольцo",img:girl18},
              {id:19,title:"A555",price:"2500",category:"кольцo",img:girl19},
              {id:20,title:"A555",price:"2500",category:"кольцo",img:girl20},
              {id:21,title:"A555",price:"2500",category:"коктейльные",img:girl21},
              {id:22,title:"A555",price:"2500",category:"коктейльные",img:girl22},
              {id:23,title:"A555",price:"2500",category:"помолвочные",img:girl23},
              {id:24,title:"A555",price:"2500",category:"помолвочные",img:girl24},
              ]
          },
          {   id:2,
              icon:cat2,
              title:"колье",
              data:[
               {id:1,title:"A555",price:"2500",category:"кольцo",img:girl1},
               {id:2,title:"A555",price:"2500",category:"кольцo",img:girl2},
               {id:3,title:"A555",price:"3500",category:"кольцo",img:girl3},
               {id:4,title:"A555",price:"3500",category:"кольцo",img:girl4},
               ]
            },
            { id:3,
              icon:cat3,
              title:"серьги",
              data:[
                  {id:1,title:"A555",price:"2500",category:"кольцo",img:girl1},
                  {id:2,title:"A555",price:"2500",category:"кольцo",img:girl2},
                  {id:3,title:"A555",price:"4500",category:"обручальные",img:girl5},
                  {id:4,title:"A555",price:"4500",category:"обручальные",img:girl6},
                  {id:5,title:"A555",price:"5100",category:"кольца кастеты",img:girl8},
                  
                ]
            },
            { id:4,
              icon:cat4,
              title:"Цепь",
              data:[
                  {id:1,title:"A555",price:"2500",category:"кольцo",img:girl1},
                  {id:2,title:"A555",price:"2500",category:"кольцo",img:girl2},
                 ]
            },
            { id:5,
              icon:cat5,
              title:"Брошь",
              data:[
               {id:1,title:"A555",price:"2500",category:"кольцo",img:girl1},
               {id:2,title:"A555",price:"2500",category:"кольцo",img:girl2},
               {id:3,title:"A555",price:"4500",category:"обручальные",img:girl6},
               {id:4,title:"A555",price:"2500",category:"коктейльные",img:girl10},
               {id:5,title:"A555",price:"2500",category:"коктейльные",img:girl11},
               ]
            },
            { id:6,
              icon:cat6,
              title:"кулоны",
              data:[
                  {id:1,title:"A555",price:"2500",category:"кольцo",img:girl1},
                  {id:2,title:"A555",price:"4500",category:"обручальные",img:girl5},
                 {id:3,title:"A555",price:"2500",category:"кольца кастеты",img:girl9},
                  {id:4,title:"A555",price:"2500",category:"коктейльные",img:girl10},
                 
                ]
            },
            { id:7,
              icon:cat7,
              title:"браслеты",
              data:[
                  {id:1,title:"A555",price:"2500",category:"кольцo",img:girl1},
                  {id:2,title:"A555",price:"2500",category:"кольцo",img:girl2},
                
                ]
            },
      ]
  },
  boy:{
     menu:[
           { id:1,
            icon:cat7,
            title:"кольцo",
            data:[
              {id:1,title:"A555",price:"2500",category:"кольцo",img:girl1},
              {id:2,title:"A555",price:"2500",category:"кольцo",img:girl2},
              {id:3,title:"A555",price:"3500",category:"кольцo",img:girl3},
              {id:4,title:"A555",price:"3500",category:"кольцo",img:girl4},
              {id:5,title:"A555",price:"4500",category:"кольцo",img:girl5},
              {id:6,title:"A555",price:"4500",category:"кольцo",img:girl6},
              {id:7,title:"A555",price:"5100",category:"кольцo",img:girl7},
              {id:8,title:"A555",price:"5100",category:"кольцo",img:girl8},
              
              ]
          },
          {   id:2,
              icon:cat6,
              title:"колье",
              data:[
               {id:1,title:"A555",price:"2500",category:"кольцo",img:girl1},
               {id:2,title:"A555",price:"4500",category:"обручальные",img:girl5},
              
              
                ]
            },
            { id:3,
              icon:cat5,
              title:"серьги",
              data:[
                  {id:1,title:"A555",price:"2500",category:"кольцo",img:girl1},
                  {id:2,title:"A555",price:"2500",category:"кольцo",img:girl2},
                  
                ]
            },
            { id:4,
              icon:cat4,
              title:"Цепь",
              data:[
                  {id:1,title:"A555",price:"2500",category:"кольцo",img:girl1},
                  {id:2,title:"A555",price:"2500",category:"кольцo",img:girl2},
                  
                ]
            },
            { id:5,
              icon:cat3,
              title:"Брошь",
              data:[
                  {id:1,title:"A555",price:"2500",category:"кольцo",img:girl1},
                  
              
               ]
            },
            { id:6,
              icon:cat2,
              title:"кулоны",
              data:[
                  {id:1,title:"A555",price:"2500",category:"кольцo",img:girl1},
               ]
            },
            { id:7,
              icon:cat1,
              title:"браслеты",
              data:[
                  {id:1,title:"A555",price:"2500",category:"кольцo",img:girl1},
                  {id:2,title:"A555",price:"2500",category:"кольцo",img:girl2},
                
                ]
            },
      ]
  }   



}


export  const PlardReducer =(state=initialstate,action)=>{
    switch(action.type){
        case FETCHINGDATA : 
           
           return {...state,...action.payload.data}
          
       case "ADD_NEW_CATEGORY":
        
          const activmenu=state[action.payload.menutype].menu;
           activmenu.push(action.payload.newdetainfo)
           return({...state,activmenu})
            
        case ADD_NEW_ELEMENT:
          
             const dataB = state[action.payload.activmenu].menu.find(itm => itm.id === action.payload.activid)
             if(dataB.data.length){
              dataB.data=[... dataB.data]
              }else{
              dataB.data=[]
            }
            dataB.data.unshift(action.payload.data);
             const i = state[action.payload.activmenu].menu.findIndex(itm => itm.id === action.payload.activid);
             const nmenu=state[action.payload.activmenu].menu
             nmenu[i]=dataB;
             const x =state;
             x[action.payload.activmenu]['menu']=nmenu;
         
          return({...x})
        case DILETE_BTN:
          const dataDel = state[action.payload.active.activeinfo.type].menu.find(itm=>itm.id===action.payload.active.activeinfo.id)
          dataDel.data=dataDel.data.filter(item=>item.id!== action.payload.id)
          const j =state[action.payload.active.activeinfo.type].menu.findIndex(itm => itm.id === action.payload.active.activeinfo.id);
          const newmenu=state[action.payload.active.activeinfo.type].menu
          newmenu[j]= dataDel;
          const y =state;
          y[action.payload.active.activeinfo.type]['menu']=newmenu;
        
       return({...y})
        default:
         return state
    }


   

}
export const loadData=(data)=>{
    return {
      type:FETCHINGDATA,
      payload:{
          data
        }
      }
}

export const  AddnewitemAc = (newdata,activeMenu,activeid)=>{

  return{
    type:ADD_NEW_ELEMENT,
    payload:{
        data:newdata,
        activmenu:activeMenu,
        activid:activeid
    }
  }
}

export const diletebtn =(id,active)=>{
  return{
    type:DILETE_BTN,
    payload:{
      id,
      active
    }
  }
}


export const createNebCategory=(addImage,NewcategoryValue,menutyps)=>{
  return{
    type:ADD_NEW_CATEGORY,
    payload:{
     newdetainfo:{
         id:new Date().getTime(),
         icon: URL.createObjectURL(addImage) ,
         title:NewcategoryValue,
         data:[],
      },
      menutype:menutyps
   }
  }
}


