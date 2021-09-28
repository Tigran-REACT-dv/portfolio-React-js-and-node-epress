const ADD_NEW_TYPE=" ADD_NEW_TYPE";
const NEW_CAT_NAME ="NEW_CAT_NAME";
const CONTENT_ITEM ="CONTENT_ITEM";
const FILTER_ITEM ="FILTER_ITEM";
const TOOGLE_FETCHING = "TOOGLE_FETCHING"

const initialstate ={
   activeinfo:{
       id:1,
       type:"girl"
   },
   category:[],
   activeData:{},
   activeContentElement:[],
   loding:false,

}






export const ActiveType=(state=initialstate,action)=>{
    switch (action.type) {
        case TOOGLE_FETCHING :
            return {...state,loding:action.payload.isfetching}
        case  ADD_NEW_TYPE:
          const activdata= action.payload.bigstate[action.payload.type].menu.find(itm=>itm.id===action.payload.id)
          const recurringCat =new Set()
          const itemcategory =[];
          activdata.data.map((itm)=>{
           return recurringCat.add(itm.category)
        })
         if(activdata.addCategory?.length){
             activdata.addCategory.map((itm)=>{
                return recurringCat.add(itm.category)
          })
         }
        recurringCat.forEach((itm,i)=>{
            itemcategory.push({category:itm})
            
        })
        const ActivContentitm = activdata.data
          

            
            return {...state,
                activeinfo:{id:action.payload.id,type:action.payload.type},
                category:[...itemcategory],
                activeData:{...action.payload.act},
                activeContentElement:[...ActivContentitm]
            }
         case NEW_CAT_NAME:
        
          const big=action.payload.bigData[action.payload.type].menu.find(itm=>itm.id===action.payload.id)
              big.addCategory=big.addCategory ? [...big.addCategory] : []
              big.addCategory.push({category:action.payload.newcatname})
            return{
                ...state,

                category:[...state.category,{category:action.payload.newcatname}]
            }

        case CONTENT_ITEM:
           

        const  ActiveData = action.payload.activcategory ? state.activeData.data.filter(itm=>itm.category===action.payload.activcategory) :
            state.activeData.data;
         
          return {...state,
            activeContentElement:[...ActiveData]
        }
          case FILTER_ITEM:
             
          const filterdata=state.activeData.data.filter((itm)=>(itm.price > ""+action.payload.price[0] && ""+itm.price<action.payload.price[1]))
          debugger
          return{
              ...state,
              activeContentElement:[...filterdata]
          }
    
        default:
            return state
    }
}


export const renametype=(id,type,bigstate,act)=>{
    return{
        type: ADD_NEW_TYPE,
        payload:{
            id,
            type,
            bigstate,
            act,
            
        }
    }

}


export const addNewSupCategory=(newcatname,bigData,id,type)=>{
  return{
      type:NEW_CAT_NAME,
      payload:{
          newcatname,
          bigData,
          id,
          type
      }

  }

}

export const ContnetitemAc=(activcategory)=>{
   return {
       type:CONTENT_ITEM,
       payload:{
        activcategory
       }
   }
}


export const filterAc =(price)=>{
    return{
        type:FILTER_ITEM,
        payload:{
            price
        }
    }
}
export const fetching =(isfetching)=>{
    return{
        type:TOOGLE_FETCHING,
        payload:{
            isfetching
        }

    }
}





