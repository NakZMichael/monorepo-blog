import { atom, selector } from "recoil";

export const modeState = atom<'dark'|'light'>({
  key: 'mode',
  default: 'dark',
  effects_UNSTABLE: [
    ({ setSelf,onSet }) => {
      if (typeof window !== "undefined") {
        setSelf(window.localStorage.getItem('mode') as 'dark' | 'light');
      }
      onSet(newMode=> {
        localStorage.setItem('mode', newMode);
      })
    }
  ]
})