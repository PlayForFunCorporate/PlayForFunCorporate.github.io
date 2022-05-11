import './App.css';
import Header from '../Header/Header.js';
import { Routes, Route, Link } from "react-router-dom";

import Home from '../../pages/Home/Home';
import Settings from '../../pages/Settings/Settings';
import PFF_2048 from '../../pages/PFF_2048/PFF_2048';
import Login from '../../pages/Login/Login';
import Profile from '../../pages/Profile/Profile'
import Stats from '../../pages/Stats/Stats';

function App() {
  return (
      <div className="App">
        <Header app="true" settings ="true" user="Damien">PlayForFun</Header>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Settings" element={<Settings />}/>
          <Route path="/Profile" element={<Profile />}/>
          <Route path="/Stats" element={<Stats />}/>

          {/* <Route path="/PFF_Pendu" element={<PFF_Pendu />}/> */}
          {/* <Route path="/PFF_Tetris" element={<PFF_Tetris />}/> */}
          <Route path="/PFF_2048_Page" element={<PFF_2048 />}/>
          {/* <Route path="/PFF_Snake" element={<PFF_Snake />}/> */}
        </Routes>  
      </div>
  );
}

export default App;
