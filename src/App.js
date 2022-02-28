import { useState } from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import NavBar from "./components/navBar/NavBar";
import ResSociale from "./components/ResSociale/ResSociale";
import SideBar from "./components/sideBar/SideBar";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <Router>
      <Switch>
      <Route path='/ResSociale' exact component={ResSociale}/>
      <NavBar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      { openMenu ? <SideBar openMenu={openMenu} setOpenMenu={setOpenMenu}/> : null}
      </Switch>
      </Router>
    </>
  );
}

export default App;
