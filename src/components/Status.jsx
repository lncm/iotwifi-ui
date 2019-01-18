import React from 'react';

export default ({ status }) => {
  return (
    <div>
      Status:
      <pre>{JSON.stringify(status, null, 2)}</pre>
    </div>
  );
};
