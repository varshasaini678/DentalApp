import '../text.css';
import { useState, useRef, useEffect} from "react"; 
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function TextTransitions() {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const ref = useRef(null);
    useGSAP(
      () => {
        const boxes = gsap.utils.toArray('#explore');
        const buttons = gsap.utils.toArray('.moveus');

        if(false){
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
        /*const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);

          },   { rootMargin: "-20px"});
          observer.observe(ref.current);
          return () => observer.disconnect();*/
      }, []);
      console.log(isIntersecting);

    let classes = isIntersecting?"text-6xl ":"text-6xl  "
  return (
    <div class="flex flex-col h-screen">
        <div class="flex">
            <div>REVOLUTIONIZING</div>
            <div>image</div>
        </div>
        <div class="flex">
            <div>DENTAL</div>
            <div>image</div>
            <div>CARE</div>
            <div>image</div>
        </div>
        <div class="flex">
            <div>WITH TECHNOLOGY</div>
            <div>image</div>
        </div>
    </div>
  
  );
}

export default TextTransitions;
