import MenuIcon from '@mui/icons-material/Menu';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
const Header = ()=>{
    return (
        <div class='flex'>
            <div className='flex-none'>
                <button class='rounded-full border-1 px-4 py-2 border-black border'> Menu</button>
                <button class='rounded-full border-1 p-2 border-black border'><MenuIcon/></button>
            </div>
            <div className='grow'>
                <AddCircleRoundedIcon/>
                DENTYTECH
                </div>
            <div className='flex-none'>
            <button class='rounded-full border-1 px-4 py-2 border-black border'>Log In</button>
                <button class='rounded-full border-1 px-4 py-2 border-black border'>Sign In</button>
            </div>
        </div>
    )
}
export default Header