import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import basicData from './data/sidebar_data.json';
import Login from './components/Login';

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"



function App() {
  const [activeContentId, setActiveContentId] = useState(0)
  const [ActiveComponet, setActiveComponent] = useState('')
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if(activeContentId !== 0){
      const ActiveBasicData = basicData.find(data => data.id === activeContentId)
      setActiveComponent(ActiveBasicData.componentName)
    }  
  }, [activeContentId])

  console.log(isAuth)

  return (
    <Router>
      <div className="App">
        <Navbar isAuth={isAuth} setIsAuth={setIsAuth}></Navbar>
        <div className='App-content'>
          <Routes>
              <Route path="/" element={
                <>
                  <Sidebar 
                    basicData={basicData} 
                    activeContentId={activeContentId} 
                    setActiveContentId={setActiveContentId}  
                  />
                  <Main
                    ActiveComponet={ActiveComponet}
                    isAuth={isAuth}
                  />
                </>
              } />
              <Route path="login" element={<Login setIsAuth={setIsAuth} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
