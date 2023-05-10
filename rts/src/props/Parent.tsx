import Child from "./Child";

const Parent = () => {
  return (
    <Child ball={`This is a ball`} num={123}>
      Children text is here!!
    </Child>
  );
};

export default Parent;
