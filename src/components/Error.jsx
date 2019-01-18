import React from 'react';

import ReloadButton from './ReloadButton';

export default ({ err }) => {
  return (
    <div>
      <div className="info red">
      Oops, something went wrong
        <br />
        <b>{err}</b>
      </div>
      <ReloadButton />
    </div>
  );
};
