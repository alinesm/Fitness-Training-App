import React from 'react';
import { FaHome, FaMoneyCheckAlt, FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Sidebar() {
  // const location = useLocation();

  // function isActive(buttonPath) {
  //   return location.pathname === buttonPath;
  // }

  //   <Link to="/dashboard/subscription">
  //   <button active={isActive('/dashboard/subscription')}>
  //   {/* ${props => props.active ? 'background-color: #ccc;' : ''} */}
  //     <FaFileContract />
  //     <span>Inscrição</span>
  //   </NavigationButton>
  // </Link>

  return (
    <div className='flex'>
      <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col  items-center'>
          <Link href='/'>
            <div className=' p-2 rounded-lg shadow-lg border-2 border-red-50 inline-block'>
              <img src={logo} alt='' />
            </div>
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <FaHome color='gray' size={20} />
            </div>
          </Link>

          <button className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
            {/* <RxPerson size={20} /> */}
            <FaUserFriends color='gray' size={20} />
          </button>
          <Link href='/orders'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              {/* <HiOutlineShoppingBag size={20} /> */}
              <FaMoneyCheckAlt color='gray' size={20} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
