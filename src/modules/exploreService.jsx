import '../text.css';
import { useState, useRef, useEffect} from "react"; 
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

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
      console.log(isIntersecting);

    let classes = isIntersecting?"text-6xl ":"text-6xl  "
  return (
    <div class="self-center grow">
        <div class={classes} ref={ref} id="explore">
        EXPLORE OUR
        SERVICE, MAKE
        YOUR SMILE 
        </div> 
            
      <div class="mt-14" >  <button class='rounded-full border-1 px-4 py-1 bg-orange-600 text-white moveus'>Get the App</button>
                <button class='rounded-full border-1 px-4 py-1 border-black border moveus'>Meet the team</button>
       </div>
         
    </div>
  
  );
}

export default ExploreService;
