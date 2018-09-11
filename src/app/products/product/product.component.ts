import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../state/product.model';

@Component({
    selector: 'app-product',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './product.component.html'
})

export class ProductComponent implements OnInit {
    @Input() product: Product;
    @Output() add = new EventEmitter<Product>();
    @Output() subtract = new EventEmitter<Product>();

    constructor() { }

    ngOnInit() { }
}
