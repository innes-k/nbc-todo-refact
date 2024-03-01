import InputBox from "../components/InputBox";
import Header from "../layout/Header";
import TodoLists from "../components/TodoLists";
import { useState } from "react";

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
  return (
    <div>
      <Header />
      <InputBox setBox={setBox} />
      <TodoLists box={box} setBox={setBox} />
    </div>
  );
};

export default Home;
