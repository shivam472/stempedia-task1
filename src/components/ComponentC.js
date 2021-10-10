import { useSelector } from "react-redux";

const ComponentC = () => {
  const inputValue = useSelector((state) => state.inputValue);

  return <p>{inputValue}</p>;
};

export default ComponentC;
