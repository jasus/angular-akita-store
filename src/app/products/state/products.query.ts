import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Product } from './product.model';
import { ProductsStore, State } from './products.store';

@Injectable({
    providedIn: 'root'
})
export class ProductsQuery extends QueryEntity<State, Product> {
    constructor(protected store: ProductsStore) {
        super(store);
    }

    public getProducts(value: string) {
        return this.selectAll({
            filterBy: entity => entity.title.toLowerCase().includes(value)
        });
    }
}
