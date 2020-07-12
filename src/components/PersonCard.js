import React, { Component } from "react";

class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAge: props.age,
    };
  }

  birthdayClick = () => {
    this.setState({
      currentAge: this.state.currentAge + 1,
    });
  };
  birthdayClickDecrease = () => {
    this.setState({
      currentAge: this.state.currentAge - 1,
    });
  };
  render() {
    const { firstname, lastname, age, hairColor } = this.props;
    return (
      <>
        <h1>
          {lastname}, {firstname}
        </h1>
        <p>Age: {this.state.currentAge}</p>
        <p>Hair Color: {hairColor}</p>
        <button onClick={this.birthdayClick}>
          Birthday Button for {firstname} {lastname}
        </button>
        <button onClick={this.birthdayClickDecrease}>Decrease Age</button>
      </>
    );
  }
}

export default PersonCard;
