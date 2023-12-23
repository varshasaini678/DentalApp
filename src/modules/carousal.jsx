import '../App.css';
import { useState,useEffect } from 'react';
import car1 from '../images/car1.jpg'
import car2 from '../images/car2.jpg'
import car3 from '../images/car3.jpg'
import car4 from '../images/car4.jpg'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
const imgArr= [
    {
        path:img1,
        text:'Advance Technology'
    },
    {  
        path:img2,
        text:'Convinience'
    }, 
    {  
        path:img3,
        text:'Modern Solution'
    }, 
    {  
        path:img4,
        text:'Appointments'
    },{
        path:car1,
        text:'Advance Technology'
    },
    {  
        path:car2,
        text:'Convinience'
    }, 
    {  
        path:car3,
        text:'Modern Solution'
    }, 
    {  
        path:img1,
        text:'Appointments'
    },{
        path:car4,
        text:'Advance Technology'
    },
    {  
        path:img2,
        text:'Convinience'
    }, 
    {  
        path:car2,
        text:'Modern Solution'
    }, 
    {  
        path:img3,
        text:'Appointments'
    },
]
const Carousal = ({dir})=>{
    const direction = dir?'slide-track-down':'slide-track-up';
    const arr = [car1,car2,car3,car4,img1,img2,img3,img4,car1,car2,car3,car4,img1,img2,img3,img4];

    return (<div class="slider">
	<div class={direction}>
   
		{imgArr
        .map((item,index)=>{
                return (
                    <div class="slide">
                        <div className="slide-img-container ">
                                <img height="350" width="250"  src={item.path}/>
                                <div className='slide-centered'>{item.text}</div>
                            </div>
                    </div> 
                )
        })}
		
		
	</div>
</div>)
}

export default Carousal