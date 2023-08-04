import './App.css';
import User from './assets/user.svg';
import Cart from './assets/cart.svg';
import Search from './assets/search.svg';
import Close from './assets/close.svg';
import Menu from './assets/menu.svg';

function App() {
  return (
    <div className='w-screen'>
      <div className='flex justify-between items-center bg-primary-color p-5 border-b border-[#474747]'>
        <div className='flex justify-between items-center gap-5'>
          <button>
            <img src={Menu} alt='menu' className='block xl:hidden w-[35px] ' />
          </button>
          <img src='/purveyor_logo.png' alt='logo' className='h-[35px]'/>
        </div>
        <div className='hidden xl:block'>
          <button className='border-r border-white text-white text-sm pr-2 mr-2'>Shop</button>
          <button className='border-r border-white text-white text-sm pr-2 mr-2'>About</button>
          <button className='border-r border-white text-white text-sm pr-2 mr-2'>Knife Makers</button>
          <button className='border-r border-white text-white text-sm pr-2 mr-2'>Sell</button>
          <button className='border-white text-white text-sm'>Contact</button>
        </div>
        <div className='flex xl:hidden justify-center items-center gap-4'>
            <img src={User} alt='user' className='w-[28px]'/>
            <img src={Cart} alt='cart' className='w-[28px]' />
        </div>
      </div>
      <div className='flex justify-between items-center bg-primary-color p-5'>
          <div className='hidden xl:flex justify-between items-center gap-[30px]'>
            <button className='text-white'>NEW KNIVES</button>
            <button className='text-white'>EVERYDAY CARRY</button>
            <button className='text-white'>COLLECTOR GRADE</button>
            <button className='text-white'>INVESTMENT QUALITY</button>
            <button className='text-white'>FIXED BLADES</button>
          </div>
          <div className='flex justify-end xl:justify-between items-center gap-4 w-full xl:w-fit'>
            <div className='grow bg-[#D9D9D9] rounded-lg py-1 px-2 flex justify-between items-center'>
              <img src={Search} alt='search' className='w-[20px]' />
              <input className='grow px-2 bg-[#D9D9D9]' placeholder='Search' />
              <img src={Close} alt='close' className='w-[20px]' /> 
            </div>
            <img src={User} alt='user' className='w-[28px] hidden xl:block'/>
            <img src={Cart} alt='cart' className='w-[28px] hidden xl:block' />
          </div>
      </div>
      
    </div>
  );
}

export default App;
