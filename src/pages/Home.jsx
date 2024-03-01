import InputBox from "../components/InputBox";
import Header from "../layout/Header";
import TodoLists from "../components/TodoLists";

const Home = () => {
  return (
    <div>
      <Header />
      <InputBox />
      <TodoLists />
    </div>
  );
};

export default Home;
