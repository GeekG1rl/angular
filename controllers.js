toDoApp.controller('ToDoController', ['ToDoFactory', function(ToDoFactory) {
  var self = this;

  self.todos = [{ text: "ToDo1", completed: true}, {text: "ToDo2", completed: false}];

  self.addToDo = function (toDoText) {
    self.todos.push(new ToDoFactory(toDoText));
  };

  self.removeToDo = function() {
    self.todos.pop();
  };
}]);

