var myApp = angular.module('myApp.controller',['myApp.service']);

// las funciones de los scope, tienes que ser llamada desde las etiquetas "<button>"
// haciendo uso de la propiedad "ng-click"

myApp.controller('CtrlCrudNew',function($scope, serviceCrud, $location){
    $scope.save = function () {
        serviceCrud.save($scope.newContact) ;
        $scope.newContact = {} ;
        $location.url('/lista'); // redireccionar "url"
    };
    $scope.cancel = function(){
        $location.url('/'); // redireccionar "url"
    };
});

myApp.controller('CtrlCrudFind',function($scope, serviceCrud, $routeParams, $location){
    // recuperar parametro enviado por url
    var id = $routeParams.id ;
    // hacer llamado a la funcion get del servicio
    // y sacarle una copia al valor devuelto
    $scope.newContact = angular.copy(serviceCrud.get(id)) ;

    // funcion para modificar, haciendo uso del servicio

    $scope.update = function () {
        serviceCrud.update($scope.newContact) ;
        $scope.newContact = {} ;
        $location.path('/lista'); // redireccionar "path"
    };

    $scope.cancel = function(){
        $location.path('/'); // redireccionar "path"
    };
});

myApp.controller('CtrlCrudList',function($scope, serviceCrud, $location){
    // asignar los contactos del servicio al scope

    $scope.contacts = serviceCrud.list();

    // funcion para eliminar, haciendo uso del servicio

    $scope.delete = function (id) {
        serviceCrud.delete(id);
    };
    $scope.edit = function(id){
        $location.url('/editar/' + id) ;
    };
});