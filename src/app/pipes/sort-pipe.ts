import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'advertsSortPipe'
})

export class AdvertSortPipe implements PipeTransform {
    transform(adverts, options: any[]) {
        if (options && adverts) {
            return adverts.sort((a, b) => {
                switch (options[0]) {
                    case 'Category':
                        return options[1] > 0 ?
                            a.Category.localeCompare(b.Category) :
                            b.Category.localeCompare(a.Category);
                    case 'Title':
                        return options[1] > 0 ?
                            a.Title.localeCompare(b.Title) :
                            b.Title.localeCompare(a.Title);
                }
            });
        }

        return adverts;
    }
};
