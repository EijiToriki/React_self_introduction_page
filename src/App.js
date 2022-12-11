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

  useEffect(() => {
    if(activeContentId !== 0){
      const ActiveBasicData = basicData.find(data => data.id === activeContentId)
      setActiveComponent(ActiveBasicData.componentName)
    }  
  }, [activeContentId])

  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
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
                  />
                </>
              } />
              <Route path="login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
