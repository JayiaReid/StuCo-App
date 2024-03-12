import React, { useRef, useState } from 'react';
import './lamp.css';
import Head1 from '../../Components/Header/Head1';
import { useNavigate } from 'react-router-dom';
import Head0 from '../../Components/Header/Head0';
import Ttimer from '../../Components/Timer/Ttimer';
import Calculator from '../../Components/Calculator/Calculator';
import TodoList from '../../Components/ToDo/TodoList';
import Converter from '../../Components/Converter/Converter';

export default function Lamp() {
    const [showTodoList, setShowTodoList] = useState(false);
    const [showCalculator, setShowCalculator] = useState(false);
    const [showConverter, setShowConverter]=useState(false);

    function light(){
        const bulb = document.querySelector('.bulb');
        bulb.classList.toggle('off');
        bulb.classList.toggle('on');
    }

    return (
        <div className='spaces' id="lamp">
            <Head0 
                toggleTodoList={() => setShowTodoList(!showTodoList)}
                toggleCalculator={() => setShowCalculator(!showCalculator)}
                toggleConverter={() => setShowConverter(!showConverter)}
            /><Head1 /><Ttimer/>
            <div className="container stopswing">
                <div className="bulb" onClick={light} >
                    <div className="filaments" ></div>
                </div>
            
            </div>
            {showTodoList && <TodoList inputBg='red'/>}
            {showCalculator && <Calculator buttonClassName='calclamp'/>}
            {showConverter && <Converter bgcolor="red"/>}
            
            {/* <div className="floor">
                
            </div> */}
        </div>
    );
}
