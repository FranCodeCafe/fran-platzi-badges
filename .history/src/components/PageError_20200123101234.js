import React from 'react';

import './styles/PageError.css';

function PageError(props) {
  return <div className="PageError">âŒ{props.error.message}ðŸ˜±</div>;
}

export default PageError;