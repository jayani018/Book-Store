import React from 'react';
import './App.css';
import {NavBar} from "./view/common/navbar/NavBar";
import {MainContent} from "./view/common/mainContent/MainContent";

import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <MainContent/>
        </BrowserRouter>
    );
}

export default App;