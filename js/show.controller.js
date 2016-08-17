"use strict";

(function(){
  angular
    .module( "grams")
    .controller( "WdinstagramShowController", [
      "$stateParams",
      WdinstagramShowControllerFunction
    ]);

    function WdinstagramShowControllerFunction($stateParams){
      console.log("working")
      this.gram = grams[$stateParams.id]
    }

}())
