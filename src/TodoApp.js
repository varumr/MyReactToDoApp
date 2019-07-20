import React from 'react';
import TodoList from './TodoList';


class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '', date:'' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
  //  console.log('componentWillMount');
     fetch('http://localhost:3001/')
      .then( response => response.json())
      .then( jsonData => this.setState({items:jsonData}))
    }

  render() {
    return (
      <div className="row mx-auto">
        <TodoList items={this.state.items} />
        <div className="col-lg-6">
          <form onSubmit={this.handleSubmit}>
            <fieldset>
                <legend>Add New Task:</legend>
                 Task:<br /> <input ref="text"
                  type="text"
                  id="new-todo-text"
                  onChange={this.handleChange}
                  value={this.state.name}
                />
                <br /><br />
                Due date: <br /><input ref="date"
                  type="date"
                  id="new-todo-dueDate"
                  onChange={this.handleChange}
                  value={this.state.date}
                />
                <br /><br />
                <button> Add Task </button>
              </fieldset>
            </form>
        </div>
      </div>
    );
  }

  handleChange(e) {
    this.setState({
     text: this.refs.text.value,
     date: this.refs.date.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const data = {
      text: this.state.text,
      dueDate: this.state.date,
      completed: false,
      userId: 1 //hardcoded userId until implementing athuntication
    };

    fetch('http://localhost:3001/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data
      }),
    })
    .then(
          this.setState(state => ({
          items: state.items.concat(data),
          text: '',
          date: ''
        })))
  }
}
export default TodoApp;
