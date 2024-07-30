import * as toolkit from "@reduxjs/toolkit";
const { configureStore, createSlice } = toolkit;

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

const loginSlice = createSlice({
  name: "login",
  initialState: { status: false },
  reducers: {
    loginSession(state, action) {
      state.status = true;
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    login: loginSlice.reducer,
  },
});

console.log("create store : ", store.getState());

store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 2 }));
store.dispatch(cartSlice.actions.addToCart({ id: 3, qty: 5 }));
store.dispatch(cartSlice.actions.addToCart({ id: 3, qty: 5 }));
store.dispatch(loginSlice.actions.loginSession());
