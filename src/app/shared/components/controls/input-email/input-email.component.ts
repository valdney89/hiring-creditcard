import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-input-email',
    templateUrl: './input-email.component.html',
    styleUrls: ['./input-email.component.scss'],
})
export class InputEmailComponent implements OnInit {
    @Input() formGroup!: FormGroup;
    @Input() controlName: string = '';
    @Input() label: string = '';
    @Input() helpText: string = '';
    @Input() placeholder: string = '';

    constructor() {}

    ngOnInit() {}

    get formControl(): AbstractControl {
        return this.formGroup.controls[this.controlName];
    }
}
