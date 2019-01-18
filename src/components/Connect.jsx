import React, { Component } from 'react';

import Spinner from './Spinner';

export default class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(e) {
    e.preventDefault();
    const [ssid, password] = [e.target[0], e.target[1]].map(n => n.value);
    this.setState({ loading: true });
    await this.props.onSubmit({ ssid, password });
  }
  render() {
    const { scan } = this.props;
    const { loading } = this.state;
    if (loading) {
      return <Spinner />;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="SSID" type="text" />
          <input placeholder="password" type="password" />
          <button type="submit">Submit</button>
        </form>
        Select a network:
        {!scan && <Spinner />}
        <pre>{JSON.stringify(scan, null, 2)}</pre>
      </div>
    );
  }
}
