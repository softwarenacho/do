angular.module('todoApp', ['ngStorage']).controller('TodoCtrl', ['$scope','$localStorage', '$sessionStorage', function($scope, $localStorage, $sessionStorage) {

  $scope.completeList = () => {
    $scope.list = $sessionStorage.list || [];
  }

  $scope.send = (txt) => {
    $scope.list.push( { txt: txt, date: Date.now(), completed: false } );
    $scope.todo = '';
    saveList();
  }

  $scope.check = (i) => {
    $scope.list[i].completed = !$scope.list[i].completed
    saveList();
  }

  $scope.delete = (i) => {
    let list = $scope.list;
    let newList = list.filter( x => x != list[i] );
    $scope.list = newList;
  }

  function saveList() {
    console.log('Saved List');
    $sessionStorage.list = $scope.list;
  }

}]);
