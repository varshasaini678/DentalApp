import '../App.css';
import { carousalArr } from '../config';


//used to render up down moving image carousal
const Carousal = ({dir})=>{
    const direction = dir?'slide-track-down':'slide-track-up';
    
    return (
    <div class="slider">
        <div class={direction}>
            {carousalArr
            .map((item)=>{
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