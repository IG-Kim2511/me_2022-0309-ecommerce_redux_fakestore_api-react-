/* 🍀js0310-0440. redux 
 👉redux/action/index.js
 👉redux/reducer/index.js
 👉redux/store.js 
 👉./index.js
 👉./components/nav.js
 👉./Product_js
 👉./Cartjs.jsx
*/


/* 🍄0311-0540. ADDITEM

10. cart안에 item에 클릭한 item이 있는지  find()

15.  cart안에 아이템 이 없을때,  

기존의 다른아이템 + 

payload로 온 item... spread문법 사용... []벗겨냄,  qty:1 추가함


20. cart안에  item 이 있을때, 

20-10. cart안 item의 id === payload로 온 item의 id 체크 - map()



30. 둘이 같다면  cart안에 그 아이템 있음, 

cart안 item... spread문법 사용... []벗겨냄 , qty에 +1 함



30-10. 둘이 다르면 cart안에 아이템 없음,  그 아이템 그대로 return  (변화없음)
*/

const cart = [];

const reducer_handleCart = (state = cart, action) => {
  
  switch (action.type) {
    case "ADDITEM":
      // check if product is already existing

      const exist = state.find((x) => x.id === action.payload.id);

      if (exist) {          //// 🍄0311-0540-30
        // incerase qty
        return state.map((x) =>
          x.id === action.payload.id 

          ? { ...x, 
            qty: x.qty + 1 
            } 

          : x
        );

      } else {    // 🍄0311-0540-20
        return [
          ...state,
          {
            ...action.payload,
            qty: 1,
          },
        ];
      }

      break;


      /* 
      🍄0311-0600. DELITEM
      
        10. cart안에 item에 클릭한 item이 있는지  find()

        20.find를 통해찾은 cart안의 item의 qty === 1 인때, 그 아이템 삭제하기

        --> 그 아이템만 빼고 다른 아이템만 filter해서 return

        30. find를 통해찾은 cart안의 item의 qty !== 1 인때, 

        cart안 item === 클릭한 item ...map()으로 찾아낸 후  

        그 아이템.qty -1
      */
    case "DELITEM":
        const exist_del = state.find((x) => x.id === action.payload.id);

        if (exist_del.qty === 1 ) {
            return state.filter((x)=>x.id !== exist_del.id);

        }else{
            return state.map((x)=> x.id === action.payload.id 
            
            ? {
              ...x,
              qty: x.qty-1
              } 
            
            : x );
        }

        break;



        // 🍀js0310-0440 clearItem 👉redeucer_handleCart.js , redux/index.js, Cartjs.jsx

        /* 🍄0311-0630. clearItem
            카트안의 id !== 클릭한것 id... : 해당id상품 제외 남은것만 return = 해당id제품 삭제
        */
        
      case "clearItem":

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