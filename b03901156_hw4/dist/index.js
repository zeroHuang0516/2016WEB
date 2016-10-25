"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React = React,
    Component = _React.Component;

//stateless objects

HEADER.propTypes = {
	createNewList: React.PropTypes.func.isRequired
};

var HEADER = function (_React$Component) {
	_inherits(HEADER, _React$Component);

	function HEADER(props) {
		_classCallCheck(this, HEADER);

		var _this = _possibleConstructorReturn(this, (HEADER.__proto__ || Object.getPrototypeOf(HEADER)).call(this, props));

		_this.handleEnter = _this.handleEnter.bind(_this);
		return _this;
	}

	_createClass(HEADER, [{
		key: "handleEnter",
		value: function handleEnter(ele) {
			if (eve.keyCode === 13 && ele.target.value != "") {
				this.props.createNewList(ele.target.value);
			}
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"header",
				{ className: "header" },
				React.createElement(
					"h1",
					null,
					"todos"
				),
				React.createElement("input", { className: "new-todo", onKeyDown: this.handleEnter, placeholder: "What needs to be done?", autofocus: true })
			);
		}
	}]);

	return HEADER;
}(React.Component);

var MAIN = function (_React$Component2) {
	_inherits(MAIN, _React$Component2);

	function MAIN() {
		_classCallCheck(this, MAIN);

		return _possibleConstructorReturn(this, (MAIN.__proto__ || Object.getPrototypeOf(MAIN)).apply(this, arguments));
	}

	_createClass(MAIN, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"section",
				{ className: "main" },
				React.createElement("input", { className: "toggle-all", type: "checkbox" }),
				React.createElement(
					"label",
					{ htmlfor: "toggle-all" },
					"Mark all as complete"
				),
				React.createElement(LIST, { count: this.props.count, listItem: this.props.listItem })
			);
		}
	}]);

	return MAIN;
}(React.Component);

var LIST = function (_React$Component3) {
	_inherits(LIST, _React$Component3);

	function LIST() {
		_classCallCheck(this, LIST);

		return _possibleConstructorReturn(this, (LIST.__proto__ || Object.getPrototypeOf(LIST)).apply(this, arguments));
	}

	_createClass(LIST, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"ul",
				{ className: "todo-list" },
				this.props.todoList.map(function (i) {
					return React.createElement(
						"li",
						null,
						this.props.i['listItem']
					);
				})
			);
		}
	}]);

	return LIST;
}(React.Component);

var FOOTER = function (_React$Component4) {
	_inherits(FOOTER, _React$Component4);

	function FOOTER() {
		_classCallCheck(this, FOOTER);

		return _possibleConstructorReturn(this, (FOOTER.__proto__ || Object.getPrototypeOf(FOOTER)).apply(this, arguments));
	}

	_createClass(FOOTER, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"footer",
				{ className: "footer" },
				React.createElement(
					"span",
					{ className: "todo-count" },
					this.props.count
				),
				React.createElement(
					"button",
					{ "class": "clear-completed" },
					"Clear completed"
				)
			);
		}
	}]);

	return FOOTER;
}(React.Component);

var TodoApp = function (_React$Component5) {
	_inherits(TodoApp, _React$Component5);

	function TodoApp(props) {
		_classCallCheck(this, TodoApp);

		var _this5 = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this, props));

		_this5.state = { count: 0, todoList: [] };

		//bind
		_this5.createNewList = _this5.createNewList.bind(_this5);
		return _this5;
	}

	_createClass(TodoApp, [{
		key: "createNewList",
		value: function createNewList(listItem) {
			var newList = this.state.todoList.slice();
			newList.push(listItem);
			this.setState({
				count: this.state.count + 1,
				todoList: newList
			});
		} //another way: this.setState({count: this.state.count+1; todoList: this.state.todoList.concat([{text: listItem}])})


	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"section",
				{ className: "todoapp" },
				React.createElement(HEADER, { createNewList: this.createNewList }),
				React.createElement(MAIN, { count: this.state.count, todoList: this.state.todoList }),
				React.createElement(FOOTER, { count: this.state.count })
			);
		}
	}]);

	return TodoApp;
}(React.Component);

/*ReactDOM.render(
  <TodoApp/>,
  document.getElementById('root')
);*/