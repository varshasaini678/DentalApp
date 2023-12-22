import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Header from './modules/header';
import Footer from './modules/footer';
import LandingContent from './modules/landing'
import Carousal from './modules/carousal';
import MovingText from 'react-moving-text'
import ExploreService from './modules/exploreService';
import TextTransitions from './modules/textTransitions';
import { useEffect, useState } from 'react';
import Loader from './modules/loader';
function Landing() {
    const [showLoader,setShowLoader]=useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setShowLoader(false);
        },5000)
    })

    if(showLoader){
        return <Loader/>
    }
  return (
    <div class="pt-5 px-10">
     <Header></Header>
     <LandingContent/>
        <Footer></Footer>
        <TextTransitions/>

        <div className='flex'> 
    <ExploreService/>
    <Carousal/> <Carousal dir={true}/></div>
    </div>
  );
}

export default Landing;
