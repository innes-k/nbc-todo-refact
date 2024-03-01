import styled from "styled-components";
import * as St from "./styles/working.style";
import TodoItem from "./TodoItem";

const TodoLists = ({ box, setBox }) => {
  return (
    <>
      <TodoListsWrapper>
        <St.Title>
          <St.TitleSpan>📝 Working </St.TitleSpan>
          <St.TitleSelect>
            <option value="asc">오름차순</option>
            <option value="desc">내림차순</option>
          </St.TitleSelect>
        </St.Title>
        <St.TodoListFlex>
          <TodoItem box={box} setBox={setBox} />
        </St.TodoListFlex>
        <St.Title>
          <St.TitleSpan>👍🏻 Done </St.TitleSpan>
          <St.TitleSelect>
            <option value="asc">오름차순</option>
            <option value="desc">내림차순</option>
          </St.TitleSelect>
        </St.Title>
        <St.TodoListFlex>
          <TodoItem box={box} setBox={setBox} />
        </St.TodoListFlex>
      </TodoListsWrapper>
    </>
  );
};

export default TodoLists;

const TodoListsWrapper = styled.div``;
