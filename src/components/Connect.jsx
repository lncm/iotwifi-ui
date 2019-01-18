import React, { Component } from 'react';

import Spinner from './Spinner';
import ReloadButton from './ReloadButton';
import NetworksList from './NetworksList';

export default class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.ssidRef = React.createRef();
    this.passwordRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNetworkClick = this.handleNetworkClick.bind(this);
  }
  async handleSubmit(e) {
    e.preventDefault();
    const [ssid, psk] = [e.target[0], e.target[1]].map(n => n.value);
    this.setState({ loading: true });
    await this.props.onSubmit({ ssid, psk });
  }
  handleNetworkClick(ssid) {
    this.ssidRef.current.value = ssid;
    this.passwordRef.current.focus();
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
          <input ref={this.ssidRef} placeholder="SSID" type="text" />
          <input ref={this.passwordRef} placeholder="Password" type="password" />
          <button type="submit">Submit</button>
        </form>
        <br />
        <NetworksList scan={scan} onClickNetwork={this.handleNetworkClick} />
        <br />
        <ReloadButton />
      </div>
    );
  }
}
