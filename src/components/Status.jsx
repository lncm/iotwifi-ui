import React from 'react';

export default ({ status }) => {
  return (
    <div className={`info ${status.ssid ? 'green' : 'red'}`}>
      {status.ssid
        ? <span>Currently connected to <i>{status.ssid}</i></span>
        : <span>Not Connected to a WiFi Network</span>
      }
    </div>
  );
};
