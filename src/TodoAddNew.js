import React from 'react';

class TodoAddNew extends React.Component{

  constructor(props) {
    super(props);
    this.state = { items: [], text: '', date:'' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render(){
    return(
      <div className="col-lg-6">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
              <legend>Add New Task:</legend>
              <input ref="text"
                placeholder="Enter task"
                id="new-todo-text"
                onChange={this.handleChange}
                value={this.state.text}
              />
              <br />
              <input ref="date"
                placeholder="Enter Due Date"
                id="new-todo-dueDate"
                onChange={this.handleChange}
                value={this.state.date}
              />
              <br />
              <button> Add Task </button>
            </  fieldset>
          </form>
      </div>
      )
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
      const newItem = {
        text: this.state.text,
        date: this.state.date,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: '',
        date: ''
      }));
    }

  }

export default TodoAddNew;
