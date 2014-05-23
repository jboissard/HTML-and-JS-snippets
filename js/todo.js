
function TodoCtrl($scope) {
	$scope.todos = [
		{text:'leanr', done:true}
		, {text: 'fds', done: false}
	];
	
	$scope.addTodo = function(){
		$scope.todos.push({text:$scope.todoText, done:false});
		$scope.todoText = '';
	};
	
	$scope.remaining = function(){
		var count = 0;
		angular.forEach($scope.todos, function(todo){
			count += todo.done ? 0 : 1;
		});
		return count;
	};
	
	$scope.archive = function(){
		var oldTodos = $scope.todos;
		$scope.todos = [];
		angular.forEach(oldTodos, function(todo){
			if(!todo.done) $scope.todos.push(todo)
		})
	};
}



var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
  $scope.var1 = '12-07-2013';
});


app.directive('datetimez', function() {
    return {
        restrict: 'A',
        require : 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
          element.datetimepicker({
            dateFormat:'dd-MM-yyyy',
           language: 'en',
           pickTime: false,
           startDate: '01-11-2013',      // set a minimum date
           endDate: '01-11-2030'          // set a maximum date
          }).on('changeDate', function(e) {
            ngModelCtrl.$setViewValue(e.date);
            scope.$apply();
          });
        }
    };
});
