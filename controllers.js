toDoApp.controller('ToDoController', function() {
  var self = this;

  self.todos = [{ task: "ToDo1", completed: true}, {task: "ToDo2", completed: false}];

  self.addToDo = function (text) {
    self.todos.push({ task: text, completed: false });
  };

  self.removeToDo = function() {
    self.todos.pop();
  };
});

