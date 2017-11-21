(function () {
  function FormController(StoryService) {
    var vm = this;
    vm.changeInfo = function (newInfo) {
      StoryService.setWords(newInfo);
    };
  }
  function StoryController (StoryService) {
    var vm = this;
    vm.wordStory = StoryService.getWords();
    // vm.restartStory = function (newInfo) {
    //   StoryService.removeWords(newInfo);
    //   console.log("hello");
    // }
  }

  angular
    .module("app")
    .controller("FormController", FormController)
    .controller("StoryController", StoryController);
})();