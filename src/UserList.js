import React from "react"
import User from "./User"


class UserList extends React.Component {
  state = {
    showGamesPlayed: true
  }
  
  toggleGamesPlayed = () => {
    this.setState(prevState => ({
      showGamesPlayed: !prevState.showGamesPlayed
    }))
  }
  render(){ 
    const {showGamesPlayed} = this.state;
    const {users} = this.props;
    const gamesPlayedToggle = (
      <div>
        <button onClick={this.toggleGamesPlayed}>
          {showGamesPlayed ? 'Hide' : 'Show'} Games Played
        </button>
      </div>
    );

    return (
      <div>
        {users && users.length > 0 ? gamesPlayedToggle : '' }
        <ol>
          {users.map((user) => (
            <User key={user.userName} user={user} showGamesPlayed={showGamesPlayed}/>
          ))}
        </ol>
      </div>
    )
  }
}

export default UserList;