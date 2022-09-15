import { useEffect, useState } from "react"
import { FormControl, Navbar } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../Redux/Actions/ProductActions"
import CardProduct from "./CardProduct"

const ListProduct=()=>{
    const dispatch = useDispatch()
    const [search,setSearch]= useState('')
    useEffect(()=>{
        dispatch(getProducts())
    },[])
    const products = useSelector(state => state.ProductReducer.products)
    // useEffect(()=>{
    //     dispatch(getProducts())
    // },[products])
    return(
        <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}>  
            <Navbar.Text className="search">
        <FormControl
            onChange={(e)=>setSearch(e.target.value) }
          placeholder="Search a product"
          className="m-auto"
        />
    </Navbar.Text>      

<div style={{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"center"}}>     
  
  {
       products.filter(product=> product.title.toUpperCase().includes(search.toUpperCase())).length  ? products.filter(product=> product.title.toUpperCase().includes(search.toUpperCase())).map(product=> <CardProduct key={product._id} product={product}/>) : <img src='/notfound.png' alt="Not found"/>
   }
</div>
    </div>
   
    )
}



export default ListProduct