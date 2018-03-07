import React, { Component } from 'react';

/**
 * Props:
 * onChange
 */

export default class Select extends Component {
  onChange = e => {
    const { onChange, id } = this.props;
    return onChange(e.target.value, id);
  };

  render() {
    const { id, value, options } = this.props;

    const renderOptions = d => {
      return (
        <option key={d.value} value={d.value}>
          {d.label}
        </option>
      );
    };

    const selectProps = { id, value };

    return (
      <select {...selectProps}>
        {options.map(renderOptions)}
      </select>
    );
  }
}
