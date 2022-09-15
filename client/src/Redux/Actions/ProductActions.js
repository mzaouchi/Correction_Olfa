import { GET_PRODUCTS, GET_ONE_PRODUCT } from "../ActionsTypes/ProductTypes"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

// Method getProducts
export const getProducts=()=>async(dispatch)=>{
    try {
        const res = await axios.get('/api/prod/getProducts')
        console.log(res.data)
        // console.log(res)
        dispatch({
            type : GET_PRODUCTS,
            payload : res.data.products
        })
        
    } catch (error) {
        console.log(error)
    }
}

// Method getOneProduct
export const getOneProduct=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/prod/getOneProduct/${id}`)
        dispatch({
            type : GET_ONE_PRODUCT,
            payload : res.data.oneProduct
        })
    } catch (error) {
        console.log(error)
    }
}

//Method addProduct
export const addProduct=(newProduct)=>async(dispatch)=>{
    try {
        const formData = new FormData();
        formData.append("testImage", newProduct.img);
        formData.append("title", newProduct.title);
        formData.append("price", newProduct.price);
        formData.append("desc", newProduct.desc);
       
        await axios.post('/api/prod/addProduct',formData)
        dispatch(getProducts())
        
    } catch (error) {
        console.log(error)
    }
}

//Method updateProduct
export const updateProduct=(id,data)=>async(dispatch)=>{
    const formData = new FormData();
    formData.append("testImage", data.img);
    formData.append("title", data.title);
    formData.append("price", data.price);
    formData.append("desc", data.desc);
    try {
        await axios.put(`/api/prod/updateProduct/${id}`,formData)
        dispatch(getProducts())
    } catch (error) {
        console.log(error)
    }
}

//method deleteProduct
export const deleteProduct=(id,navigate)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/prod/deleteProduct/${id}`)
        dispatch(getProducts())
        navigate('/listProduct')
    } catch (error) {
        console.log(error)
    }
}