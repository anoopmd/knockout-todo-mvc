define(['knockout'], function(ko) {
  var TodoItem = function() {
    this.description = ko.observable('My Todo desc');

    return this;
  }

  return TodoItem;
});