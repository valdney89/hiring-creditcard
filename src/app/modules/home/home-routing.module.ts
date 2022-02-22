import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoResolver } from '@core/resolvers/product.resolver';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
    {
        path: ':produtoId',
        component: HomeComponent,
        resolve: {
            produtoId: ProdutoResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
