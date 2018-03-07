import React, { Component } from 'react';
import '../css/App.css';
import Select from './Select.js';

export default class App extends Component {
  onChange = () => {
    console.log('onChange');
  }

  render() {
    const selectPlan = (
      <span>
        <Select
          id="some-id"
          value="intermediate"
          onChange={this.onChange}
          options={[
            { value: "novice", label: "novice" },
            { value: "intermediate", label: "intermediate" },
            { value: "advanced", label: "advanced" }
          ]}
        />
      </span>
    );

    return (
      <div className="App">
        <div className="App-instructions">
          Generate a {selectPlan} training plan for my half marathon on July 3, 2018.
        </div>
      </div>
    );
  }
}
