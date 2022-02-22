import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsModule } from './components/controls/controls.module';

@NgModule({
    exports: [ControlsModule],
    declarations: [],
    imports: [
        CommonModule,
        ControlsModule
    ],
})
export class SharedModule { }
