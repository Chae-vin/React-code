import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Grid } from '@mui/material';

export default function First() {
  const data = useOutletContext() || { message: null };
  const color = 'violet';

  return (
    <>
      {data.message && (
        <Grid
          sx={{
            width: '800px',
            height: '50px',
            backgroundColor: color,
            borderRadius: '5px',
            textAlign: 'left',
          }}
        >
          <p>{data.message}</p>
        </Grid>
      )}
    </>
  );
}
