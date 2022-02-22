import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ERoutes } from './configs/routes';

const routes: Routes = [
    {
        path: '',
        redirectTo: ERoutes.HOME,
        pathMatch: 'full'
    },
    {
        path: ERoutes.HOME,
        loadChildren: () => import('./modules/home/home.module')
            .then(m => m.HomeModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
