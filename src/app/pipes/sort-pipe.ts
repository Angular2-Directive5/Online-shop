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
                            a.Title.localeCompare(b.Title) :
                            b.Title.localeCompare(a.Title);
                    case 'Name':
                        return options[1] > 0 ?
                            +a.imdbRating - +b.imdbRating :
                            +b.imdbRating - +a.imdbRating;
                }
            });
        }

        return adverts;
    }
};
