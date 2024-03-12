import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Orbit from './components/Pages/Orbit/Orbit';
import Lamp from './components/Pages/Lamp/Lamp';
import System from './components/Pages/Planet/System';
// import TodoList from './components/Components/ToDo/TodoList';
// import Converter from './components/Components/Converter/Converter';
import Login from './components/Pages/Home/Login.jsx';
import './css/App.css'
import Instructions from './components/Pages/Instructions/Instructions.jsx';

function App() {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<Login/>}></Route>
                    <Route path='/planet' element={<System/>}/>
                    <Route path="/orbit" element={<Orbit/>}/>
                    <Route path="/lamp" element={<Lamp/>}></Route>
                    <Route path='/instructions' element={<Instructions/>}></Route>
                    <Route index element={<Login/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

//have an instructions page before going into study spaces

export default App
