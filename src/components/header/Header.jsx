import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='headerContainer'>
      <ul>
        <li>
          <a href='#'>home</a>
        </li>
        <li>
          <a href='#'>about us</a>
        </li>
        <li>
          <a href='#'>products</a>
        </li>
        <li>
          <a href='#'>contact us</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
