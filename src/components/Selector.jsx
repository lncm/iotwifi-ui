import React, { Component } from 'react';

import * as api from '../api';

import Spinner from './Spinner';
import Status from './Status';
import Error from './Error';
import Connect from './Connect';

export default class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.fetch('status');
    this.fetch('scan');
  }
  async fetch(type, params) {
    try {
      this.setState({ [type]: await api[type](params) });
    } catch (err) {
      this.setState({ err });
    }
  }
  render() {
    const { status, err, connect, scan } = this.state;
    if (err) {
      return <Error err={err} />;
    }
    if (!status) {
      return <Spinner />;
    }
    if (connect) {
      return <Status status={connect} />;
    }
    return (
      <div>
        <Status status={status} />
        <Connect
          scan={scan}
          onSubmit={props => this.fetch('connect', props)}
        />
      </div>
    );
  }
}
