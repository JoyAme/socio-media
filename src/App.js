// import './App.css';
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Home from './Home';
import Headerr from './components/Header/Headerr';
import { Global } from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <Global/>
    <BrowserRouter>
    <Headerr/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
