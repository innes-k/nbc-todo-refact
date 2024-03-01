// import Done from "./Done";
// import Working from "./Working";
import styled from "styled-components";
import * as St from "./styles/working.style";

const TodoLists = ({ box, setBox }) => {
  // '완료' 클릭시 isDone을 true로, '취소' 클릭시 isDone을 false로 바꾸기
  const reLocateHandler = function (id) {
    const reLocateBox = box.map(function (item) {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    });
    setBox(reLocateBox);
  };

  // 삭제버튼 onclick
  const removeHandler = function (id) {
    const removeBox = box.filter(function (item) {
      return item.id !== id;
    });
    setBox(removeBox);
  };
  return (
    <>
      <TodoListsWrapper>
        <St.Title>
          <St.TitleSpan>📝 Working </St.TitleSpan>
          <St.TitleSelect
          //   value={sortOrder}
          //   onChange={(e) => {
          //     setSortOrder(e.target.value);
          //     changeSort(e.target.value);
          //   }}
          >
            <option value="asc">오름차순</option>
            <option value="desc">내림차순</option>
          </St.TitleSelect>
        </St.Title>
        <St.TodoListFlex>
          <St.TodoList>
            <St.TodoListBody>
              <St.Span>Title</St.Span>
              <p>body</p>
              <St.Time>
                {new Date().toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "long", // "long"을 사용하면 월 이름이 됨
                  day: "numeric",
                })}
                까지
              </St.Time>
            </St.TodoListBody>
            <St.TodoListBtns>
              <St.RemoveBtn onClick={() => removeHandler()}>
                삭제하기
              </St.RemoveBtn>
              <St.CompleteBtn onClick={() => reLocateHandler()}>
                완료하기
              </St.CompleteBtn>
            </St.TodoListBtns>
          </St.TodoList>
          <St.TodoList>
            <St.TodoListBody>
              <St.Span>Title</St.Span>
              <p>body</p>
              <St.Time>
                {new Date().toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "long", // "long"을 사용하면 월 이름이 됨
                  day: "numeric",
                })}
                까지
              </St.Time>
            </St.TodoListBody>
            <St.TodoListBtns>
              <St.RemoveBtn onClick={() => removeHandler()}>
                삭제하기
              </St.RemoveBtn>
              <St.CompleteBtn onClick={() => reLocateHandler()}>
                완료하기
              </St.CompleteBtn>
            </St.TodoListBtns>
          </St.TodoList>
          <St.TodoList>
            <St.TodoListBody>
              <St.Span>Title</St.Span>
              <p>body</p>
              <St.Time>
                {new Date().toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "long", // "long"을 사용하면 월 이름이 됨
                  day: "numeric",
                })}
                까지
              </St.Time>
            </St.TodoListBody>
            <St.TodoListBtns>
              <St.RemoveBtn onClick={() => removeHandler()}>
                삭제하기
              </St.RemoveBtn>
              <St.CompleteBtn onClick={() => reLocateHandler()}>
                완료하기
              </St.CompleteBtn>
            </St.TodoListBtns>
          </St.TodoList>
          <St.TodoList>
            <St.TodoListBody>
              <St.Span>Title</St.Span>
              <p>body</p>
              <St.Time>
                {new Date().toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "long", // "long"을 사용하면 월 이름이 됨
                  day: "numeric",
                })}
                까지
              </St.Time>
            </St.TodoListBody>
            <St.TodoListBtns>
              <St.RemoveBtn onClick={() => removeHandler()}>
                삭제하기
              </St.RemoveBtn>
              <St.CompleteBtn onClick={() => reLocateHandler()}>
                완료하기
              </St.CompleteBtn>
            </St.TodoListBtns>
          </St.TodoList>
        </St.TodoListFlex>
        <St.Title>
          <St.TitleSpan>👍🏻 Done </St.TitleSpan>
          <St.TitleSelect
          //   value={sortOrder}
          //   onChange={(e) => {
          //     setSortOrder(e.target.value);
          //     changeSort(e.target.value);
          //   }}
          >
            <option value="asc">오름차순</option>
            <option value="desc">내림차순</option>
          </St.TitleSelect>
        </St.Title>
        <St.TodoListFlex>
          <St.TodoList>
            <St.TodoListBody>
              <St.Span>Title</St.Span>
              <p>body</p>
              <St.Time>
                {new Date().toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "long", // "long"을 사용하면 월 이름이 됨
                  day: "numeric",
                })}
                까지
              </St.Time>
            </St.TodoListBody>
            <St.TodoListBtns>
              <St.RemoveBtn onClick={() => removeHandler()}>
                삭제하기
              </St.RemoveBtn>
              <St.CompleteBtn onClick={() => reLocateHandler()}>
                완료하기
              </St.CompleteBtn>
            </St.TodoListBtns>
          </St.TodoList>
          <St.TodoList>
            <St.TodoListBody>
              <St.Span>Title</St.Span>
              <p>body</p>
              <St.Time>
                {new Date().toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "long", // "long"을 사용하면 월 이름이 됨
                  day: "numeric",
                })}
                까지
              </St.Time>
            </St.TodoListBody>
            <St.TodoListBtns>
              <St.RemoveBtn onClick={() => removeHandler()}>
                삭제하기
              </St.RemoveBtn>
              <St.CompleteBtn onClick={() => reLocateHandler()}>
                완료하기
              </St.CompleteBtn>
            </St.TodoListBtns>
          </St.TodoList>
          <St.TodoList>
            <St.TodoListBody>
              <St.Span>Title</St.Span>
              <p>body</p>
              <St.Time>
                {new Date().toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "long", // "long"을 사용하면 월 이름이 됨
                  day: "numeric",
                })}
                까지
              </St.Time>
            </St.TodoListBody>
            <St.TodoListBtns>
              <St.RemoveBtn onClick={() => removeHandler()}>
                삭제하기
              </St.RemoveBtn>
              <St.CompleteBtn onClick={() => reLocateHandler()}>
                완료하기
              </St.CompleteBtn>
            </St.TodoListBtns>
          </St.TodoList>
          <St.TodoList>
            <St.TodoListBody>
              <St.Span>Title</St.Span>
              <p>body</p>
              <St.Time>
                {new Date().toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "long", // "long"을 사용하면 월 이름이 됨
                  day: "numeric",
                })}
                까지
              </St.Time>
            </St.TodoListBody>
            <St.TodoListBtns>
              <St.RemoveBtn onClick={() => removeHandler()}>
                삭제하기
              </St.RemoveBtn>
              <St.CompleteBtn onClick={() => reLocateHandler()}>
                완료하기
              </St.CompleteBtn>
            </St.TodoListBtns>
          </St.TodoList>
        </St.TodoListFlex>
      </TodoListsWrapper>
    </>
  );
};

export default TodoLists;

const TodoListsWrapper = styled.div``;
