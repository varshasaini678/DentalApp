import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Header from './components/header';
import Advantage from './components/advantage';
import Slider from './components/slider';
import Carousal from './modules/carousal';
import MovingText from 'react-moving-text'
import Explore from './components/explore';

function App() {
  return (
    <div class="pt-10 px-10">
      <div>
        <Header/>
      <Advantage/>
      </div>
    <div className='flex'> 
    <Explore/>
    {/*<div>
    <MovingText
                type="fadeInFromBottom"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="8"
                fillMode="none">
    <h1 class="text-6xl">
      EXPLORE OUR SERVICE, MAKE YOUR SMILE SHINE
      </h1> 
      </MovingText>
      <div class="mt-14">  <button class='rounded-full border-1 px-4 py-1 bg-orange-600 text-white'>Get the App</button>
                <button class='rounded-full border-1 px-4 py-1 border-black border'>Meet the team</button>
       </div> 
         
  </div>*/}
    <Carousal/> <Carousal/></div>
  
    </div>
  );
}

export default App;
