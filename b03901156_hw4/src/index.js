const { Component } = React;

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, todoList: [] };

  // bind
    this.createNewList = this.createNewList.bind(this);
  }

  createNewList(listItem) {
    const newList = this.state.todoList.slice();
    newList.push(listItem);
    this.setState({
      count: this.state.count + 1,
      todoList: newList,
    });
  } // another way: this.setState({count: this.state.count+1;
    // todoList: this.state.todoList.concat([{text: listItem}])})
  render() {
    return (
      <section className="todoapp">
        <HEADER createNewList={this.createNewList} / >
        <MAIN count={this.state.count} todoList={this.state.todoList} / >
        <FOOTER count={this.state.count} / >
      </section>
  );
  }
}

HEADER.propTypes = {
  createNewList: React.PropTypes.func.isRequired,
};

class HEADER extends Component {
  constructor(props) {
    super(props);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleEnter(ele) {
    if (eve.keyCode === 13 && ele.target.value !== '') {
      this.props.createNewList(ele.target.value);
    }
  }
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          onKeyDown={this.handleEnter}
          placeholder="What needs to be done?"
          autoFocus / >
      </header>
  );
  }
}


class MAIN extends Component {
  render() {
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" / >
        <label htmlFor="toggle-all">Mark all as complete</label>
        <LIST count={this.props.count} listItem={this.props.listItem} / >
      </section>
  );
  }
}
class TodoItem extends Component {
  render() {
    return <li>{this.props.text}</li>;
  }
}

class LIST extends Component {
  render() {
    return (
      <ul className="todo-list">
        {
  this.props.todoList.map(function (i) {
    return (
      <TodoItem listItem={i.listItem}/>
  );
  })
  }
      </ul>
  );
  }
}
class CountDisplay extends Component {
  render() {
    return (
      <span className="todo-count">{this.props.count}</span>
    );
  }
}
class FOOTER extends Component {
  render() {
    return (
      <footer className="footer">
        <CountDisplay count={this.props.count} />
        <button className="clear-completed">Clear completed</button>
      </footer>
  );
  }
}



ReactDOM.render(
  <TodoApp / >,
  document.getElementById('root')
);
