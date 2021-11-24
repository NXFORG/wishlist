import React from 'react';
import * as Pages from './pages/index';
import { Header } from './components/index';
import { Footer } from './components/index';
import { Routes, Route } from 'react-router-dom';
import './style.css';

function App (){
    return(
        <div id='app'>
                <Header />
                <Routes>
                    <Route exact path='/' element={<Pages.Home />}/>
                    <Route exact path='/login' element={<Pages.Login />}/>
                    <Route exact path='/gift' element={<Pages.Gift />}/>
                </Routes>
                <Footer />
        </div>
    )
}

export default App;