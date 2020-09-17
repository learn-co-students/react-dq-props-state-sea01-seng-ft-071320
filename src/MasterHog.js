import React, { Component } from "react";
import Master from "./assets/master-hog.png";
import BabyHog from "./BabyHog";
// import offspring from './db.js'

export default class MasterHog extends Component {
  state = {
    eyeColor: "blue",
  };

  changeEyeColor = (event) => {
    this.setState({
      eyeColor: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          checked={this.state.eyeColor === "blue"}
          type="radio"
          name="eyeColor"
          value="blue"
          onChange={this.changeEyeColor}
        />
        Blue<br></br>
        <input
          checked={this.state.eyeColor === "sun"}
          type="radio"
          name="eyeColor"
          value="sun"
          onChange={this.changeEyeColor}
        />
        Sun<br></br>
        <input
          checked={this.state.eyeColor === "glowing"}
          type="radio"
          name="eyeColor"
          value="glowing"
          onChange={this.changeEyeColor}
        />
        Glowing<br></br>
        <h2>Name: Master Blaster</h2>
        <h3>Weight: 2.54 Tons</h3>
        <h3>Eye Color: {this.state.eyeColor}</h3>
        <div id="masters-domicile">
          <img id="master-blaster" src={Master} alt="" />
        </div>
        <ul className="hoglist">
          <BabyHog
            name="Sakura"
            eyeColor={this.state.eyeColor}
            hobby="bushcraft"
          />
          <BabyHog
            name="Carl"
            eyeColor={this.state.eyeColor}
            hobby="flower arranging"
          />
          <BabyHog
            name="Damocles"
            eyeColor={this.state.eyeColor}
            hobby="purging the heretic"
          />
        </ul>
      </div>
    );
  }
}
