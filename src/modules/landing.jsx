import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img5 from '../images/img5.jpg'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import '../text.css';
import { useState } from 'react';

import CircleIcon from '@mui/icons-material/Circle';
import { useRef } from 'react';
const imgArr = [img1,img2,img3,img5];

const LandingContent = ()=>{
    const container = useRef();
    const txt = useRef();
    const [upIndex,setIndex]=useState([]);
  
  
    useGSAP(
      () => {
        const boxes = gsap.utils.toArray('#swipeUp');
        txt.current = gsap.from(boxes, {
          duration: 1.5,
          yPercent: 100,
          ease: 'power3',
          stagger: 0.1,
        });
      },
      { scope: container }
    );
    const handleMoveUp = (index)=>{
        setIndex([...upIndex,index]);
    }
    return (
        <div ref={container} class='flex justify-around h-screen'>
           
            <div id="swipeUp" class="self-center text-8xl" ref={txt}>
                <h6>Our Advantages</h6>
                <div></div>
                <div class=''>
                    {imgArr.map((imgPath,index)=>{
                        let rotate;
                        switch(index){
                            case (0):
                                rotate='-rotate-12';
                                break;
                            case (1):
                                    rotate='-rotate-18';
                                break;
                                    
                            case (2):
                                rotate='-rotate-24';
                                break;

                            case (3):
                                rotate='-rotate-30';
                                break;
                        }
                        if(upIndex.includes(index)){
                            rotate+=' moveup'
                        }
                        return (
                        <img height="300" width="220" className={"centered "+rotate} src={imgPath} onClick={()=>handleMoveUp(index)}/>
                    )})}
                </div>
            </div>
            
        </div>
    )
}
export default LandingContent