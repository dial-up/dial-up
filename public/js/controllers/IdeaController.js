angular.module('App.ideaCtrl', [])

.controller('IdeaController', ['$scope', 'Ideas', 'SuggestionFactory', function($scope, Ideas, SuggestionFactory) {
  // Default data on page load - changes occur in Buttons directive
  $scope.idea = "In Need of Some Spontaneity?";
  $scope.button = "Get Some!";
  $scope.filter = 'Random!';
  // These 4 dictate whether more information can be shown
  $scope.class = 'noInfo';
  $scope.moreInfo = false;
  $scope.eventList = false;
  $scope.dropdown = false;

  $scope.suggestionList = SuggestionFactory.suggestionList;


}])
