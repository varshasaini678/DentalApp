import React, { useEffect, useState } from 'react';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import '../text.css';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function Loader() {
  const container = useRef();
  const tl = useRef();
  const [classes,setClass]=useState('');
  
    useEffect(()=>{
        setTimeout(()=>{
            setClass('hide-icons')
        },3000)
    },[]);
  useGSAP(
    () => {
      const icons = gsap.utils.toArray('#moving');
      tl.current = gsap.timeline()
      .fromTo(icons[0], { x: -40 }, { duration: 1,rotation: 180, x: 0 })
      .fromTo(icons[1], { x: -40 }, { duration: 1, rotation: 360,x: 0 }, "<")
      .fromTo(icons[2], { x: 40 }, { duration: 1,rotation: 180, x: 0 },'<')
      .fromTo(icons[3], { x: 40 }, { duration: 1, rotation: 360,x: 0 }, "<")
        .from(icons[0], {  y:-30,rotation: 360 , duration: 0.7 })
        .from(icons[1], { y:-30, rotation: 180, duration: 0.7   },'<')
        .from(icons[2], { y:30, rotation: -90, duration: 0.7   },'<')
        .from(icons[3], { y:30, rotation: -180, duration: 0.7   },'<')
        .to(icons[0], {  x:80, duration: 1 ,opacity:0})
        .to(icons[1], { x:20,  duration: 1 ,opacity:0 },'<')
        .to(icons[2], { x:-20,  duration: 1 ,opacity:0 },'<')
        .to(icons[3], { x:-80,  duration: 1 ,opacity:0 },'<')
    },
    { scope: container }
  );

  return (
    <div class="loader flex flex-col items-center justify-center text-orange-600" ref={container}>
        <div class={classes}>
            <ArrowCircleLeftIcon id='moving'/>
            <ArrowCircleDownIcon id='moving'/>
            <ArrowCircleLeftIcon id='moving' />
            <ControlPointIcon id='moving'/>
            <ControlPointIcon id="static"/>
        </div>
        <div id="loader-name" class="text-4xl">DENTYTECH</div>
        
      
    </div>
  );
}
