import React from 'react';
import Logo from '../../assets/images/logo.png';
import './Header.css';
import { FaPizzaSlice } from 'react-icons/fa';
import { MdAddBox } from 'react-icons/md';

export const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src={Logo} alt="Todoist" />
        </div>
        <div className="settings">
          <a>
            <MdAddBox />
          </a>
          <a>
            <FaPizzaSlice />
          </a>
        </div>
      </nav>
    </header>
  );
};
