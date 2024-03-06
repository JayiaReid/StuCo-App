import 'animate.css';
import './timer.css';
import React, { useState, useEffect, useRef } from 'react';
import stopIcon from '../../../assets/pause.png';
import startIcon from '../../../assets/pstart.png';
import restartIcon from '../../../assets/refresh.png';

//game in between break
function PomodoroTimer({ onTimeChange }) {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [pomodoro, setPomodoro] = useState(0);
    const [check, setCheck] = useState(false);
    const intervalIdRef = useRef(null);
    const startTimeref = useRef(0);
    const pomodoroDuration = 1500; // 25 minutes in seconds

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                const now = Date.now();
                const elapsed = now - startTimeref.current;
                setElapsedTime(prevElapsedTime => prevElapsedTime + elapsed);
                startTimeref.current = now;
            }, 1000);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        };
    }, [isRunning]);

    useEffect(() => {
        if (elapsedTime >= pomodoroDuration * 1000) {
            setElapsedTime(0);
            setCheck(false);
            setPomodoro(prevPomodoro => prevPomodoro + 1);
            setIsRunning(false);
            alert("Pomodoro is finished! Take a walk and come back!");
        }
    }, [elapsedTime]);

    function start() {
        setIsRunning(true);
        startTimeref.current = Date.now();
        const orbitElement = document.querySelector('.ripple');
        orbitElement.classList.remove('stopripple');
        // const orbiter = document.querySelector('.orbiter');
        // orbiter.classList.remove('stop');
        // orbiter.classList.add('move');
    }

    function stop() {
        setIsRunning(false);
        const orbitElement = document.querySelector('.ripple');
        orbitElement.classList.add('stopripple');
        // const orbiter = document.querySelector('.orbiter');
        // orbiter.classList.remove('move');
        // orbiter.classList.add('stop');
        
    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
        const orbitElement = document.querySelector('#orbitCircle');
        orbitElement.classList.remove('orbitCircleMove');
        orbitElement.classList.add('orbitCircleStop');
        setPomodoro(0);
        setCheck(false);
    }

    function formatTime() {
        let seconds = Math.floor((pomodoroDuration - elapsedTime / 1000) % 60);
        let mins = Math.floor((pomodoroDuration - elapsedTime / 1000) / 60);

        seconds = String(seconds).padStart(2, "0");
        mins = String(mins).padStart(2, "0");

        return `00:${mins}:${seconds}`;
    }

    function handlePomodoro() {
        setCheck(true);
    }

    return (
        <div id="ptimer" onMouseOver={handlePomodoro}>
            <h2 className="animate__animated animate__bounce">Pomodoros: {pomodoro}</h2>
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <img onClick={start} src={startIcon} alt="Start"/>
                <img onClick={stop} src={stopIcon} alt="Stop"/>
                <img onClick={reset} src={restartIcon} alt="Restart"/>
            </div>
        </div>
    );
}

export default PomodoroTimer;
