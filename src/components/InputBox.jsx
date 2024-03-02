import * as St from "./styles/inputBox.styles";
import { addTodo } from "../api/todos-api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const InputBox = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (newTodo) => addTodo(newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const onAddHandler = async (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const contents = e.target.contents.value;
    const deadline = e.target.trip.value;

    if (!title) {
      alert("제목을 입력해주세요.");
      return;
    } else if (!contents) {
      alert("내용을 입력해주세요.");
      return;
    } else if (!deadline) {
      alert("마감일을 지정해주세요.");
      return;
    }
    const newTodo = {
      id: Date.now().toString,
      title: title,
      body: contents,
      isDone: false,
      deadline: deadline,
    };
    mutate(newTodo);

    e.target.reset();
  };

  return (
    <St.Container>
      <St.Title onSubmit={onAddHandler}>
        <St.TitleInput type="text" placeholder="제목" name="title" />
        <St.TitleInput type="text" placeholder="내용" name="contents" />
        <St.Time>
          <label htmlFor="start">마감일 :</label>
          <St.TimeInput
            type="date"
            id="start"
            name="trip"
            min="2024-01-01"
            max="2026-12-31"
          />
        </St.Time>
        <div className="addBtn">
          <St.AddBtn type="submit" className="btn text-white">
            추가하기
          </St.AddBtn>
        </div>
      </St.Title>
    </St.Container>
  );
};

export default InputBox;
