import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Orbit from './components/Pages/Orbit/Orbit';
import Lamp from './components/Pages/Lamp/Lamp';
import System from './components/Pages/Planet/System';
import TodoList from './components/Components/ToDo/TodoList';

function App() {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/todo' element={<TodoList/>}></Route>
                    <Route path='/planet' element={<System/>}/>
                    <Route path="/orbit" element={<Orbit/>}/>
                    <Route path="/lamp" element={<Lamp/>}></Route>
                    <Route index element={<Lamp/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
//condtion rendering study timer vs break timer (solar system)

export default App
