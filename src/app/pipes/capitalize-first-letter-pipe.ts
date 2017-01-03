import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizeFirstLetterPipe'
})

export class CapitalizeFirstLetterPipe implements PipeTransform {
    transform(input: string): any {
        let firstLetter = input.charAt(0).toUpperCase(),
            theRest = input.slice(1).toLowerCase();

        return firstLetter + theRest;
    }
}