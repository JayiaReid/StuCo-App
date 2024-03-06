import 'animate.css';
import './Orbit.css'; 
import Head1 from '../../Components/Header/Head1.jsx';
import Head0 from '../../Components/Header/Head0.jsx';
import React, { useState, useEffect, useRef } from 'react';
import PomodoroTimer from '../../Components/Timer/PomodoroTimer.jsx';
import Calculator from '../../Components/Calculator/Calculator.jsx';
import TodoList from '../../Components/ToDo/TodoList.jsx';
//pomodoro: prompt amount of pomodoro
function Orbit(){
    
    return(
        <div>
            <Head0/>
            <Head1/>
            <TodoList inputBg='#54f7f8'/>
            <Calculator/>
            <div id="StudyTimer">
                <div id="orbitContainer">
                    <div id="orbitCircle">
                        {/* <div className="orbiter"></div> */}
                    </div>
                    <span className="ripple stopripple"></span>
                </div>
                <PomodoroTimer/>
            </div>
        </div>
    );
}

export default Orbit