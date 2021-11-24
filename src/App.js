import { useState } from "react";

const State = () => {
  const [title, setTitle] = useState("Title");

  const clickHandler = () => {
    setTitle("The title has been updated");
    console.log(title);
  };
  return (
    <div>
      <h2>Program to demonstrare state</h2>
      <button onClick={clickHandler}>Click to update title</button>
      <p>{title}</p>
    </div>
  );
};

export default State;
