import './App.css';
import { BasketProvider } from './context/basketContext';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import Basket from './pages/basket';
import { IntlProvider } from "react-intl";

function App() {
  return (
    <IntlProvider locale="tr">
      <BasketProvider>
        <>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/basket' element={<Basket />} />
          </Routes>
        </>
      </BasketProvider>
    </IntlProvider>

  );
}

export default App;
