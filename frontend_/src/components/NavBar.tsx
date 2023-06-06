import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <Link to='/'>
        {/* <img src={Logo} alt="logo"  /> */}
        logo
      </Link>

      <Link
        to='/'
        style={{
          textDecoration: 'none',
          color: '#3A1212',
          borderBottom: '3px solid #FF2625',
        }}
      >
        Home
      </Link>
      <a href='#exercises'>Exercises</a>
    </div>
  );
}

export default NavBar;
