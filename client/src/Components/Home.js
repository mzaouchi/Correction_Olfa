import React from 'react'
import { Form,Carousel,Button, Container } from 'react-bootstrap'
import ListProduct from './ListProduct'

export const Home = () => {
    return (
      <div>
  <header>
  <div style={{display:"flex",marginTop:"10px",flexDirection:'column',alignItems:'center'}}>
      <div style={{padding:"1px" ,lineHeight:"2rem"}}>
       <Form.Select placeholder="All Categories" maxWidth="10rem" fontSize={"14px"} border={"none"}>
           <option value="option1">All Categories</option>
              <option value="option1">--Women</option>
              <option value="option2"> ----Clothings</option>
              <option value="option2"> ----Bags</option>
              <option value="option2"> ----Shoes</option>
              <option value="option1">--Men</option>
              <option value="option2"> ----Clothings</option>
              <option value="option2"> ----Shoes</option>
              <option value="option1">--Accessories</option>
              <option value="option2"> ----Women</option>
              <option value="option2"> ----Men</option>      
         </Form.Select>
        
       </div>
        <div style={{width:"70%",height:"10%",padding:"40px"}} className="slideSliderApp">
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/p1.jpg"
            alt="First slide"
            width="50"
            height="700"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3> */}
            {/* <p>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF</p>
            <p>FOR NEW ARRIVALS.</p> */}
            <Button variant="outline-dark" style={{backgroundColor:"black",color:"#fff"}}>Shop Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src="/images/p2.jpg"
            alt="Second slide"
            width="100"
            height="700"
          />
  
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            <Button variant="outline-dark" style={{backgroundColor:"black",color:"#fff"}}>Shop Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/p3.jpg"
            alt="Third slide"
            width="100"
            height="700"
          />
  
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
            <Button variant="outline-dark" style={{backgroundColor:"black",color:"#fff"}}>Shop Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/p4.jpg"
            alt="Third slide"
            width="100"
            height="700"
          />
  
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
            <Button variant="outline-dark" style={{backgroundColor:"black",color:"#fff"}}>Shop Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
     </div>
      </header>
      <main className="Featured">
       <Container>
        <h2>Featured Products</h2>
        <ListProduct/>
       </Container>
      </main>
      </div>
    )
}
