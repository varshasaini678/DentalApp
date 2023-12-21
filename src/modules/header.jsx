import MenuIcon from '@mui/icons-material/Menu';

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
const Header = ()=>{
    return (
        <div class='flex fixed w-full justify-between items-center'>
            <div className=''>
                <button class='rounded-full border-1 px-4 py-1 border-black border'> Menu</button>
                <button class='rounded-full border-1 p-1 border-black border'><MenuIcon/></button>
            </div>
            <div class="self-center">
                <AddCircleRoundedIcon color='warning'/>
                DENTYTECH
            </div>
            <div className=''>
                <button class='rounded-full border-1 px-4 py-1 border-black border mx-2'>Log In</button>
                <button class='rounded-full border-1 px-4 py-1 text-white bg-orange-600'>Sign In</button>
            </div>
        </div>
    )
}
export default Header