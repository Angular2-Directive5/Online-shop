import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


var Everlive = require('everlive-sdk')
var apiKey = '656rc4p2f15c5tlj';
var el = new Everlive({
    appId: apiKey,
    scheme: 'https',
    authentication: {
        persist: true
    }
});

@Injectable()
export class AdvertsService {



    getAll(): any {
        var data = el.data('Advert');
        return data.get()

    }

    getById(id: any) {
        var filter = new Everlive.Query();
        filter.where().eq('Id', id).done();

        var data = el.data('Users');
        return data.get(filter)
           
    }

    create(name, pass, attrs) {
        el.Users.register(name, pass, attrs).
            then(function (data) {
                alert(JSON.stringify(data));
            },
            function (error) {
                alert(JSON.stringify(error));
            })
    }

    
    

    
}
