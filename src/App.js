import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Header from './components/header';
import Advantage from './components/advantage';
import Slider from './components/slider';
import Carousal from './components/carousal';
function App() {
  return (
    <div className="App">
      <div>
        <Header/>
      <Advantage/>
      </div>
    <div className='flex'> 
    <div>
    <h1 class="text-6xl">
      EXPLORE OUR SERVICE, MAKE YOUR SMILE SHINE
      </h1> 
      <div class="mt-14">  <button class='rounded-full border-1 px-4 py-2 bg-orange-600 text-white'>Get the App</button>
                <button class='rounded-full border-1 px-4 py-2 border-black border'>Meet the team</button>
       </div> 
         
    </div>
    <Carousal/> <Carousal/></div>
  
    </div>
  );
}

export default App;
