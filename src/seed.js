'use strict';

var Todo = require('./models/todo.js');

var todos =[
	"reply to dad's tech question email from two weeks ago.",
	"reveal identity of left shark.",
	"sing karaoke",
	"reply to dad's follow up email"
];

todos.forEach(function(todo, index){
	Todo.find({"name": todo}, function(err, todos){
		if(!err && !todos.length){
			Todo.create({completed: false, name: todo});
		};
	});
});