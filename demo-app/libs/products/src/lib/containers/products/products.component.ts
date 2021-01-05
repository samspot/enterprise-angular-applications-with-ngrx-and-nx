import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '@demo-app/data-models';
import { select, Store } from '@ngrx/store';
import { ProductsState } from '../../+state/products.reducer';
import { LoadProducts } from '../../+state/products.actions';
import { productsQuery } from '../../+state/products.selectors';
// import { productsQuery } from './../../+state';

@Component({
  selector: 'demo-app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private store: Store<ProductsState>) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadProducts());
    this.products$ = this.store.pipe(select(productsQuery.getProducts))
  }

}
