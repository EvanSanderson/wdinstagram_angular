"use strict";

(function(){
  angular
    .module( "grams" )
    .controller("WdinstagramIndexController", [
      "GramFactory",
      WdinstagramIndexControllerFunction
    ]);

    function WdinstagramIndexControllerFunction( GramFactory ){
      this.grams = GramFactory.query();
    }

}());
