"use strict";

(function(){
    angular
      .module( "grams" )
      .controller("WdinstagramEditController", [
        "GramFactory",
        "$stateParams",
        "$state",
        WdinstagramEditControllerFunction
      ])

      function WdinstagramEditControllerFunction( GramFactory, $stateParams, $state) {
        this.gram = GramFactory.get({id: $stateParams.id});
        this.update = function(){
          this.gram.$update({id: $stateParams.id})
          $state.go("wdinstagramIndex")
        }

        this.delete = function(){
          this.gram.$delete({id: $stateParams.id})
          $state.go("wdinstagramIndex")
        }
      }
})()
