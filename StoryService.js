(function () {
  function StoryService($location) {
    var wordStory = {};
    return {
      setWords: setWords,
      getWords: getWords,
      wordStory: wordStory
    };
    function setWords(newInfo) {
      wordStory = newInfo;
      $location.path("/story");
    }
    function getWords () {
      return wordStory;
    }
    // function removeWords() {
    //   wordStory = {};
    // }
  }


  angular
    .module("app")
    .factory("StoryService", StoryService);
})();
