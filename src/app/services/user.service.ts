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
export class UserService {



    getAll(): any {
        var data = el.data('Users');
        return data.get()

    }

    getById(id: any) {
        var filter = new Everlive.Query();
        filter.where().eq('Id', id).done();

        var data = el.data('Users');
        return data.get(filter)

    }

    create(name, pass, attrs) {
        el.Users.register(name, pass, attrs)
            
    }

    login(username, password) {

        el.authentication.login(username, password);
        



    }

    getCurrentUser(): any {
        var data = el.data('Users');
        return el.Users.currentUser()

    }

    logaout() {
        el.authentication.logout(function () {
            alert("Logout successful!");
        }, function (err) {
            alert("Failed to logout: " + err.message);
        });

    }

    delete(id: number) {

    }
}
