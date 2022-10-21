import style from './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Main/Main";
import Profile from "./Components/Main/Profile/Profile";
import Newsfeed from "./Components/Main/Newsfeed/Newsfeed";
import Friends from "./Components/Main/Profile/Friends/Friends";
import Messages from "./Components/Main/Messages/Messages";
import Group from "./Components/Main/Group/Group";

function App(props) {
  return (
      <div className={style.wrapper}>
        <Header/>
        <Sidebar/>
        <Main>
            <Routes>
                <Route exact path='/amigo-network' element={<Newsfeed/>}/>
                <Route path='/amigo-network/profile/*' element={<Profile/>}/>
                <Route path='/amigo-network/messages/*' element={<Messages/>}/>
                <Route path='/amigo-network/group' element={<Group/>}/>
            </Routes>
        </Main>
      </div>
  );
}

export default App;
