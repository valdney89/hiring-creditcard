import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '@shared/models/product';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private readonly endpoint = `${environment.apiUrl}produtos`;

    constructor(private http: HttpClient) {}

    getProductById (id: number): Observable<Product> {
        return this.http.get<Product[]>(`${this.endpoint}?id=${id}`)
            .pipe(
                map(product => {
                    return product[0]
                })
            );
    }
}
