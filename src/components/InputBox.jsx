import { useState } from "react";
import * as St from "./styles/inputBox.styles";
// import { useDispatch } from "react-redux";
// import { addTodos } from "../redux/modules/todoSlice";

// input Box 컴포넌트 (상단의 제목, 내용, 추가하기)
function InputBox({ setTodos }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [deadline, setDeadline] = useState("");
  // const dispatch = useDispatch();

  // input '제목' 입력한 value - onchange 함수
  const inputTitle = function (e) {
    setTitle(e.target.value);
  };

  // input '내용' 입력한 value - onchange 함수
  const inputBody = function (e) {
    setBody(e.target.value);
  };

  // deadline 변경 - onChange 함수
  const changeDeadline = (e) => {
    setDeadline(e.target.value);
  };

  // 제목, 내용 input을 빈칸으로 초기화하는 함수
  const makeInputEmpty = () => {
    setTitle("");
    setBody("");
  };

  // const addHandler = () => {
  //   const newTodo = {
  //     id: Date.now(),
  //     title: title,
  //     body: body,
  //     isDone: false,
  //     deadline: deadline,
  //   };
  //   dispatch(addTodos(newTodo));

  //   makeInputEmpty();
  // };

  // '추가하기'버튼 onclick
  const addHandler = function () {
    // 제목, 내용, 마감일 유효성 검사 alert
    if (title === "") {
      alert("제목을 입력해주세요.");
      makeInputEmpty();
    } else if (body === "") {
      alert("내용을 입력해주세요.");
      makeInputEmpty();
    } else if (deadline === "") {
      alert("마감일을 지정해주세요.");
    } else {
      setTodos((todo) => [
        ...todo,
        {
          id: Date.now(),
          title: title,
          body: body,
          isDone: false,
          deadline: deadline,
        },
      ]);

      // '추가' 클릭 후 input 빈칸으로 초기화
      makeInputEmpty();
    }
  };

  // enter키로 todo 추가하기
  const onCheckEnter = (e) => {
    if (e.key === "Enter") {
      addHandler();
    }
  };

  return (
    <St.Container>
      <St.Title>
        <St.TitleInput value={title} onChange={inputTitle} placeholder="제목" />
        <St.TitleInput
          onKeyPress={onCheckEnter}
          value={body}
          onChange={inputBody}
          placeholder="내용"
        />
        <St.Time>
          <label htmlFor="start">마감일 :</label>
          <St.TimeInput
            type="date"
            id="start"
            name="trip-start"
            min="2024-01-01"
            max="2026-12-31"
            value={deadline}
            onChange={changeDeadline}
          />
        </St.Time>
        <div className="addBtn">
          <St.AddBtn
            onClick={addHandler}
            type="button"
            className="btn text-white"
          >
            추가하기
          </St.AddBtn>
        </div>
      </St.Title>
    </St.Container>
  );
}

export default InputBox;
