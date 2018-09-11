import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './state/product.model';
import { ProductsService } from './state/products.service';
import { ProductsQuery } from './state/products.query';
import { startWith, switchMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;
  loading$: Observable<boolean>;
  search = new FormControl();

  constructor(private productsService: ProductsService,
    private productsQuery: ProductsQuery) { }

  ngOnInit() {
    this.productsService.get().subscribe();

    this.loading$ = this.productsQuery.selectLoading();

    this.products$ = this.search.valueChanges
      .pipe(
        startWith(''),
        switchMap((value: string) => this.productsQuery.getProducts(value))
      );
  }

}
