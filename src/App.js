import React from "react";
import {
    HashRouter,
    Route,
    Routes,
    Outlet
} from "react-router-dom"
import './App.css';
import Home from "./components/Home/Home";
import Login from "./components/Navigation/Navigationitems/Login";
import Register from "./components/Navigation/Navigationitems/Register";
import HomeHeader from "./components/Home/HomeSections/HomeHeader/HomeHeader";
import Logout from "./components/Navigation/Navigationitems/Logout";

const Layout = () => {
    return (
        <>
            <HomeHeader/>
            <Outlet/>
        </>
    )
}

function App() {
  return (
      <HashRouter>

          <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<Home/>} />

              <Route path='/logowanie' element={<Login />}/>
              <Route path='/wylogowano' element={<Logout/>}/>
              <Route path='/rejestracja' element={<Register />}/>

              </Route>
          </Routes>

      </HashRouter>
  );
}

export default App;