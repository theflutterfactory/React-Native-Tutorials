import { atom, selector } from "recoil";

export const foodListState = atom({
  key: 'foodListState',
  default: []
})

export const listSize = selector({
  key: 'listSize',
  get: ({ get }) => (get(foodListState)).length
})