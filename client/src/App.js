import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AOS from 'aos'
import Nav from './Components/Nav/Nav'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import SignUp from './Pages/SignUp/SignUp'
import SignIn from './Pages/SignIn/SignIn'
import NotFound from './Pages/NotFound/NotFound'
import MyAccount from './Pages/MyAccount/MyAccount'
import ViewProduct from './Pages/ViewProduct/ViewProduct'

function App() {

  AOS.init()

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/my-account' element={<MyAccount />} />
        <Route path='/product/:id' element={<ViewProduct />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
