import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import basicData from './data/sidebar_data.json';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='App-content'>
        <Sidebar basicData={basicData}></Sidebar>
        <Main></Main>
      </div>
    </div>
  );
}

export default App;
