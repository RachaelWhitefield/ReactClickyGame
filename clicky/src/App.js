import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
// import Header from "./components/Header";
import "./App.css";

class App extends Component {
  state = {
    friends,
    score: 0,
    hightscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.hghscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over \nscore: ${this.state.score}`);
    this.setState({score: 0});
  }

  render() {
    return (
      <Wrapper>
      <header score={this.state.score} highscore={this.state.hightscore}><strong>Clicky Game</strong></header>
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
