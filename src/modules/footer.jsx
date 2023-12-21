import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import CircleIcon from '@mui/icons-material/Circle';
const Footer = ()=>{
    return (
        <div class='flex fixed w-full pr-20 justify-between items-center bottom-5 text-xs'>
           
            <div class="self-center">
                <CircleIcon color='warning' fontSize='small'/>
                <h6>Your Smile Our Passion</h6>
            </div>
            <div class='flex-col'>
                <div class='flex justify-between'>
                    <FacebookIcon/>
                    <InstagramIcon/>
                    <YouTubeIcon/>
                </div>
                <div>Best StartUp of 2023</div>
            </div>
        </div>
    )
}
export default Footer