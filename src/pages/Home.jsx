import { useState } from "react";
import InputBox from "../components/InputBox";
import Header from "../layout/Header";
import Working from "../components/Working";
import Done from "../components/Done";

const Home = () => {
  const [box, setBox] = useState([
    {
      id: Date.now(),
      title: "Todo List 정복!",
      body: "Todo List를 마스터해보자",
      isDone: false,
      deadline: "2024-01-31",
    },
  ]);

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
    <div className="container">
      <Header />
      <InputBox setBox={setBox} />
      <div className="boxContainer">
        <Working
          box={box}
          setBox={setBox}
          removeHandler={removeHandler}
          reLocateHandler={reLocateHandler}
        />
        <Done
          box={box}
          setBox={setBox}
          removeHandler={removeHandler}
          reLocateHandler={reLocateHandler}
        />
      </div>
    </div>
  );
};

export default Home;
