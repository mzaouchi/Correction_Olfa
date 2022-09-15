import React from 'react'
import {Navbar,Nav,Container,FormControl,Dropdown,Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../Redux/Actions/authActions'
export const NavUser = () => {
  const token = localStorage.getItem('token')
  const user = useSelector(state => state.authReducer.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <Navbar bg="dark" variant="dark" style={{    height: "80px",display:'flex',alignItems:'center'}}>

     <Navbar.Brand href="/" style={{marginLeft: "40px"}}>
            <img
              alt=""
              src="/logo55.PNG"
              width="78px"
              height="61px"
              className="d-inline-block align-top"
            />{' '}
      </Navbar.Brand>
      {/* <Navbar.Brand href="#home">Authentification</Navbar.Brand> */}
      <Nav className="me-auto">
        <Nav.Link as={Link} to='/' >OutfitPlus</Nav.Link>
        <Nav.Link as={Link} to='/listProduct'>Products</Nav.Link>
        
        


       <div style={{display:"flex",justifyContent:"space-between", marginLeft:"914px"}}>
        {
          token && user ? 
          <>
          <Nav.Link as={Link} to='/profile' >Profile</Nav.Link>
          <Nav.Link as={Link} to='/addProduct'>AddProduct</Nav.Link>
          <Nav.Link as={Link} to='/' onClick={()=> dispatch(logout())}>Logout</Nav.Link>
          
          </>

          :
          <>
          <Nav.Link as={Link} to='/loggin' >Loggin</Nav.Link>
          </>
        }
        </div>
        
        <Dropdown style={{marginLeft:"100px"}}>
         <Dropdown.Toggle variant="secondary">Cart
         {/* <i class="fa-thin fa-cart-shopping"></i> */}
         </Dropdown.Toggle>
         <Dropdown.Menu style={{minWidth:370}}>
          <span style={{padding: 10 }}>Cart is Empty!</span>
           </Dropdown.Menu>
         </Dropdown>
      </Nav>
  
  </Navbar>
  )
}



          