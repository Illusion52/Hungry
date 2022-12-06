import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice.js";
import SearchSlice from "./SearchSlice.js";

const Store = configureStore ({
    reducer: {
        cart: CartSlice,
        search: SearchSlice,
        
    }
}

)

export default Store;