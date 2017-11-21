(function () {
  var formComponent = {
    controller: "FormController as form",
    template: `
    <div>
    <input ng-model="form.story.noun" placeholder="noun">
    <input ng-model="form.story.adjective" placeholder="adjective">
    <input ng-model="form.story.adjective2" placeholder="another adjective">
    <input ng-model="form.story.noun2" placeholder="final noun, preferably an insult">
    <button ng-click="form.changeInfo(form.story);">Submit Words</button>
    </div>
    `
  };

  angular
    .module("app")
    .component("formComponent", formComponent);

})();