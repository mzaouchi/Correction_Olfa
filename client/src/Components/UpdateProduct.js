import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getOneProduct, updateProduct } from "../Redux/Actions/ProductActions"

const UpdateProduct=()=>{
    const {id} = useParams()
    const [img,setImg] = useState('')
    const [title,setTitle] = useState('')
    const [price,setPrice] = useState(0)
    const [desc,setDesc] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        dispatch(getOneProduct(id))
    },[])

    const product = useSelector(state=>state.ProductReducer.product)
    useEffect(()=>{
        setImg(product.img)
        setTitle(product.title)
        setPrice(product.price)
        setDesc(product.desc)
    },[product])

    const handleUpdate=(a)=>{
        a.preventDefault()
        dispatch(updateProduct(id,{img,title,price,desc}))
        navigate('/listProduct')
    }
    return(
       <Form enctype="multipart/form-data" className="formO">
        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image</Form.Label>
          <Form.Control value={img} onChange={(e)=> setImg(e.target.value)} type="text" placeholder="Enter image"  />      
        </Form.Group> */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control value={title} onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="Enter title"  />      
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control value={price} onChange={(e)=> setPrice(e.target.value)} type="text" placeholder="Enter price" />      
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control value={desc} onChange={(e)=> setDesc(e.target.value)} type="text" placeholder="Enter description" />      
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Picture</Form.Label>
         <br/>
         <input type="file"   onChange={(e)=>setImg(e.target.files[0]) } accept= "image/*"   />        
        </Form.Group>
  
        <Button variant="primary" type="submit" onClick={(e)=> handleUpdate(e)} >
          Update
        </Button>
      </Form>
    )
}

export default UpdateProduct 