// Header.jsx
import React from 'react';
import Logo from './Logo';

function Header() {
    return (
        <div className='header'>
            <div className='flex items-center justify-between'>
                <div>
                    <Logo />
                </div>
                <div className=''>
                    <nav className=''>
                        <ul className='flex items-center justify-between w-[230px] linkBox'>
                            <li className='text-[1.3rem] cursor-pointer link'>
                                <a href="#about-me">About Me</a>
                            </li>
                            <li className='text-[1.3rem] cursor-pointer link'>
                                <a href="#projects">Projects</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;
