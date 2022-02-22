import { HiringService } from './../../../../shared/services/hiring/hiring.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Steps } from '@shared/models/steps';
import { ValidateControlService } from '@shared/services/validate-control/validate-control.service';
import { Hiring } from '@shared/models/hiring';
import { fullnameValidator } from '@shared/validators/fullname/fullname.validator';
import { StepService } from '@modules/home/services/step/step.service';

@Component({
    selector: 'app-home-form',
    templateUrl: './home-form.component.html',
    styleUrls: ['./home-form.component.scss'],
})
export class HomeFormComponent implements OnInit {
    hiringForm!: FormGroup;
    activeStep!: number;
    isShowForm: boolean = true;
    isShowThankYou: boolean = false;
    hiringConcluded!: Hiring;
    steps: Steps[] = [
        {
            numStep: 1,
            name: 'name',
        },
        {
            numStep: 2,
            name: 'email',
        }
    ];

    constructor(
        public validateControl: ValidateControlService,
        private stepService: StepService,
        private fb: FormBuilder,
        private hiringService: HiringService,
    ) {}

    ngOnInit() {
        this.builderForm();
        this.getStep();
    }

    continueToNextControl() {
        this.activeStep++
        console.log(this.hiringForm.value)
        this.stepService.changeStep(this.activeStep)
    }

    returnToLastControl() {
        this.activeStep--
        console.log(this.hiringForm.value)
        this.stepService.changeStep(this.activeStep)
    }

    isFinalStep(): boolean {
        return this.activeStep === (this.steps.length + 1) ? true : false;
    }

    isButtonContinueDisabled(): boolean{
        const searchActiveStep = this.steps.find(elem => {
            return elem.numStep === this.activeStep;
        })
        return this.hiringForm.get(searchActiveStep?.name as string)?.invalid as boolean;
    }

    sendHiring() {
        const hiring: Hiring = this.hiringForm.getRawValue();

        this.hiringService.saveHiring(hiring)
            .subscribe({
                next: (res) => {
                    console.log(res)
                    this.isShowForm = false;
                    this.isShowThankYou = true;
                    this.hiringConcluded = res;
                },
                error: (e) => console.error(e)
            })
    }

    private builderForm() {
        this.hiringForm = this.fb.group({
            name: [null, [Validators.required, fullnameValidator]],
            email: [null, [Validators.required, Validators.email]],
        });
    }

    private getStep() {
        this.stepService.currentStep.subscribe( step => {
            this.activeStep = step;
        })
    }
}
