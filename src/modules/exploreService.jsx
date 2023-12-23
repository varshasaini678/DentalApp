import '../text.css';
import { useState, useRef, useEffect} from "react"; 
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined';
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined';


function ExploreService() {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const ref = useRef(null);
    useGSAP(
      () => {
        const boxes = gsap.utils.toArray('#explore');
        const buttons = gsap.utils.toArray('.moveus');

        if(isIntersecting){
          ref.current = gsap.from([...boxes,...buttons], {
            duration: 1.5,
            yPercent: 30,
            ease: 'power3',
            stagger: 0.1,
            delay:0.5
          });
        }
        
      },
      { dependencies:[isIntersecting]}
    );
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
          },   { rootMargin: "-20px"});
          observer.observe(ref.current);
          return () => observer.disconnect();
      }, []);

    let classes = isIntersecting?"self-center grow explore":"self-center grow";
  return (
    <div class={classes}>
        <div class='flex'>
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
        <div class='text-6xl ' ref={ref} id="explore">
          <div class="swipe-text"> EXPLORE OUR</div>
          <div class="swipe-text">  SERVICE, MAKE</div>
          <div class="swipe-text"> YOUR SMILE</div>
        </div> 
        <div class="mt-14" >  <button class='rounded-full border-1 px-4 py-1 bg-orange-600 text-white moveus'>Get the App</button>
          <button class='rounded-full border-1 px-4 py-1 border-black border moveus'>Meet the team</button>
        </div>
         
    </div>
  
  );
}

export default ExploreService;
