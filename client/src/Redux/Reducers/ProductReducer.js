import { GET_PRODUCTS, GET_ONE_PRODUCT } from "../ActionsTypes/ProductTypes"

const initalState = {
    products : [],
    product : {}
}

const ProductReducer=(state = initalState,action)=>{
    switch (action.type) {
        case GET_PRODUCTS : return {...state, products : action.payload}        
        case GET_ONE_PRODUCT : return {...state, product : action.payload}
        default: return state
           
    }
}

export default ProductReducer