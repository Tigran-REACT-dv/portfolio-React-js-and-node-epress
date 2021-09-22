import './App.css';
import PladGold from './components/PladGold/PladGold';
import Login from './components/Login/Login';
import Header from "./components/Header/Header"
import Register from './components/Login/Register';
import {Router, Route, Redirect,useLocation, Switch } from "react-router-dom";
function App() {

  const history = useLocation();
  if(history.pathname==="/"){
    return <Redirect to="/home"/>
  }
  return (
    <div className="App">
        
               <Header/>
               <Switch>
                 <Route exact path="/home" component={PladGold}/>
                 <Route exact path="/login" component={Login}/>
                 <Route exact path="/register" component={Register}/>
                </Switch>

                 
              
           
       
    </div>
  );
}

export default App;
