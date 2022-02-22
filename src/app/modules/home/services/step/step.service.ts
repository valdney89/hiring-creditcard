import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class StepService {

    private step = new BehaviorSubject<number>(1);

    currentStep: Observable<number> = this.step.asObservable();

    constructor() {}

    changeStep(value: number){
        this.step.next(value)
    }
}
