import * as St from "./styles/working.style";
import TodoItem from "./TodoItem";

const TodoLists = ({ box, setBox }) => {
  return (
    <>
      <div>
        <St.Title>
          <St.TitleSpan>📝 Working </St.TitleSpan>
          <St.TitleSelect>
            <option value="asc">오름차순</option>
            <option value="desc">내림차순</option>
          </St.TitleSelect>
        </St.Title>
        <St.TodoListFlex>
          {box.map((todo) => {
            return (
              todo.isDone === false && (
                <TodoItem key={todo.id} box={box} setBox={setBox} />
              )
            );
          })}
        </St.TodoListFlex>
        <St.Title>
          <St.TitleSpan>👍🏻 Done </St.TitleSpan>
          <St.TitleSelect>
            <option value="asc">오름차순</option>
            <option value="desc">내림차순</option>
          </St.TitleSelect>
        </St.Title>
        <St.TodoListFlex>
          {box.map((todo) => {
            return (
              todo.isDone === true && (
                <TodoItem key={todo.id} box={box} setBox={setBox} />
              )
            );
          })}
        </St.TodoListFlex>
      </div>
    </>
  );
};

export default TodoLists;
