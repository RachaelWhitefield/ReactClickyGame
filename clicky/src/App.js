import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  state = {
    friends
  }

  render() {
    return (
      <Wrapper>
      <h1 className="title">Clicky Game</h1>
        {this.state.friends.map(friend => (
          <FriendCard
            image={friend.image}
            name={friend.name}
            key={friend.id}
            id={friend.id}
          ></FriendCard>
        ))}
      </Wrapper>
    );
  }
}

export default App;
