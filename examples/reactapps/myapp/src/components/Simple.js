import React from "react";

export class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Welcome, {this.props.username}</h2>
      </div>
    );
  }
}
