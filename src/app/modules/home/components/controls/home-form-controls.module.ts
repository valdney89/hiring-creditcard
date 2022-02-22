import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlNameComponent } from './control-name/control-name.component';
import { SharedModule } from '@shared/shared.module';
import { ControlEmailComponent } from './control-email/control-email.component';

@NgModule({
    exports: [
        ControlNameComponent,
        ControlEmailComponent
    ],
    declarations: [
        ControlNameComponent,
        ControlEmailComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
})
export class HomeFormControlsModule { }
