import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Login from '../Login/Login.jsx';
import Signup from '../Signup/Signup';
import Home from '../Home/Home';
function App(){
    return(
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </Router>
        </>
        
    )
}

export default App;