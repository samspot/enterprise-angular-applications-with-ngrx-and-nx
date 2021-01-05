import { Action } from '@ngrx/store';
import { ProductsActions, ProductsActionTypes } from './products.actions';
import { Product } from '@demo-app/data-models';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const PRODUCTS_FEATURE_KEY = 'products';

export interface ProductsData extends EntityState<Product> {
  error: string;
  selectedProductId: number;
  loading: boolean;
}

export interface ProductsState {
  readonly products: ProductsData;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({});

export const initialState: ProductsData = adapter.getInitialState({
  error: '',
  selectedProductId: null,
  loading: false
});

export function productsReducer(
  state = initialState,
  action: ProductsActions
): ProductsData {
  switch (action.type) {
    case ProductsActionTypes.LoadProducts:
      return { ...state, loading: true };

    case ProductsActionTypes.LoadProductsSuccess: {
      return adapter.addAll(action.payload, { ...state, error: '' });
    }

    case ProductsActionTypes.LoadProductsFail: {
      return adapter.removeAll({ ...state, error: action.payload });
    }

    default:
      return state;
  }
}

export const getSelectedProductId = (state: ProductsData) =>
  state.selectedProductId;

export const {
  // select the array of user ids
  selectIds: selectProductIds,

  // select the dictionary of Products entities
  selectEntities: selectProductEntities,

  // select the array of Productss
  selectAll: selectAllProducts,

  // select the total Products count
  selectTotal: selectProductsTotal
} = adapter.getSelectors();


/*
import { Action } from '@ngrx/store';
import { ProductsActions, ProductsActionTypes } from './products.actions';
import { Product } from '@demo-app/data-models'

export interface ProductsData {
  loading: boolean;
  products: Product[];
  error: '';
}

export interface ProductsState {
  readonly products: ProductsData;
}

export const initialState: ProductsData = {
  loading: false,
  products: [],
  error: ''
}

export function productsReducer(
  state = initialState,
  action: ProductsActions
): ProductsData {
  switch(action.type){
    case ProductsActionTypes.LoadProducts:
      return { ...state, loading: true};
    case ProductsActionTypes.LoadProductsSuccess: {
      return { ...state, products: action.payload, loading: false, error: ''}
    }
    case ProductsActionTypes.LoadProductsFail: {
      return {
        ...state,
        products: null,
        loading: false,
        error: action.payload
      }
    }
    default:
      return state;
  }
}

*/

/*
export const PRODUCTS_FEATURE_KEY = 'products';

export interface Entity {}

export interface ProductsState {
  list: Entity[]; // list of Products; analogous to a sql normalized table
  selectedId?: string | number; // which Products record has been selected
  loaded: boolean; // has the Products list been loaded
  error?: any; // last none error (if any)
}

export interface ProductsPartialState {
  readonly [PRODUCTS_FEATURE_KEY]: ProductsState;
}

export const initialState: ProductsState = {
  list: [],
  loaded: false
};

export function reducer(
  state: ProductsState = initialState,
  action: ProductsAction
): ProductsState {
  switch (action.type) {
    case ProductsActionTypes.ProductsLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
*/
