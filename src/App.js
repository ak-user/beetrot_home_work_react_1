import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      users: [
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret"
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Antonette"
        },
        {
          "id": 3,
          "name": "Clementine Bauch",
          "username": "Samantha"
        },
        {
          "id": 4,
          "name": "Patricia Lebsack",
          "username": "Karianne"
        },
        {
          "id": 5,
          "name": "Chelsey Dietrich",
          "username": "Kamren"
        },
        {
          "id": 6,
          "name": "Mrs. Dennis Schulist",
          "username": "Leopoldo_Corkery"
        },
        {
          "id": 7,
          "name": "Kurtis Weissnat",
          "username": "Elwyn.Skiles"
        },
        {
          "id": 8,
          "name": "Nicholas Runolfsdottir V",
          "username": "Maxime_Nienow"
        },
        {
          "id": 9,
          "name": "Glenna Reichert",
          "username": "Delphine"
        },
        {
          "id": 10,
          "name": "Clementina DuBuque",
          "username": "Moriah.Stanton",
        }
      ]
    }
  }

  onClickAdd = () => {
    this.setState(previusState => ({
      count: previusState.count + 1
    }))
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.onClickAdd}>Add</button>
        <UserList users={this.state.users} />
      </div>
    )
  }
}

class UserList extends React.Component {
  render () {
    const { users } = this.props;

    return (
      <ul>
        {users.map(user => (
            <li key={user.id}>
              {user.name}: {user.username}
            </li>
          ))
        }
      </ul>
    )
  }
}

export default App;
