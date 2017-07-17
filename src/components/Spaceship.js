// Code The Spaceship Component Here
import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    const {name, speed, hasRockets, colors} = this.props

    return (
      <div>
        <h1>Spaceship Name: {this.props.name}</h1>
        <h1>Speed: {this.props.speed}</h1>
        <h1>Has Rockets: {this.props.hasRockets}</h1>
        <h1>Colors: {this.props.colors}</h1>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: `['black', 'red']`
};
