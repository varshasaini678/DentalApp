import MenuIcon from '@mui/icons-material/Menu';

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import { useEffect,useState } from 'react';
const Header = ()=>{
    const [classes,setClass] = useState('');

    useEffect(()=>{
        setTimeout(()=>{
            setClass('show');
        },10)
    },[])

    return (
        <div class='flex fixed left-10 right-10 justify-between items-center'>
            <div className=''>
                <button class='rounded-full border-2 px-4 py-1 border-black'> Menu</button>
                <button class='rounded-full border-2 p-1 border-black'><MenuIcon/></button>
            </div>
            <div class="self-center flex items-center">
                <div><SpaOutlinedIcon color='warning'/></div>
                <div className={'header-icon-text '+classes}>DENTYTECH</div>
            </div>
            <div className=''>
                <button class='rounded-full border-2 px-4 py-1 border-black mx-2'>Log In</button>
                <button class='rounded-full border-1 px-4 py-1 text-white bg-orange-600'>Sign In</button>
            </div>
        </div>
    )
}
export default Header