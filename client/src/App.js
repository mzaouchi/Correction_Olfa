import './App.css';
import { Loggin } from './Components/Loggin';
import { NavUser } from './Components/NavUser';
import { Home } from './Components/Home';
import { Profile } from './Components/Profile';
import { Route, Routes } from 'react-router-dom';
import { Register } from './Components/Register';
import { PrivateRoute } from './Components/PrivateRoute';
import { Errors } from './Components/Errors';
import { Footer } from './Components/Footer';
import ListProduct from './Components/ListProduct';
import AddProduct from './Components/AddProduct';
import UpdateProduct from './Components/UpdateProduct';
import DescProduct from './Components/DescProduct';
import { ShopingCart } from './Components/ShopingCart';


function App() {
  return (
    <div className='d-flex flex-column site-container'>
     {/* <header> */}
      <NavUser/>
      <Errors/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/listProduct' element={<ListProduct/>}/>
        <Route path='/addProduct' element={<PrivateRoute><AddProduct/></PrivateRoute>}/>
        <Route path='/updateProduct/:id' element={<UpdateProduct/>}/>
        <Route path='/DescProduct/:id' element={<PrivateRoute><DescProduct/></PrivateRoute>}/>
        <Route path='/ShopingCart/:id' element={<ShopingCart/>}/>
        <Route path='/Profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>
        <Route path='/Loggin' element={<Loggin/>}/>
        <Route path='/Register' element={<Register/>}/>
      </Routes>
     {/* </header> */}
     <main>
     </main>
     <footer>
        <Footer/>
     </footer>
    </div>
  );
}

export default App;
