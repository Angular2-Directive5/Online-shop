import { Injectable } from '@angular/core';


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

    getById(id: number) {

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

    login(username, password) {

        el.authentication.login(username, // username
            password, // password
            function (data) {
                alert(JSON.stringify(data));
            },
            function (error) {
                alert(JSON.stringify(error));
            });



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
