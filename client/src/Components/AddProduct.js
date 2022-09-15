import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addProduct } from "../Redux/Actions/ProductActions"

const AddProduct=()=>{
    const [img,setImg] = useState('')
    const [title,setTitle] = useState('')
    const [price,setPrice] = useState(0)
    const [desc,setDesc] = useState('')
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleAdd=(a)=>{
        a.preventDefault()
        dispatch(addProduct({img,title,price,desc}))
        navigate('/listProduct')
    }
    return(
        <Form enctype="multipart/form-data" className="formO">        
       
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="Enter title"  />      
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control onChange={(e)=> setPrice(e.target.value)} type="text" placeholder="Enter price" />      
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control onChange={(e)=> setDesc(e.target.value)} type="text" placeholder="Enter description" />      
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Picture</Form.Label>
         <br/>
         <input type="file"   onChange={(e)=>setImg(e.target.files[0]) } accept= "image/*"   />        
        </Form.Group>
  
        <Button variant="secondary" type="submit"  onClick={(e)=>handleAdd(e)}>
          Add
        </Button>
      </Form>
    )
}

export default AddProduct