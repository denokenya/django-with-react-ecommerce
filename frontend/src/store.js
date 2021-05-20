import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  userLogin,
  userRegister,
  userList,
  userDelete,
  userDetails,
  userUpdate,
  userUpdateProfile,
} from './reducers/user';
import { productList, productDetails } from './reducers/product';
import { cart } from './reducers/cart';

const reducer = combineReducers({
  // Products
  productList,
  productDetails,

  // Cart
  cart,

  // Users
  userLogin,
  userRegister,
  userList,
  userDelete,
  userDetails,
  userUpdate,
  userUpdateProfile,
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
