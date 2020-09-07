import React from 'react';
import './App.css';
import Navbar from './coponents/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./coponents/News/News";
import Music from "./coponents/Music/Music";
import Settings from "./coponents/Settings/Settings";
import DialogsContainer from "./coponents/Dialogs/DialogsContainer";
import UsersContainer from "./coponents/Users/UsersContainer";
import ProfileContainer from "./coponents/Profile/ProfileContainer";
import HeaderContainer from "./coponents/Header/HeaderContainer";
import LoginPage from "./coponents/login/Login";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                < HeaderContainer/>
                < Navbar/>
                <div className='app-wrapper-content'>
                    < Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    < Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    < Route path="/news" render={() => <News/>}/>
                    < Route path="/music" render={() => <Music/>}/>
                    < Route path="/settings" render={() => <Settings/>}/>
                    < Route path="/users" render={() => <UsersContainer/>}/>
                    < Route path="/login" render={() => <LoginPage/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;