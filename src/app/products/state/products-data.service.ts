import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { Product } from './product.model';
import { mockProducts } from '../products.mocks';

@Injectable({
    providedIn: 'root'
})
export class ProductsDataService {
    public get(): Observable<Product[]> {
        return timer(500)
                .pipe(
                    mapTo(mockProducts)
                );
    }
}
