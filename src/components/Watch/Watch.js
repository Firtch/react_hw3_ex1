import React from "react";
import "./styles/main.css";

export class Watch extends React.PureComponent {
  render() {
    return (
      <div id="clock">
        <h2>Время сейчас</h2>
        <div id="time">
          <div>
            <span id="hour">{this.props.hour}</span>
            <span>Часы</span>
          </div>
          <div>
            <span id="minutes">{this.props.min}</span>
            <span>Минуты</span>
          </div>
          <div>
            <span id="seconds">{this.props.sec}</span>
            <span>Секунды</span>
          </div>
        </div>
      </div>
    );
  }
}
