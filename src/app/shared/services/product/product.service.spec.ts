import { TestBed } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';

import { ProductService } from './product.service';
import { environment } from 'src/environments/environment';

const mockData = {
    api: `${environment.apiUrl}produtos`,
    data: [
        {
            id: 1,
            nome: 'Básico',
            rendaMinima: 1100,
            mensalidade: 0,
            bandeira: 'Visa',
        },
    ],
};

describe(ProductService.name, () => {
    let service: ProductService;
    let httpController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ProductService],
        }).compileComponents();

        service = TestBed.inject(ProductService);
        httpController = TestBed.inject(HttpTestingController);
    });

    it(`#${ProductService.prototype.getProductById.name} should return the product by id sended`, done => {
        const produtoId = 1;

        service.getProductById(produtoId)
            .subscribe(product => {
                expect(product.nome).toBe('Básico')
                done();
            })

        httpController
            .expectOne(`${mockData.api}?id=${produtoId}`)
            .flush(mockData.data)
    });
});
