"use strict";

(function(){
  angular.module("wdinstagram", [
    "ui.router",
    "grams"
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
    }).state("wdinstagramNew", {
      url: "/wdinstagram/new",
      templateUrl: "js/new.html",
      controller: "WdinstagramNewController",
      controllerAs: "new_vm"
    }).state("wdinstagramShow", {
      url: "/wdinstagram/:id",
      templateUrl: "js/show.html",
      controller: "WdinstagramShowController",
      controllerAs: "WdinstagramShowViewModel"
    }).state("wdinstagramEdit", {
      url: "/wdinstagram/:id/edit",
      templateUrl: "js/edit.html",
      controller: "WdinstagramEditController",
      controllerAs: "edit_vm"
    });
  }

}());
