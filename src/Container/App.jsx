import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Alta from "../Pages/Alta";
function App() {
    return ( 
        <BrowserRouter>
        <Routes>
            
               <Route path="/" element={<Login/>}/>
              <Route path='/register' element={<Register/>}   />
              <Route path='/autobus' element={<Alta/>}   />
             
        </Routes>
        </BrowserRouter>
     );
}

export default App;