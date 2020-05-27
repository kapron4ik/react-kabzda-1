import React from 'react';
import './App.css';
import Header from './coponents/Header/Header';
import Navbar from './coponents/Navbar/Navbar';
import Profile from './coponents/Profile/Profile';
import Dialogs from "./coponents/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./coponents/News/News";
import Music from "./coponents/Music/Music";
import Settings from "./coponents/Settings/Settings";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                < Header/>
                < Navbar/>
                <div className='app-wrapper-content'>
                    < Route path="/dialogs" component={Dialogs}/>
                    < Route path="/profile" component={Profile}/>
                    < Route path="/news" component={News}/>
                    < Route path="/music" component={Music}/>
                    < Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
