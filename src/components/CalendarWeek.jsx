import React from 'react';
import { forbidExtraProps, or, childrenOfType } from 'airbnb-prop-types';

import CalendarDay from './CalendarDay';
import CustomizableCalendarDay from './CustomizableCalendarDay';

// Disabling propTypes check to fix HMR bug
// https://github.com/gaearon/react-hot-loader/issues/304
// https://github.com/airbnb/react-dates/issues/950
// const propTypes = forbidExtraProps({
//   children: or([childrenOfType(CalendarDay), childrenOfType(CustomizableCalendarDay)]).isRequired,
// });

export default function CalendarWeek({ children }) {
  return (
    <tr>
      {children}
    </tr>
  );
}

// CalendarWeek.propTypes = propTypes;
