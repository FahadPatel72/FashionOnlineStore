import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import './App.css'



const App = () => {
  return (
    <div className='wrapper'>
       <Navbar/>

      <div>

        <Routes>

         <Route path='/' element={<Home/>} />
         <Route path='/cart' element={<Cart/>} />

        </Routes>

      </div>



    </div>



  )
};

export default App;
