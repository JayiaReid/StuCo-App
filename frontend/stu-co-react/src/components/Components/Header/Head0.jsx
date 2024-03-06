import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import menuIcon from '../../../assets/app.png';
import exitIcon from '../../../assets/cross.png';

export default function Head0(props){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [spaceDropdown, openSpaceDropdown]=useState(false);

    function showMenu() {
        setIsMenuOpen(true);
    }

    function exitMenu() {
        const head0 = document.querySelector('#head0');
        head0.classList.add('animated-close');
        head0.classList.remove('animated-open');
        setIsMenuOpen(false);
    }

    function studySpaceOptionsOpen(){
        if(spaceDropdown){
            openSpaceDropdown(false);
        }else{
            openSpaceDropdown(true);
        }
    }

    return (
        <nav>
            <ul id='head0' className={isMenuOpen ? 'animated-open' : 'animated'}>
                <li><Link className='links'>Home Page</Link></li>
                <li><Link className='links'>Calculator</Link></li>
                <li><Link className='links'>Notes App</Link></li>
                <li><Link className='links'>To-Do List</Link></li>
                <li className='links' onClick={studySpaceOptionsOpen}>Study Spaces</li>
                    {spaceDropdown && (<div>
                        <ul id='ssdd'>
                            <li><Link className="ssddlink" to='/orbit'>Orbit: Pomodoro</Link></li>
                            <li><Link className="ssddlink"  to='/lamp'>Lamp: Timer</Link></li>
                            <li><Link className="ssddlink"  to='/planet'>Planet: Stopwatch</Link></li>
                        </ul>
                    </div>)}
                <div className="exitIcon"><img src={exitIcon} onClick={exitMenu}/></div>
            </ul>
            <div className="menuIcon"><img title='utilities' src={menuIcon} onClick={showMenu}/></div>
        </nav>
    );
}
