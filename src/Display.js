import React, { useState, useEffect } from 'react';

function Display(props) {
  const { message, bgColor, child } = props;
  const [currentMessage, setCurrentMessage] = useState('');

  useEffect(() => {
    if (child !== currentMessage.child) {
      setCurrentMessage({ child, message: '' });
    } else if (message !== currentMessage.message) {
      setCurrentMessage({ ...currentMessage, message });
    }
  }, [child, message, currentMessage]);

  // Determine the background color based on whether there's a message.
  const backgroundColor = currentMessage.message ? bgColor : 'transparent';

  return (
    <div style={{ padding: 30, margin: 20, border: '1px solid' }}>
      <div>
        <p
          style={{
            height: '40px',
            width: '920px',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'flex-start',
            paddingLeft: '10px',
            alignItems: 'center',
            backgroundColor: backgroundColor,
          }}
        >
          {currentMessage.message}
        </p>
      </div>
    </div>
  );
}

export default Display;
