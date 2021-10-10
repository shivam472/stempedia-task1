import { useDispatch } from "react-redux";

const ComponentB = () => {
  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    dispatch({ type: "change", value: e.target.value });
  };
  return (
    <div>
      <input type="text" onChange={inputChangeHandler}></input>
    </div>
  );
};

export default ComponentB;
