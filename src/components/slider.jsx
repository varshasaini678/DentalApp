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
const Slider = ()=>{
    const arr = [car1,car2,car3,car4,img1,img2,img3,img4,car1,car2,car3,car4,img1,img2,img3,img4];
    return (<div class="slider">
	<div class="slide-track-up">
    <div class="slide">
			<img src={car1} height="350" width="250" alt=""/>
		</div>
		<div class="slide">
			<img src={car2} height="350" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={car3} height="350" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={car4} height="350" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={img1} height="350" width="250" alt="" />
		</div>	
        <div class="slide">
			<img src={img2} height="350" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={img3} height="350" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={img4} height="350" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={car4} height="350" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={car1} height="350" width="250" alt="" />
		</div> <div class="slide">
			<img src={car1} height="350" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={car2} height="350" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={car3} height="350" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={car4} height="350" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={img1} height="350" width="250" alt="" />
		</div>
        <div class="slide">
			<img src={img2} height="350" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={img3} height="350" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={img4} height="350" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={car4} height="350" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={car1} height="350" width="250" alt="" />
		</div> <div class="slide">
			<img src={car1} height="350" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={car2} height="350" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={car3} height="350" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={car4} height="350" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={img1} height="350" width="250" alt="" />
		</div>	
        <div class="slide">
			<img src={img2} height="350" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={img3} height="350" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={img4} height="350" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={car4} height="350" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={car1} height="350" width="250" alt="" />
		</div> <div class="slide">
			<img src={car1} height="350" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={car2} height="350" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={car3} height="350" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={car4} height="350" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={img1} height="350" width="250" alt="" />
		</div>	\
        <div class="slide">
			<img src={img2} height="350" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={img3} height="350" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={img4} height="350" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={car4} height="350" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={car1} height="350" width="250" alt="" />
		</div>
		
	</div>
</div>)
}

export default Slider