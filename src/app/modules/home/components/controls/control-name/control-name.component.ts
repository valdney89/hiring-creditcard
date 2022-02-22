import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StepService } from '@modules/home/services/step/step.service';

@Component({
    selector: 'app-control-name',
    templateUrl: './control-name.component.html',
    styleUrls: ['./control-name.component.scss'],
})
export class ControlNameComponent implements OnInit {
    @Input() formGroup!: FormGroup;
    @Input() controlStep!: number;

    activeStep!: number;

    constructor(
        private stepService: StepService
    ) {}

    ngOnInit() {
        this.getStep();
    }

    isDisplay(){
        return this.controlStep === this.activeStep ? true : false;
    }

    private getStep(){
        this.stepService.currentStep.subscribe(step => {
            this.activeStep = step;
        })
    }
}
