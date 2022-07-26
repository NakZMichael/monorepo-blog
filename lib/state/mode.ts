import { atom} from "recoil";

export const modeState = atom<'dark'|'light'>({
  key: 'theme-mode',
  default: 'dark',
  effects: [
    ({ setSelf,onSet }) => {
      onSet(newMode=> {
        localStorage.setItem('mode', newMode);
      })
    }
  ]
})
