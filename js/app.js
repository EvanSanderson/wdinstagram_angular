"use strict";

(function(){
  angular.module("wdinstagram", [
    "ui.router"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("wdinstagramIndex", {
      url: "/wdinstagram",
      templateUrl: "js/index.html",
      controller: "WdinstagramIndexController",
      controllerAs: "WdinstagramIndexViewModel"
    });
  }

}());
