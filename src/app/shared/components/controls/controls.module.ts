import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextComponent } from './input-text/input-text.component';
import { InputEmailComponent } from './input-email/input-email.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    exports: [InputTextComponent, InputEmailComponent],
    declarations: [InputTextComponent, InputEmailComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class ControlsModule {}
