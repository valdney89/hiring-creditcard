import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';

import { Product } from '@shared/models/product';
import { ProductService } from '@shared/services/product/product.service';

@Injectable({
    providedIn: 'root',
})
export class ProdutoResolver implements Resolve<Product | null> {
    constructor(
        private productService: ProductService,
    ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Product | null> {
        const productId = route.paramMap.get('produtoId');

        if(productId){
            return this.productService
                .getProductById(parseInt(productId, 10))
                .pipe(
                    map((res) => {
                        console.log(res)
                        return res ? res : null;
                    }),
                    catchError(() => {
                        return of(null);
                    })
                );
        }

        return of(null);
    }
}
