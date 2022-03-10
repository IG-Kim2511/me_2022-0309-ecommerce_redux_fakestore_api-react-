// 🍀js0310-0422 add item to cart

export const addCart = (p_product) =>{
    return{
        type: 'ADDITEM',
        payload: p_product 
    }
}


// 🍀 delete item to cart
export const delCart = (p_product) =>{
    return{
        type: 'DELITEM',
        payload: p_product 
    }
}