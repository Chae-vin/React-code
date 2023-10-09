import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Display from './Display';

function Third() {
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
      <Display message={message} bgColor="#3EB489" child="third" />
    </Grid>
  );
}

export default Third;
