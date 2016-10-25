"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React = React,
    Component = _React.Component;

var TodoApp = function (_React$Component) {
  _inherits(TodoApp, _React$Component);

  function TodoApp(props) {
    _classCallCheck(this, TodoApp);

    var _this = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this, props));

    _this.state = { count: 0, todoList: [] };

    // bind
    _this.createNewList = _this.createNewList.bind(_this);
    return _this;
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
    } // another way: this.setState({count: this.state.count+1;
    // todoList: this.state.todoList.concat([{text: listItem}])})

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

HEADER.propTypes = {
  createNewList: React.PropTypes.func.isRequired
};

var HEADER = function (_Component) {
  _inherits(HEADER, _Component);

  function HEADER(props) {
    _classCallCheck(this, HEADER);

    var _this2 = _possibleConstructorReturn(this, (HEADER.__proto__ || Object.getPrototypeOf(HEADER)).call(this, props));

    _this2.handleEnter = _this2.handleEnter.bind(_this2);
    return _this2;
  }

  _createClass(HEADER, [{
    key: "handleEnter",
    value: function handleEnter(ele) {
      if (eve.keyCode === 13 && ele.target.value !== '') {
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
        React.createElement("input", {
          className: "new-todo",
          onKeyDown: this.handleEnter,
          placeholder: "What needs to be done?",
          autoFocus: true })
      );
    }
  }]);

  return HEADER;
}(Component);

var MAIN = function (_Component2) {
  _inherits(MAIN, _Component2);

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
          { htmlFor: "toggle-all" },
          "Mark all as complete"
        ),
        React.createElement(LIST, { count: this.props.count, listItem: this.props.listItem })
      );
    }
  }]);

  return MAIN;
}(Component);

var TodoItem = function (_Component3) {
  _inherits(TodoItem, _Component3);

  function TodoItem() {
    _classCallCheck(this, TodoItem);

    return _possibleConstructorReturn(this, (TodoItem.__proto__ || Object.getPrototypeOf(TodoItem)).apply(this, arguments));
  }

  _createClass(TodoItem, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "li",
        null,
        this.props.text
      );
    }
  }]);

  return TodoItem;
}(Component);

var LIST = function (_Component4) {
  _inherits(LIST, _Component4);

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
          return React.createElement(TodoItem, { listItem: i.listItem });
        })
      );
    }
  }]);

  return LIST;
}(Component);

var CountDisplay = function (_Component5) {
  _inherits(CountDisplay, _Component5);

  function CountDisplay() {
    _classCallCheck(this, CountDisplay);

    return _possibleConstructorReturn(this, (CountDisplay.__proto__ || Object.getPrototypeOf(CountDisplay)).apply(this, arguments));
  }

  _createClass(CountDisplay, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "span",
        { className: "todo-count" },
        this.props.count
      );
    }
  }]);

  return CountDisplay;
}(Component);

var FOOTER = function (_Component6) {
  _inherits(FOOTER, _Component6);

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
        React.createElement(CountDisplay, { count: this.props.count }),
        React.createElement(
          "button",
          { className: "clear-completed" },
          "Clear completed"
        )
      );
    }
  }]);

  return FOOTER;
}(Component);

ReactDOM.render(React.createElement(TodoApp, null), document.getElementById('root'));