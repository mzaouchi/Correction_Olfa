import { useEffect } from "react"
import { Card, Button, Row, Col } from "react-bootstrap"
import { useDispatch,useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import {getOneProduct, deleteProduct } from "../Redux/Actions/ProductActions"
import {Link} from 'react-router-dom'


const DescProduct=()=>{
    const {id} = useParams()
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getOneProduct(id))
    },[])

    const product = useSelector(state => state.ProductReducer.product)

    const navigate = useNavigate()
    return(
        <div className="divDesc">
         <Card style={{ width: '18rem',margin:'1rem' }}>
          <Card.Body className="bodyDiv">
            {/* <Card.Title>{product.img}</Card.Title> */}
            <img className="imgCard" src={product?.testImage?.slice(13)} alt="Third slide"/>
            <div className="divDesc">
            <Card.Subtitle className="mb-2 text-muted">{product.title}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">{product.price}</Card.Subtitle>
            <Card.Text>
              {product.desc}
            </Card.Text>          
            <Card.Text class="counter">
              <button class="Moins">-</button>
              <span class ="Qty">0</span>
              <button class="Plus">+</button>
            </Card.Text>
            </div>
            <div className="divBut">
            <Button className="olButton" variant="secondary" onClick={()=> dispatch(deleteProduct(product._id,navigate))}>Delete</Button>
            <Link to={`/ShopingCart/${product._id}`}><Button className="olButton" variant="secondary">Add To Cart</Button></Link>
            </div>
         </Card.Body>
          </Card>
        </div>  
    )
}

export default DescProduct 