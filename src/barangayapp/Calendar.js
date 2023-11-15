import React, { useState } from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function Calendar() {
  const [value, setValue] = useState(dayjs('2022-04-17'));

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div style={{ textAlign: 'center' }}>
          <h2>Uncontrolled calendar</h2>
          <DateCalendar defaultValue={dayjs('2022-04-17')} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <h2>Controlled calendar</h2>
          <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
        </div>
      </LocalizationProvider>
    </div>
  );
}
