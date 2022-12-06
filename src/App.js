import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import basicData from './data/sidebar_data.json';
import { useState, useEffect } from 'react';


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
    <div className="App">
      <Navbar></Navbar>
      <div className='App-content'>
        <Sidebar 
          basicData={basicData} 
          activeContentId={activeContentId} 
          setActiveContentId={setActiveContentId}  
        />
        <Main
          ActiveComponet={ActiveComponet}
        />
      </div>
    </div>
  );
}

export default App;
