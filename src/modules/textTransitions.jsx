import '../text.css';
import { useState, useRef, useEffect} from "react"; 
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import img2 from '../images/jpeg-optimizer_img2.jpg'
import img1 from '../images/jpeg-optimizer_img1.jpg'
import img3 from '../images/jpeg-optimizer_img3.jpg'
import img5 from '../images/jpeg-optimizer_img5.jpg'
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined';
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
function TextTransitions() {
  
    const [isIntersecting, setIsIntersecting] = useState(false);

    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);

          },   { rootMargin: "-20px"});
          observer.observe(ref.current);
          return () => observer.disconnect();
      }, []);
      console.log(isIntersecting);

    let classes = isIntersecting?" transform-text":""
  return (
    <div class={"flex flex-col h-screen items-center"+classes} ref={ref}>
        <div class="flex mb-7 mt-10 items-center">
            <div class="text-8xl swipe-text">REVOLUTIONIZING</div>
            <div class="flex flex-col pl-5">
              <div class="flex">
                <div class="round-bg round-sm">
                  <SpaOutlinedIcon color='warning' />
                </div>
                <div class="round-bg  round-sm">
                  <Brightness5OutlinedIcon color='warning' />
                </div>
                <div class="round-bg  round-sm">
                  <HourglassEmptyOutlinedIcon color='warning' />
                </div>
              </div>
              <div class="tiny-text">
                <div class="text-xs ">Modern Solutions</div>
                <div class="text-xs">Timeless Smiles</div>
              </div>
              
            </div>
        </div>
        <div class="flex mb-7 items-center self-start">
              <div class="round-txt-bg">
                <div class="text-orange-600 font-semibold">ASSISTANCE</div>
              </div>
              <div class="">
                <EmojiEmotionsIcon color='warning'/>
              </div>
            <div class="text-8xl ml-5 swipe-text">DENTAL</div>
            <div class="image-croper"> <img class="round-img" src={img2}></img></div>
            <div class="round-bg ">
              <FilterVintageIcon color='warning' />
            </div>
            <div class="text-8xl  ml-5 swipe-text">CARE</div>
        </div>
        <div class="flex mb-7 items-center self-middle">
            <div class="text-8xl swipe-text">WITH TECHNOLOGY</div>
            <div class="image-croper round-img-overlap"> <img class="round-img" src={img1}></img></div>
            <div class="image-croper round-img-overlap"> <img class="round-img" src={img2}></img></div>
            <div class="image-croper round-img-overlap"> <img class="round-img" src={img3}></img></div>
            <div class="image-croper round-img-overlap"> <img class="round-img" src={img5}></img></div>

        </div>
    </div>
  
  );
}

export default TextTransitions;
