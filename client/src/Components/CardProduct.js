import { Card, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import {Link} from 'react-router-dom'
// import { deleteProduct } from "../Redux/Actions/ProductActions"
const CardProduct=({product})=>{
    const token = localStorage.getItem('token')
    // const dispatch = useDispatch()
    console.log(product.testImage)
    return(
     <div className="Carte">
        <Card style={{ width: '18rem',margin:'1rem', borderRadius: "10px",boxShadow: "0 5px 10px 0 rgba(195, 197, 198, 0.799" }}>
        <Card.Body className="bodyDiv">
            {/* <Card.Title>{product.img}</Card.Title> */}
            
            <img className="imgCard" src={product?.testImage?.slice(13)} alt="Third slide"/>
            <div className="divDesc">
            <Card.Subtitle className="mb-2 text-muted">{product.title}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">${product.price}</Card.Subtitle>
            <Card.Text>
              {product.desc}
            </Card.Text>          
            </div>
            <div className="divBut">
                {
                    token ?
                    <>
                    <Link className="olButton" to={`/updateProduct/${product._id}`}><Button variant="secondary">Edit Product</Button></Link>
                    <Link className="olButton" to={`/DescProduct/${product._id}`}><Button variant="secondary">Add To Cart</Button></Link>
                    </>
                    :
                    <Link className="olButton" to={`/Loggin`}><Button variant="secondary">Add To Cart</Button></Link>
                }
                
            </div>
            
        </Card.Body>
        </Card>
        </div>
    )
}

export default CardProduct