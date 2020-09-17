import React, { Component } from "react";
import { Button } from "semantic-ui-react";
//import normalBaby from "./assets/unadulterated-hoglette.png";
import SunBaby from "./assets/sun-eyes.png";
import BlueBaby from "./assets/blue-eyes.png";
import GlowingBaby from "./assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

export default class BabyHog extends Component {
  state = {
    weight: this.props.weight || 10,
    images: {
      blue: BlueBaby,
      sun: SunBaby,
      glowing: GlowingBaby,
    },
  };

  changeWeight = (event) => {
    const newWeight =
      event.target.name === "+"
        ? this.state.weight + 10
        : this.state.weight - 10;

    if (newWeight <= 0) return;

    this.setState({
      weight: newWeight,
    });
  };

  render() {
    return (
      <li className="hogbabies">
        <h1>Name: {this.props.name}</h1>
        <h3>Weight: {this.state.weight}</h3>
        <h3>Hobby: {this.props.hobby}</h3>
        <h4>Eye Color: {this.props.eyeColor}</h4>

        <Button onClick={this.changeWeight} name="+">
          Increase Weight
        </Button>
        <Button onClick={this.changeWeight} name="-">
          Decrease Weight
        </Button>

        <div className="hb-wrap">
          <img
            src={this.state.images[this.props.eyeColor]}
            style={{ height: "200px" }}
            alt="MasterBlasterJrJr"
          />
        </div>
      </li>
    );
  }
}
