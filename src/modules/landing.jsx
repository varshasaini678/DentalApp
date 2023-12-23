import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import '../text.css';
import { useState ,useEffect} from 'react';
import { useRef } from 'react';
import { imgArr } from '../config';

const LandingContent = ()=>{
    const [isIntersecting, setIsIntersecting] = useState(false);
    const container = useRef();
    const txt = useRef();
    const [upIndex,setIndex]=useState([]);
    const [reveal,setClass] = useState('');
    const [rotateClass,setRotateClass] = useState('');

    useEffect(()=>{
        setTimeout(()=>{
            setClass('reveal');
            setRotateClass('rotate')
        },300)
    },[]);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);

          },   { rootMargin: "-20px"});
          observer.observe(container.current);
          return () => observer.disconnect();
      }, []);

   useEffect(()=>{
        if(!isIntersecting){
            setClass('');
        }else{
            setClass('reveal');
        }
   },[isIntersecting])
  
  
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
                <div class={"swipeup-text "+reveal}>OUR ADVANTAGES</div>
                <div class=''>
                    {imgArr.map((item,index)=>{
                        
                        let rotate=upIndex.includes(index)?' moveup':'';

                        return (
                            <div className={"landing-img-container "+rotate+" "+rotateClass}>
                                <img height="300" width="220"  src={item.path} onClick={()=>handleMoveUp(index)}/>
                                <div className='landing-centered'>{item.text}</div>
                            </div>)
                    })}
                </div>
            </div>
            
        </div>
    )
}
export default LandingContent