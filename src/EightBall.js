import React, { Component } from "react";

class EightBall extends Component {
  static defaultProps = {
    answers:
      [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
      ]
  };

  constructor(props) {
    super(props);
    this.state = { msg: "Think of a question...", color: "black" };
    this.handleClick = this.handleClick.bind(this);
    this.resetBall = this.resetBall.bind(this);
  }

  getRandom() {
    const idx = Math.floor(Math.random() * this.props.answers.length);
    return this.props.answers[idx];
  }

  
  handleClick() {
    this.setState({ msg:'Thinking....'});
    const { msg, color } = this.getRandom();
    
    setTimeout(() => {
      this.setState({ msg, color });
    }, 1000);
  }

  resetBall() {
    this.setState({ msg:'Think of another question', color: "black"});
  }

  render() {
    return (
      <div>
        <span className="dot animated shake" onClick={this.handleClick} style={{backgroundColor: this.state.color}}>{this.state.msg}</span>
        <button className="btn" type="button" onClick={this.resetBall}>Reset</button>
      </div>
    )
  }
}


export default EightBall;