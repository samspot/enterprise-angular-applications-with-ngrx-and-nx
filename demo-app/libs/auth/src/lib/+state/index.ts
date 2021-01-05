import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthData } from './auth.reducer';
// import { ProductsState, ProductsData} from './products/reducer';

/*
const getProductsState = createFeatureSelector<ProductsData>('products')

const getProducts = createSelector(
  getProductsState,
  state => state.products
)

export const productsQuery = {
  getProducts,
}
*/

export const getAuthState = createFeatureSelector<AuthData>('auth');
export const getUser = createSelector(getAuthState, state => state.user);



