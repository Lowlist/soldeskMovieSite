import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import produce from 'immer';
import axios from 'axios';

export const basketData = createAsyncThunk(
    'basket/basketData',
    async () => {
        let response = await axios.get('/store/basket');
        return response.data;
  });

let shopCart = createSlice({
    name: 'shopCart',
    initialState:  {
        shopCart : [],
        loading : false,
        error : null
    },
    reducers:{
        // DB랑 연동시켜야함.
        addCart(state,action) {
            console.log(state.shopCart.find(item => item.id === action.payload.id));
            let item = state.shopCart.find(item => item.id === action.payload.id)
            if(item){
                if(item.count === 0){
                    item.count += 1;
                } else {
                    alert("이미 장바구니에 담겨있습니다!");
                }
            } else {

                // push문을 parameter 전송 후 DB에 추가하면 될듯? ver1
                // axios요청으로 파라미터 전송 후 리덕스 청크로 받아와야 할듯?
                // 비동기 방식이 되는지 잘 모르겠음

                let newItem = {
                    id : action.payload.id,
                    title: action.payload.data.title,
                    content: action.payload.data.content,
                    count : action.payload.counts,
                    price: action.payload.data.price,
                    salePrice: action.payload.data.salePrice,
                    img: action.payload.data.img,
                    checkBox: true
                }

                if (action.payload.type === 'food') {
                    newItem.foodNo = action.payload.idUniq;
                } else if (action.payload.type === 'goodsSet') {
                    newItem.setNo = action.payload.idUniq;
                } else if (action.payload.type === 'goods') {
                    newItem.goodsNo = action.payload.idUniq;
                }

                axios.post("/store/basket", newItem, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .catch((error)=>{
                    console.log(error+"ㅋㅋ 님 에러남")
                });

                state.shopCart.push(newItem);
            }
        },
        checkBox(state,action){
            let item = state.shopCart.find(item => item.id === action.payload.data.id)
            if(item.checkBox){
                item.checkBox = false;
            } else {
                item.checkBox = true;
            }
        },
        checkBoxAll(state,action){
            for(let i=0 ; i < state.shopCart.length ; i++){
                if(action.payload.checkAll){
                    state.shopCart[i].checkBox = true;
                }else{
                    state.shopCart[i].checkBox = false;
                }
            }
        },
        plusCount(state, action) {
            let item = state.shopCart.find(item => item.id === action.payload.id)
            if(item){
                item.count += 1;
            }
        },
        minusCount(state, action) {
            let item = state.shopCart.findIndex(item => item.id === action.payload.id)
            if(item !== -1){
                state.shopCart[item].count -= 1;
                if(state.shopCart[item].count === 0){
                    state.shopCart.splice(item , 1);
                }
            }
            if(action.payload.del){
                item = state.shopCart.findIndex(item => item.id === action.payload.id)
                state.shopCart.splice(item , 1);
            }
        },
        // 여기 데이터 베이스 연동시키면됨 일요일에 하면 끝 그럼 아예 끝
        delBasket(state, action){
            //여기에 axios 포스트 요청해서 삭제하면 될듯?
            let item = state.shopCart.findIndex(item => item.id === action.payload.data.id)
            state.shopCart.splice(item , 1);
        },

        // 로직 수정해야됨 체크 많이되있는데 3개까지밖에 삭제안됨 버그임
        // .filter 함수로 순회해서 checkBox가 false인 항목만 return 받도록 수정
        // 잘됨
        // 데이터 베이스 연동하니 immer쪽에서 문제 생김
        // produce 내부에서 드래프트 객체 수정하니 잘됨

        delCheckBoxList(state){
            return produce(state, draft => {
                let hasChecked = draft.shopCart.some(item => item.checkBox);
                if (hasChecked) {
                    //여기에 axios 포스트 요청해서 삭제하면 될듯?
                    draft.shopCart = draft.shopCart.filter(item => !item.checkBox);
                } else {
                    alert("삭제 할 상품이 선택되지 않았습니다!");
                }
            });
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(basketData.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(basketData.fulfilled, (state, action) => {
            state.loading = false;
            state.shopCart = action.payload
          })
          .addCase(basketData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
      },
})
export let { addCart, plusCount, minusCount, checkBox, checkBoxAll, delBasket , delCheckBoxList } = shopCart.actions

export default shopCart;