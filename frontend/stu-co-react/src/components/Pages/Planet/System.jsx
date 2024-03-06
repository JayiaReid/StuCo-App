import Head0 from "../../Components/Header/Head0";
import Timer from "../../Components/Timer/Stopwatch.jsx";
import Head1 from "../../Components/Header/Head1.jsx";
import './System.css'
import Calculator from "../../Components/Calculator/Calculator.jsx";
import TodoList from "../../Components/ToDo/TodoList.jsx";

function System(){
    return(
        <div id="main">
            <Head0/>
            <Head1/>
            <Timer/>
            <Calculator buttonClassName="calcplanet"/>
            <TodoList inputBg='#ffc400'/>
            <div id="planet">
                <div id="satel"></div>
            </div>
            
        </div>
    );
}

export default System