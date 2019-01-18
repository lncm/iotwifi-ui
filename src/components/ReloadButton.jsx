import React from 'react';

export default () => {
  return (
    <button
      type="submit"
      onClick={(e) => {
        e.preventDefault();
        window.location.reload();
      }}
    >
      Try Again
    </button>
  );
};
