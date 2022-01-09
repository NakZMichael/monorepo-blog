import React, { useContext } from 'react'
export type ModeContextType = {
  mode: 'dark' | 'light',
  setMode: (mode: ModeContextType['mode'])=>void,
}
export const ModeContext = React.createContext<ModeContextType>({
  mode: 'light',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setMode:()=>{}
})

export const useMode = () => {
  return useContext(ModeContext);
}