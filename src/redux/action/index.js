// ð¥js0310-0440. redux




// ðjs0310-0422 add item to cart

export const addCart = (p_product) =>{
    return{
        type: 'ADDITEM',
        payload: p_product ,
    }
}


// ð subtract item to cart
export const delCart = (p_product) =>{
    return{
        type: 'DELITEM',
        payload: p_product ,
    }
}

// ð UltraDELITEM - delete item from cart
export const clearCart = (p_product) =>{
    return{
        type: 'clearItem',
        payload: p_product ,
    }
}
