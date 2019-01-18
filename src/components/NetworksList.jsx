import React from 'react';

import '../assets/scss/networks-list.scss';

export default ({ scan, onClickNetwork }) => {
  return (
    <div className="networks-list">
      Enter SSID or select a discovered network:
      <table>
        <thead>
          <tr>
            <th>Signal</th>
            <th>Network</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(scan).map(({ ssid, strength }) => (
            <tr key={ssid} onClick={() => onClickNetwork(ssid)}>
              <td>{strength}%</td>
              <td>{ssid}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
