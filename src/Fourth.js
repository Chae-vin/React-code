import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Display from './Display';

function Fourth() {
  const [message, setMessage] = useState("");

  const onChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <Grid>
      <div paddingBottom='10px' style={{ display: 'flex', flexDirection: 'column', marginTop: '15px' }}>
        <div paddingBottom='10px'>
          <input
            type='text'
            value={message}
            onChange={onChange}
            style={{ width: '993px', height: '40px', border: '1px solid black', borderRadius: '6px' }}
          />
        </div>
      </div>
      <Display message={message} bgColor="#ffb6c1" child="fourth" />
    </Grid>
  );
}

export default Fourth;
