/* global spyOn */

describe('TaskService', function () {
  'use strict';
  describe("getTasks", function () {
    it('should return all tasks from DB in descending in descending order of creation', function () {
      var result = [];
      spyOn(Todos, 'find').and.returnValue(result);
      expect(TaskService.getTasks()).toBe(result);
      expect(Todos.find.calls.argsFor(0)).toEqual([{}, { sort: { createdAt: -1 } }]);
    });
  });


  describe("removeTask", function () {
    it("should remove the selected task from DB", function () {
      var taskID = 1,
        result = { _id: taskID };
      spyOn(Todos, 'remove');
      TaskService.removeTask(taskID);
      expect(Todos.remove.calls.argsFor(0)).toEqual([result])
    });
  });
});
