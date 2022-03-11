/* 🍀js0310-0440. redux 
 👉redux/action/index.js
 👉redux/reducer/index.js
 👉redux/store.js 
 👉./index.js
 👉./components/nav.js
 👉./Product_js


🍄
10. action.type 체크

20. if (ADDITEM )

cart.id === clicked.id  ..... qty+1

cart.id !== clicked.id  ...카트에 없는 상품.. qty: 1 


30. if (DELITEM )

qut ===1 일때, 


qut !==1 일때, 

카트안의 id === 클릭한 id.... qty -1



40. UltraDELITEM

카트안의 id !== 클릭한것 id... : 해당id상품 제외 남은것만 return = 해당id제품 삭제


*/

const cart = [];

const reducer_handleCart = (state = cart, action) => {
  
  switch (action.type) {
    case "ADDITEM":
      // check if product is already existing

      const exist = state.find((x) => x.id === action.payload.id);

      if (exist) {
        // incerase qty
        return state.map((x) =>
          x.id === action.payload.id ? { ...x, qty: x.qty + 1 } : x
        );

      } else {
        return [
          ...state,
          {
            ...action.payload,
            qty: 1,
          },
        ];
      }

      break;

    case "DELITEM":
        const exist_del = state.find((x) => x.id === action.payload.id);

        if (exist_del.qty === 1 ) {
            return state.filter((x)=>x.id !== exist_del.id);
          
     
            
        }else{
            return state.map((x)=> x.id === action.payload.id ? {...x,qty: x.qty-1} : x );
        }

        break;



        // 🍀js0310-0440 UltraDELITEM 👉redeucer_handleCart.js , redux/index.js, Cartjs.jsx
      case "UltraDELITEM":

        return state = state.filter((x)=>{
          return x.id !== action.payload.id

          cart=[];
        })
        
        break;

    default:
        return state;
      break;
  }
};

export default reducer_handleCart;