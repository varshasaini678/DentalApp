import img1 from '../images/jpeg-optimizer_img1.jpg'
import img2 from '../images/jpeg-optimizer_img2.jpg'
import img3 from '../images/jpeg-optimizer_img3.jpg'
import img5 from '../images/jpeg-optimizer_img5.jpg'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import '../text.css';
import { useState ,useEffect} from 'react';
import { useRef } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
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
        path:img5,
        text:'Appointments'
    },
]
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
      console.log(isIntersecting);

    let classes = isIntersecting?" transform-text":""
   useEffect(()=>{
        if(!isIntersecting){
            //setIndex([]);
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
                        let rotate='';
                        if(upIndex.includes(index)){
                            rotate+=' moveup'
                        }
                        return (
                            <div className={"landing-img-container "+rotate+" "+rotateClass}>
                                <img height="300" width="220"  src={item.path} onClick={()=>handleMoveUp(index)}/>
                                <div className='landing-centered'>{item.text}</div>
                            </div>)
                    })}
                </div>
                {/*<div>
                    <a href='#secondPage'><ArrowDownwardIcon/></a>
                </div>*/}
            </div>
            
        </div>
    )
}
export default LandingContent