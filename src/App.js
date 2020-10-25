import React from "react";
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Profile from './components/Profile/Profile'

function App() {
    return (
        <div className="App">
            <Header/>
            <Profile/>
            <Footer/>
        </div>
    );
}

export default App;
