import { Injectable } from '@angular/core';
import { ProductsStore } from './products.store';
import { ProductsQuery } from './products.query';
import { ProductsDataService } from './products-data.service';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { tap } from 'rxjs/operators';
import { noop } from '@datorama/akita';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(private productsStore: ProductsStore,
        private productsQuery: ProductsQuery,
        private productsDataService: ProductsDataService) { }


    get(): Observable<Product[]> {
        const request = this.productsDataService.get()
            .pipe(
                tap(response => this.productsStore.set(response)
                ));

        return this.productsQuery.isPristine ? request : noop();
    }

}
