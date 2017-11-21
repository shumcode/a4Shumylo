(function () {
  var storyComponent = {
    controller: "StoryController as story",
    template: `
    <p>That's a nice {{ story.wordStory.adjective }}  {{ story.wordStory.noun }} you got there.  Can I have it?  It's almost as good as my {{ story.wordStory.adjective2 }} {{ story.wordStory.noun }}, but I still want your {{ story.wordStory.noun }}. If not, you're a/an {{ story.wordStory.noun2 }}.</p>
    <button>Restart Story</button>
    `
  };

  angular
    .module("app")
    .component("storyComponent", storyComponent);
})();