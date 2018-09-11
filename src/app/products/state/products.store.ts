import { Injectable } from '@angular/core';
import { EntityStore, EntityState, StoreConfig } from '@datorama/akita';
import { Product } from './product.model';

export interface State extends EntityState<Product> {}

@Injectable({
    providedIn: 'root'
})
@StoreConfig({
    name: 'products'
})
export class ProductsStore extends EntityStore<State, Product> {
    constructor() {
        super();
    }
}
