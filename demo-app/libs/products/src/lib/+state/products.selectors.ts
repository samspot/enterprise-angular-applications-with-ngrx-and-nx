import { createFeatureSelector, createSelector} from '@ngrx/store';
import { ProductsState, ProductsData } from './products.reducer';
import * as fromProduct from './products.reducer';
// import { State } from './products.reducer';

const getProductsState = createFeatureSelector<ProductsData>('products');

const getProducts = createSelector(
  getProductsState,
  (state: ProductsState) => state.products
);

export const productsQuery = {
  getProducts,
};

/*
const getLoaded = createSelector(
  getProductsState,
  (state: ProductsState) => state.loaded
);
const getError = createSelector(
  getProductsState,
  (state: ProductsState) => state.error
);

const getAllProducts = createSelector(
  getProductsState,
  getLoaded,
  (state: ProductsState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getProductsState,
  (state: ProductsState) => state.selectedId
);
const getSelectedProducts = createSelector(
  getAllProducts,
  getSelectedId,
  (products, id) => {
    const result = products.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const productsQuery = {
  getLoaded,
  getError,
  getAllProducts,
  getSelectedProducts
};
*/
