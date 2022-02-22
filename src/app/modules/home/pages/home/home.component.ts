import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@shared/models/product';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    product!: Product;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.getProductIdFromRoute();
    }

    private getProductIdFromRoute(){
        this.route.data.subscribe(data => {
            this.product = data['produtoId']
        });
    }
}
