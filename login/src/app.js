import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './login.js'
import Registration from './registration.js';

function App(){
   return <BrowserRouter>
      <Routes>
         <Route path="/"   element={<Login/>}/>
         <Route path="/registration"   element={<Registration/>}/>
      </Routes>
   </BrowserRouter>
    
    
}
export default App;