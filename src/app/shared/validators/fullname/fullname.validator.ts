import { AbstractControl } from '@angular/forms';

export function fullnameValidator(control: AbstractControl){
    if(control.value){
        const controlSplited = control.value.split(' ');

        if(controlSplited.length < 2){
            return { fullnameInvalid: true }
        }

        if(controlSplited.length > 1 && hasEmptyString(controlSplited)){
            return { fullnameInvalid: true }
        }
    }

    return null;
}

function hasEmptyString(array: string[]){
    return array.some(elem => {
        return elem === '' ? true  : false;
    })
}
