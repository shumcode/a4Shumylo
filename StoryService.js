(function () {
  function StoryService($location) {
    var wordStory = {};
    return {
      setWords: setWords,
      getWords: getWords
    };
    function setWords(newInfo) {
      wordStory = newInfo;
      $location.path("/story");
    }
    function getWords () {
      return wordStory;
    }
  }


  angular
    .module("app")
    .factory("StoryService", StoryService);
})();
