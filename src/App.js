import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import basicData from './data/sidebar_data.json';
import { useState } from 'react';


function App() {
  const [activeContentId, setActiveContentId] = useState(0)
  console.log(activeContentId)

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='App-content'>
        <Sidebar 
          basicData={basicData} 
          activeContentId={activeContentId} 
          setActiveContentId={setActiveContentId}>
        </Sidebar>
        <Main
          activeContentId={activeContentId}>
        </Main>
      </div>
    </div>
  );
}

export default App;
