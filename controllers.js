toDoApp.controller('ToDoController', ['ToDoService', 'ToDoFactory', function(ToDoService, ToDoFactory) {
  var self = this;

  self.todos = ToDoService.getAll();

  self.addToDo = function (toDoText) {
    self.todos.push(new ToDoFactory(toDoText));
  };

  self.removeToDo = function() {
    self.todos.pop();
  };
}]);

