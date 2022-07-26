import { DateTime } from "luxon";
import { atom, selector, useSetRecoilState } from "recoil";

export interface Todo{
  id: number,
  title:string,
  status: 'yet' | 'doing' | 'done',
  description: string,
  deadline: string,
}

const todos: Todo[] = [
  {
    id: 0,
    title: 'homework',
    status: 'yet',
    description: 'a homework of the class of math.',
    deadline: DateTime.fromObject({
      year:2022,
    }).setLocale('fr').toLocaleString(DateTime.DATETIME_FULL)
  }
]

const fetchAllTodos = async () => todos;

const serverTodosState = selector({
  key: 'server-todos',
  get: async() => {
    return fetchAllTodos();
  }
})

export const TodosState = atom<Todo[]>({
  key: 'todos',
  default: serverTodosState,
})

export const currentServerTodoState = atom<Todo>({
  key: 'current-seerver-todo',
  default: {
    id: -1,
    title: 'dummy',
    status: 'yet',
    description: 'dummy description',
    deadline: DateTime.fromObject({
      year:2022,
    }).setLocale('fr').toLocaleString(DateTime.DATETIME_FULL)
  },
})

export const currentTodoState = atom<Todo>({
  key: 'current-todo',
  default: {
    id: -1,
    title: 'dummy',
    status: 'yet',
    description: 'dummy description',
    deadline: DateTime.fromObject({
      year:2022,
    }).plus({
      year:-100
    }).setLocale('fr').toLocaleString(DateTime.DATETIME_FULL)
  }
})

export const currentTodoTitleState = selector({
  key: 'current-todo-title',
  get: ({ get }) => {
    return get(currentTodoState).title
  },
  set: ({ set }, newTitle) => {
    if (typeof newTitle == 'string') {
      set(currentTodoState, (prev) => ({
        ...prev,
        title:newTitle
      }))
    }
  }
})