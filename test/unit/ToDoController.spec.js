describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  it('initialises with a toDo', function() {
    expect(ctrl.todo).toEqual("Pinky");
  });

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));
});