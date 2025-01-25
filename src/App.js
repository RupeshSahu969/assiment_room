import logo from './logo.svg';
import './App.css';
import Reg from './Components.js/Reg';
import { Route, Routes } from 'react-router-dom';
import Show from './Components.js/Show';
import Edit from './Components.js/Edit';
import ProductPages from './Pages/ProductPages';

function App() {
  return (
    <div>
      {/* <Routes>
        <Route  path='/' element={<Reg/>}/>
        <Route  path='/show' element={<Show/>}/>
        <Route  path='/edit/:id' element={<Edit/>}/>
      </Routes> */}

<ProductPages/>

    </div>
  );
}

export default App;
