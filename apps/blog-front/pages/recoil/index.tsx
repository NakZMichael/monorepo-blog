import { Box, CircularProgress, List, ListItem, TextField, Typography } from "@mui/material";
import { lime } from "@mui/material/colors";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { currentServerTodoState, currentTodoState, currentTodoTitleState, TodosState } from "./state";

/* eslint-disable-next-line */
export interface RecoilProps {}

export function Recoil(props: RecoilProps) {
  return (
    <Box>
      <Typography>
        Recoil ToDo App
      </Typography>
      <AllTodos />
      <CurrentTodo />
    </Box>
  );
}

export default Recoil;

const AllTodos = () => {
  const todos = useRecoilValueLoadable(TodosState);
  const setCurrentServerTodoState = useSetRecoilState(currentServerTodoState);
  const setCurrentTodoState = useSetRecoilState(currentTodoState);
  if (todos.state !== 'hasValue') {
    return <CircularProgress />
  }
  return (
    <Box
      sx={{
        border: 2,
        borderColor:theme=>theme.palette.primary.main
      }}
    >
      <Typography variant="h1">All Todos</Typography>
      <List>
        {todos.contents.map((todo) => (
          <ListItem
            key={todo.id}
            onClick={() => {
              setCurrentServerTodoState(todo);
              setCurrentTodoState(todo);
            }}
          >
            <Typography>{ todo.title }</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

const CurrentTodo = () => {
  return (
    <Box>
      <Typography>
        Current Todo
      </Typography>
      <CurrentTodoTitle />
    </Box>
  )
}

const CurrentTodoTitle = () => {
  const [currentTodoTitle, setCurrentTodoTitle] = useRecoilState(currentTodoTitleState);
  return (
    <Box
      sx={{display:'flex'}}
    >
      <Typography>Title</Typography>
      <TextField value={currentTodoTitle} onChange={(e)=>setCurrentTodoTitle(e.target.value)} />
    </Box>
  )
}



