"use strict";

(function(){
  angular
    .module( "grams")
    .controller( "WdinstagramShowController", [
      "$stateParams",
      "GramFactory",
      WdinstagramShowControllerFunction
    ]);

    function WdinstagramShowControllerFunction($stateParams, GramFactory){

      this.gram = GramFactory.get({id: $stateParams.id});
    }

}())
