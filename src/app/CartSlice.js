import {createSlice} from '@reduxjs/toolkit'
import toast from 'react-hot-toast'


const initialState= {
    cartState: false,
    cartItems: localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [],
    cartTotalAmount: 0,
    cartTotalQantity: 0,

}

const CartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        setOpenCart: (state, action)=> {
            state.cartState = action.payload.cartState
        },
        setCloseCart: (state, action) => {
            state.cartState = action.payload.cartState
        },
        setAddItemToCart: (state, action) => {

       const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)

       if(itemIndex >= 0 ){
        state.cartItems[itemIndex].cartQuantity += 1
        toast.success(` increased quantity!` )
       } else {
        const tempProduct = {...action.payload, cartQuantity: 1}
        state.cartItems.push(tempProduct)
        toast.success(` added to cart`)
       }
        
       localStorage.setItem("cart", JSON.stringify(state.cartItems))
        },

        setRemoveItem: (state, action) => {
            const itemRemove = state.cartItems.filter((item) => item.id !== action.payload.id)

            state.cartItems =itemRemove

            localStorage.setItem('cart', JSON.stringify(state.cartItems))
        },

        setIncreaseItemQTY: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
              (item) => item.id === action.payload.id
            );
      
            if (itemIndex >= 0) {
              state.cartItems[itemIndex].cartQuantity += 1;
      
              toast.success(`Item QTY Increased`);
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
          },

          setDecreaseItemQTY : (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            )

            if(state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -=1;

                toast.success(`Item QTY Increased`)
            }
            localStorage.setItem('cart', JSON.stringify(state.cartItems))
          },

          setGetTotals: (state, action) => {
            let { totalAmount, totalQTY } = state.cartItems.reduce((cartTotal, cartItem)=> {
              const { price, cartQuantity } = cartItem;
              const totalPrice = price * cartQuantity;
      
              cartTotal.totalAmount += totalPrice;
              cartTotal.totalQTY += cartQuantity;
      
              return cartTotal;
            }, {
              totalAmount: 0,
              totalQTY: 0,
            });
      
            state.cartTotalAmount = totalAmount;
            state.cartTotalQantity = totalQTY;
          },
    }
})


export const {setOpenCart,setGetTotals, setCloseCart, setAddItemToCart, setRemoveItem, setIncreaseItemQTY, setDecreaseItemQTY} = CartSlice.actions

export const selectCartState = (state) => state.cart.cartState
export const selectCartItems = (state) => state.cart.cartItems
export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectTotalQTY = (state) => state.cart.cartTotalQantity;

export default CartSlice.reducer;