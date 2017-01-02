import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'advertFilterPipe'
})

export class AdvertFilterPipe implements PipeTransform {
    transform(adverts, filter: string): any {
        if (filter) {
            return adverts.filter(a => {
                return a.Title
                    .toLocaleLowerCase()
                    .indexOf(filter) > -1;
            });
        }

        return adverts;
    }
}