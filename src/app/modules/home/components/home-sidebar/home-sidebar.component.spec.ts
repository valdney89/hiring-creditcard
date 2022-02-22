import { ActivatedRoute, Router } from '@angular/router';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeSidebarComponent } from './home-sidebar.component';
import { of } from 'rxjs';
import { ProdutoResolver } from '@core/resolvers/product.resolver';
import { ProductService } from '@shared/services/product/product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe(HomeSidebarComponent.name, () => {
    let component: HomeSidebarComponent;
    let fixture: ComponentFixture<HomeSidebarComponent>;
    let route: ActivatedRoute

    const dataMock = {
        id: 1,
        nome: 'Básico',
        rendaMinima: 1100,
        mensalidade: 0,
        bandeira: 'Visa',
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeSidebarComponent],
            imports: [
                RouterTestingModule.withRoutes([]),
                HttpClientTestingModule
            ],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: { data: of(dataMock) }
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeSidebarComponent);
        component = fixture.componentInstance;
        route = TestBed.inject(ActivatedRoute)
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // it(`#getProdutoIdFromRoute should set produto by route data`, done => {
    //     spyOn(fixture.debugElement.injector.get(ActivatedRoute), 'queryParams').and.returnValue(of(dataMock))
    //     expect(component.produto).toEqual(dataMock)

    // });
});
