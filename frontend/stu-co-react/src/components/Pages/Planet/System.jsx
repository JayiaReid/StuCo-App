import Head0 from "../../Components/Header/Head0";
import Timer from "../../Components/Timer/Stopwatch.jsx";
import Head1 from "../../Components/Header/Head1.jsx";
import './System.css'
import Calculator from "../../Components/Calculator/Calculator.jsx";
import TodoList from "../../Components/ToDo/TodoList.jsx";
import { useState } from "react";
import Converter from "../../Components/Converter/Converter.jsx";

function System(){
    const [showTodoList, setShowTodoList] = useState(false);
    const [showCalculator, setShowCalculator] = useState(false);
    const [showConverter, setShowConverter]=useState(false);
    return(
        <div className="spaces" id="main">
            <Head0 
                toggleTodoList={() => setShowTodoList(!showTodoList)}
                toggleCalculator={() => setShowCalculator(!showCalculator)}
                toggleConverter={() => setShowConverter(!showConverter)}
            />
            <Head1/>
            {showTodoList && <TodoList inputBg='#ffc400'/>}
            {showCalculator && <Calculator buttonClassName="calcplanet"/>}
            {showConverter && <Converter bgcolor="#ffc400"/>}
            <Timer/>
            <div id="planet">
                <div id="satel"></div>
            </div>
            
        </div>
    );
}

export default System