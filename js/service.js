var myApp = angular.module('myApp.service', []);

myApp.service('serviceCrud', function() {
    var uid = 4;

    var contacts = [
        {
            'id': 1,
            'name': 'Jose Luis Damián Saavedra',
            'dni': '46003328'
        },
        {
            'id': 2,
            'name': 'Jose Alberto Damián Saavedra',
            'dni': '46003327'
        },
        {
            'id': 3,
            'name': 'Anani Diahann Ayala Paz',
            'dni': '46003329'
        }
    ];

    this.save = function(contact) {
        contact.id = uid++ ;
        contacts.push(contact);
    };

    this.update = function(contact) {
        for (i in contacts) {
            if (contacts[i].id == contact.id) {
                contacts[i] = contact;
            }
        }
    };

    this.get = function(id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                return contacts[i] ;
            }
        }
    };

    this.delete = function(id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                contacts.splice(i, 1);
            }
        }
    };

    this.list = function() {
        return contacts;
    };
});