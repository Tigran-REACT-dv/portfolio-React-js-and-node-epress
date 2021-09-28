import './App.css';
import PladGold from './components/PladGold/PladGold';
import Login from './components/Login/Login';
import Header from "./components/Header/Header"
import Register from './components/Login/Register';
import { Route, Redirect, useLocation, Switch, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const history = useLocation();
  if (history.pathname === "/") {
    return <Redirect to="/home" />
  }


  return (
    <div className="App">

      <Header />
      <Switch>
        <Route exact path="/home" component={PladGold} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>





    </div>
  );
}

export default App;
