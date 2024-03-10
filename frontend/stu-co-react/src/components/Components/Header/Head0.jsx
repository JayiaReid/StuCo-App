import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuIcon from '../../../assets/app.png';
import convIcon from '../../../assets/measuring-tape.png';
import toIcon from '../../../assets/checklist.png'
import calcIcon from '../../../assets/calculator.png'
import HomeIcon from '../../../assets/home.png'

export default function Head0({ toggleTodoList, toggleCalculator, toggleConverter}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [spaceDropdown, openSpaceDropdown]= useState(false);

    function showMenu() {
        setIsMenuOpen(true);
    }

    function exitMenu() {
        setIsMenuOpen(false);
    }

    function studySpaceOptionsOpen(){
        openSpaceDropdown(!spaceDropdown);
    }

    return (
        <nav>
            <ul id='head0' className={isMenuOpen ? 'animated-open' : 'animated'}>
                <li><Link className='links' to='/login'><img title='spaces' src={HomeIcon}/></Link></li>
                <li onClick={toggleCalculator}><Link className='links'><img title='spaces' src={calcIcon}/></Link></li>
                <li onClick={toggleTodoList}><Link className='links'><img title='to-do list' src={toIcon}/></Link></li>
                <li onClick={toggleConverter}><Link className='links'><img title='converter' src={convIcon}/></Link></li>
                <li className='links' ><img title='spaces' src={menuIcon}/></li>
                {/* {spaceDropdown && (
                    <div>
                        <ul id='ssdd'>
                            <li><Link className="ssddlink" to='/orbit'>Orbit: Pomodoro</Link></li>
                            <li><Link className="ssddlink"  to='/lamp'>Lamp: Timer</Link></li>
                            <li><Link className="ssddlink"  to='/planet'>Planet: Stopwatch</Link></li>
                        </ul>
                    </div>
                )} */}
                {/* <div className="exitIcon"><img src={exitIcon} onClick={exitMenu}/></div> */}
            </ul>
            {/* <div className="menuIcon"><img title='utilities' src={menuIcon} onClick={showMenu}/></div> */}
        </nav>
    );
}
