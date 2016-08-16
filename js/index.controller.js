"use strict";

(function(){
  angular
    .module( "wdinstagram" )
    .controller("WdinstagramIndexController", [
      WdinstagramIndexControllerFunction
    ]);

    function WdinstagramIndexControllerFunction(){
      this.grams = [
        {author: "Evan",
        body: "evan",
        photo_url: "https://i.ytimg.com/vi/_YfYHFM3Das/maxresdefault.jpg"},
        {author: "Christine",
        body: "christine",
        photo_url: "https://i.ytimg.com/vi/_YfYHFM3Das/maxresdefault.jpg"},
        {author: "snorlax",
        body: "snorlax!",
        photo_url: "https://i.ytimg.com/vi/_YfYHFM3Das/maxresdefault.jpg"}
      ]
    }

}());
