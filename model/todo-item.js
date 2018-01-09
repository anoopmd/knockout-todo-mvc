define(['knockout'], function(ko) {
  var TodoItem = function() {
    this.title = ko.observable('My Todo');

    return this;
  }

  return TodoItem;
});