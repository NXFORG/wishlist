import React from 'react';
import * as Pages from './pages';
import { Header } from './components';
import { Footer } from './components';
import { Routes, Route } from 'react-router-dom';
import './style.css';

function App (){
    return(
        <div id='app'>
                <Header />
                <Routes>
                    <Route exact path='/' element={<Pages.Home />}/>
                </Routes>
                <Footer />
        </div>
    )
}

export default App;