import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@shared/models/product';

@Component({
    selector: 'app-home-sidebar',
    templateUrl: './home-sidebar.component.html',
    styleUrls: ['./home-sidebar.component.scss'],
})
export class HomeSidebarComponent implements OnInit {
    @Input() product!: Product;

    constructor() {}

    ngOnInit() {}
}
