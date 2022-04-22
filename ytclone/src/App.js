import './App.css';
import Sidebar from './components/sidebar';
import MainVideo from './components/video';


function App() {
  return (
    <div className='mainbox'>
      
      <div className='vidbox'>
        <MainVideo></MainVideo>
      </div>
      <Sidebar></Sidebar>
      
    </div>
  );
}

export default App;
