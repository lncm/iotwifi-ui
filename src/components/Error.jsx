import React from 'react';

import ReloadButton from './ReloadButton';

export default ({ err }) => {
  return (
    <div className="info red">
      <b>Oops, something went wrong</b>
      <br />
      {err}
      <br />
      <br />
      <ReloadButton />
    </div>
  );
};
