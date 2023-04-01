import React, { useState } from 'react';

export default function Categories() {
  const [status, setStatus] = useState(false);
  const checkStatus = () => {
    setStatus(true);
    setTimeout(() => {
      setStatus(false);
    }, [2000]);
  };

  return (
    <div className="container categories">
      <button type="button" onClick={checkStatus}>
        {status ? 'Checking' : 'Check Status'}
      </button>
    </div>
  );
}
