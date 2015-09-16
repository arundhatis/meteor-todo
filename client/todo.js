// Task service
TaskService = {
	getTasks: function () {
		return Todos.find({}, { sort: { createdAt: -1 } });
	},
	removeTask: function (taskID) {
		Todos.remove({ _id: taskID });
	},
	updateTask: function (taskID, changeSet) {
		Todos.update({ _id: taskID }, { $set: changeSet });
	},
	insertTask: function (title) {
		var todo = {
			name: title,
			completed: false,
			createdAt: new Date()
		};
		Todos.insert(todo);
	}
};