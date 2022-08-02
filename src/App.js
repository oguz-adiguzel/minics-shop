import './App.css';
import { BasketProvider } from './context/basketContext';
import Home from './pages/home';
function App() {
  return (

    <BasketProvider>
      <>
        <Home />
      </>
    </BasketProvider>


  );
}

export default App;
