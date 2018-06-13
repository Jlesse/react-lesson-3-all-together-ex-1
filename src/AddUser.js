import React from "react";
import PropTypes from 'prop-types';

class AddUser extends React.Component {
  
  static propTypes = {
    onAddUser: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
  }

  state = {
    user: {
      firstName: "",
      lastName: "",
      userName: "",
      gamesPlayed: 0
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    //add code to check if exists
    this.props.onAddUser(this.state.user);
  }

  userExists = () => this.props.users.filter((u) => ( u.userName === this.state.user.userName)).length > 0

  isDisabled = () => {
    const { firstName, lastName, userName } = this.state.user;
    return firstName === '' || lastName === '' || userName === '' || this.userExists();
  };



  handleInput = event => {
    const {name, value} = event.target;
    this.setState(curState => ({
      ...curState,
      user: {
        ...curState.user,
        [name]: value,
      }  
    }))
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" 
               placeholder="First Name"
               value={this.state.user.firstName}
               name="firstName"
               onChange={this.handleInput}/>
        <input type="text" 
               placeholder="Last Name"
               value={this.state.user.lastName}
               name="lastName"
               onChange={this.handleInput}/>
        <input type="text" 
               placeholder="User Name"
               value={this.state.user.userName}
               name="userName"
               onChange={this.handleInput}/>
        <button disabled={this.isDisabled()}>Add</button>
        {this.userExists() ? (
          <p className="error">You cannot add a user that already exists.</p>
        ) : ('')}
      </form>
    )
  }

}

export default AddUser