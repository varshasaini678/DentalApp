import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
const imgArr = [img1,img2,img3,img4];
const Advantage = ()=>{
    return (
        <div class="flex justify-center align-middle">
            <div class='flex  justify-center'>
                <h1 class='text-8xl absolute'>Our Advantages</h1>
                <div class=''>
                    {imgArr.map((imgPath,index)=>{
                        let rotate;
                        switch(index){
                            case (0):
                                rotate='-rotate-12';
                                break;
                            case (1):
                                    rotate='-rotate-18';
                            case (2):
                                rotate='-rotate-24';
                            case (3):
                                rotate='-rotate-30';
                            
                        }
                        return (
                        <img className={"w-60 h-65 origin-bottom  absolute object-cover rounded-3xl "+rotate} src={imgPath}/>
                    )})}
                </div>
            </div>
        </div>
    )
}

export default Advantage