import React, { Component } from 'react';
import { Wrapper, Input } from './Filter.styled';

export class Filter extends Component {
  handleChange = event => {
    const { value } = event.currentTarget;

    this.props.handler(value);
  };

  render() {
    return (
      <Wrapper>
        <p>Find by name:</p>
        <Input
          type="text"
          name="filter"
          value={this.props.value}
          onChange={this.handleChange}
        />
      </Wrapper>
    );
  }
}
