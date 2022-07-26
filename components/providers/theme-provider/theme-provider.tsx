import React from "react";
import { ThemeProvider as MuiThemeProvider} from '@mui/material'
import { modeState,getTheme } from "../../../lib";
import { useRecoilValue } from "recoil";

/* eslint-disable-next-line */
export interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider(props: ThemeProviderProps) {
  const mode = useRecoilValue(modeState);
  return (
    <MuiThemeProvider theme={getTheme(mode)} >
      {props.children}
    </MuiThemeProvider>
  );
}

export default ThemeProvider;
