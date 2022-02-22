import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HomeSidebarComponent } from './components/home-sidebar/home-sidebar.component';
import { HomeFormControlsModule } from './components/controls/home-form-controls.module';
import { HomeFormComponent } from './components/home-form/home-form.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';

@NgModule({
    declarations: [
        HomeComponent,
        HomeSidebarComponent,
        HomeFormComponent,
        ThankYouComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        HomeFormControlsModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class HomeModule { }
