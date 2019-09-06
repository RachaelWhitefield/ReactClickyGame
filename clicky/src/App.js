import React, { Component } from "react";
import FriendCard from "./components/FriendCard/FriendCard";
import Wrapper from "./components/Wrapper/Wrapper";
import friends from "./friends.json";
import Header from "./components/Header/Header";
import "./App.css";

class App extends Component {
  state = {
    clickedFriends: [],
    friends,
    score: 0,
    highscore: 0
  };

  clickCount = (id) => {
    let clickedFriendsCopy = [...this.state.clickedFriends];
    
    console.log(clickedFriendsCopy);
    if (clickedFriendsCopy.includes(id)) {
      console.log("They already clicked this friend")
      this.gameOver();
    } else {
      clickedFriendsCopy.push(id);
      this.setState({
        score: this.state.score + 1,
        clickedFriends: clickedFriendsCopy});
      }
  }

  gameOver = () => {
    console.log(this.state.score + "score")
    console.log(this.state.highscore + "highscore");
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score})
        console.log(this.state.highscore + "highscore");
    }
    this.state.friends.forEach(friend => {
      friend.count = 0;
    });
    alert(`Game Over \nscore: ${this.state.score}`);
    this.setState({score: 0});
  }

  render() {
    return (
      <Wrapper>
      <Header score={this.state.score} highscore={this.state.highscore}><strong>Clicky Game</strong></Header>
        {this.state.friends.map(friend => (
          <FriendCard
            clickCount={this.clickCount}
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
