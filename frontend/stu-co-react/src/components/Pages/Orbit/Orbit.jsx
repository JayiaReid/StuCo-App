import 'animate.css';
import './Orbit.css'; 
import Head1 from '../../Components/Header/Head1.jsx';
import Head0 from '../../Components/Header/Head0.jsx';
import React, { useState, useEffect, useRef } from 'react';
import PomodoroTimer from '../../Components/Timer/PomodoroTimer.jsx';
import Calculator from '../../Components/Calculator/Calculator.jsx';
import TodoList from '../../Components/ToDo/TodoList.jsx';
import Draggable from 'react-draggable';
import Converter from '../../Components/Converter/Converter.jsx';

//pomodoro: prompt amount of pomodoro
function Orbit(){
    const [showTodoList, setShowTodoList] = useState(false);
    const [showCalculator, setShowCalculator] = useState(false);
    const [showConverter, setShowConverter]=useState(false);
    
    return(
        <div className='spaces'>
            <Head0 
                toggleTodoList={() => setShowTodoList(!showTodoList)}
                toggleCalculator={() => setShowCalculator(!showCalculator)}
                toggleConverter={() => setShowConverter(!showConverter)}
            />
            <Head1/>
            {showTodoList && <TodoList inputBg='#54f7f8'/>}
            {showCalculator && <Calculator/>}
            {showConverter && <Converter bgcolor="#54f7f8"/>}
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