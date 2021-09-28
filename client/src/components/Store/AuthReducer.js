 const REGISTER_USER="REGISTER_USER";
 const LOGIN_USER="LOGIN_USER";
 const LOGOUTH_USER="LOGOUTH_USER";
 const REGISTER_FAILED="REGISTER_FAILED";
 const LOGIN_FAILED="LOGIN_FAILED";
 const LOAD_USER="LOAD_USER";
 const AUTH_ERROR="AUTH_ERROR";




 export const initialstate={
    token:localStorage.getItem("tiken"),
    isAuthenticated:null,
    user:null,
    loding:true,
    error:null
   }


export function AuthReducer (state=initialstate,action){
    switch (action.type) {
        case REGISTER_USER :
            localStorage.setItem('token',action.payload.token);
           return {
               ...state,
               ...action.payload,
               isAuthenticated:true,
               loding:false,
           };
        case REGISTER_FAILED: 
        
        localStorage.removeItem("token")
        return{
         ...state,
         token:null,
         isAuthenticated:false,
         loding:false,
         user:null,
         error:action.payload
        };
        case LOGIN_USER:    
                 localStorage.setItem('token',action.payload.token);
                 return {
                     ...state,
                     ...action.payload,
                     isAuthenticated:true,
                     loding:false,
                 }; 
        case LOAD_USER:
                 return {
                    ...state,
                    isAuthenticated:true,
                    loding:false,
                    user:action.payload,
                    
                 }
         case LOGOUTH_USER:
            localStorage.removeItem("token")
            return{
             ...state,
             token:null,
             isAuthenticated:false,
             loding:false,
             user:null,
             error:action.payload
            };
    
        default:
            return state
    }
}


export function registeractioncreator(data){
    return{
        type:REGISTER_USER,
        payload:data
      }
}
export function regfailetAC(msg){
    return{
        type:REGISTER_FAILED,
        payload:msg
    }
}
export function loginAC (data){
    return{
        type:LOGIN_USER,
        payload:data
    }
}

export function authTokenAc (data){
    return{
        type:LOAD_USER,
        payload:data
    }
}
export function logauth (){
    return{
         type:LOGOUTH_USER
        
    }
}
