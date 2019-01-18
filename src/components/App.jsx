import React from 'react';

import Selector from './Selector';

export default () => {
  return (
    <div id="layout-container">
      <div id="main-header">
        <h1>
          Select WiFi Network
        </h1>
      </div>
      <div className="content">
        <Selector />
      </div>
    </div>
  );
};
