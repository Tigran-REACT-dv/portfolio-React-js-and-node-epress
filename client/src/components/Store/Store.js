import { combineReducers, createStore} from "redux"
import { ActiveType } from "./ActiveType";
import { AuthReducer } from "./AuthReducer";
import { PlardReducer } from "./PlardReducer";


const reducer = combineReducers({
    data:PlardReducer,
    auth:AuthReducer,
    active:ActiveType
    })

const store = createStore(reducer)




export default store;