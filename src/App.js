import './App.css';
import { BasketProvider } from './context/basketContext';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import Basket from './pages/basket';

function App() {
  return (

    <BasketProvider>
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/basket' element={<Basket />} />
        </Routes>
      </>
    </BasketProvider>


  );
}

export default App;
