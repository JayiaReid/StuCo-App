import React, { useRef } from 'react';
import './lamp.css';
import Head1 from '../../Components/Header/Head1';
import { useNavigate } from 'react-router-dom';
import Head0 from '../../Components/Header/Head0';
import Ttimer from '../../Components/Timer/Ttimer';
import Calculator from '../../Components/Calculator/Calculator';
import TodoList from '../../Components/ToDo/TodoList';

export default function Lamp() {
    function light(){
        const bulb = document.querySelector('.bulb');
        bulb.classList.toggle('off');
        bulb.classList.toggle('on');
    }

    return (
        <div id="lamp">
            <Head0 />
            <div className="container stopswing">
                <div className="bulb" onClick={light} >
                    <div className="filaments" ></div>
                </div>
            </div>
            <TodoList/>
            <Calculator  buttonClassName='calclamp'/>
            <Head1 />
            <Ttimer/>
            <div className="floor">
                
            </div>
        </div>
    );
}
