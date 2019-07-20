import React from 'react';

class TodoList extends React.Component {

  render() {
    return (
      <div className="col-lg-6" >
        <h2 className="mt-4 mb-3">My To Do List</h2>
        <ul>
          {this.props.items.map(item => (
            <li key={item._id}>
              <input type="checkbox"
                value={item.completed === true ? true : false }
                id={item._id}
                onChange={this.toggleStatus}/>
              <span className={item.completed === true ? 'completed' :'' }>
                {item.text} - {item.dueDate}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  toggleStatus(e){
    const completed = e.target.value === 'true' ? true: false;
    e.target.value = !completed;
    fetch('http://localhost:3001/' + e.target.id , {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        completed: !(e.target.value)
      }),
    })
    .then(
    )
  }


  handleChange(e) {
    this.setState({
     text: this.refs.text.value,
     date: this.refs.date.value
    });
  }
}

export default TodoList;
