import React from 'react';
import {DateTime as LuxonDateTime} from "luxon";
import { Typography, TypographyProps } from '@material-ui/core';

/* eslint-disable-next-line */
export interface DateTimeProps extends TypographyProps {
  dateTime?:string
}

export function DateTime({
  dateTime,
  children,
  ...otherProps
}: DateTimeProps) {
  return (
    <time dateTime={dateTime} >
        <Typography
          {...otherProps}
        >
          { 
            children ||
            dateTime && LuxonDateTime.fromISO(dateTime).toLocaleString(LuxonDateTime.DATETIME_MED)
          }
        </Typography>
    </time>
  );
}

export default DateTime;
