import '../text.css';
import MovingText from 'react-moving-text'
import { useState, useRef, useEffect} from "react"; 


function Explore() {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const ref = useRef(null);
  
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);

          },   { rootMargin: "-200px"});
          observer.observe(ref.current);
          return () => observer.disconnect();
      }, []);
      console.log(isIntersecting);

    let classes = isIntersecting?"text-6xl txt showit":"text-6xl txt "
  return (
    <div class="self-center grow">
        <div class={classes} ref={ref}>
        EXPLORE OUR
        </div> 
        <div class={classes}>
        SERVICE, MAKE 
        </div> 
        <div class={classes}>
        YOUR SMILE 
        </div> 
            
      <div class="mt-14" >  <button class='rounded-full border-1 px-4 py-1 bg-orange-600 text-white'>Get the App</button>
                <button class='rounded-full border-1 px-4 py-1 border-black border'>Meet the team</button>
       </div>
         
    </div>
  
  );
}

export default Explore;
