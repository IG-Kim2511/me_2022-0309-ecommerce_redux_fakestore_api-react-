/* 🍀js0310-0440. redux 
 👉redux/action/index.js
👉redux/reducer/index.js
👉redux/store.js


🍄
10. action.type 체크

20. if (ADDITEM )

cart.id === clicked.id  ..... qty+1

cart.id !== clicked.id  ...카트에 없는 상품.. qty: 1 


30. if (DELITEM )

qut ===1 일때, 

카트안의 id !== 클릭한것 id... 그냥 return


qut !==1 일때, 

카트안의 id === 클릭한 id.... qty -1
*/

const cart = [];

const reducer_handleCart = (state = cart, action) => {
  const action_product = action.payload;

  switch (action.type) {
    case "ADDITEM":
      // check if product is already existing

      const exist = state.find((x) => x.id === action_product.id);

      if (exist) {
        // incerase qty
        return state.map((x) =>
          x.id === action_product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [
          ...state,
          {
            ...action_product,
            qty: 1,
          },
        ];
      }

      break;

    case "ADDITEM":
        const exist_del = state.find((x) => x.id === action_product.id);

        if (exist_del ===1 ) {
            return state.filter((x)=>x.id !== exist_del.id);
            
        }else{
            return state.map((x)=> x.id === action_product.id ? {...x,qty: x.qty-1 : x} );
        }

        break;

    default:
        return state;
      break;
  }
};
