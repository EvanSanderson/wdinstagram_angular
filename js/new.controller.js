"use strict";

(function(){
  angular
    .module( "grams")
    .controller( "WdinstagramNewController", [
      "GramFactory",
      "$state",
      WdinstagramNewControllerFunction
    ]);

    function WdinstagramNewControllerFunction( GramFactory, $state ){
      this.gram = new GramFactory();
      this.create = function(){
        this.gram.$save()
        $state.go("wdinstagramIndex");
      }
    }
}());
