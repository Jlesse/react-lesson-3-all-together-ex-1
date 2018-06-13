import React from "react"

const User = props => {
  const {userName, gamesPlayed} = props.user;
  const {showGamesPlayed} = props;
  let displayUser = '';

  if(showGamesPlayed){
    displayUser = `${userName} has played ${gamesPlayed}`
  }else{
    displayUser = `${userName}`
  }
  return (
    <li>{displayUser}</li>
  )
}

export default User;