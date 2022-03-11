// 🥒js0310-0440. redux




// 🍀js0310-0422 add item to cart

export const addCart = (p_product) =>{
    return{
        type: 'ADDITEM',
        payload: p_product ,
    }
}


// 🍀 subtract item to cart
export const delCart = (p_product) =>{
    return{
        type: 'DELITEM',
        payload: p_product ,
    }
}

// 🍀 UltraDELITEM - delete item from cart
export const UltraDelCart = (p_product) =>{
    return{
        type: 'UltraDELITEM',
        payload: p_product ,
    }
}
