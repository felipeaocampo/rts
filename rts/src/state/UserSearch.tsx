import { ChangeEventHandler, useRef, useState } from "react";

interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: `Sarah`, age: 20 },
  { name: `Alex`, age: 20 },
  { name: `Michael`, age: 20 },
];

const UserSearch = () => {
  const [user, setUser] = useState<User | null>(null);
  const [enteredName, setEnteredName] = useState(``);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const findHandler = () => {
    const x = users.find((user) => user.name === enteredName);

    if (x) {
      setUser(x);
    }
    setEnteredName(``);
  };

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEnteredName(e.target.value);
  };

  return (
    <div>
      UserSearch
      <input
        type="text"
        placeholder="Find User by name..."
        onChange={changeHandler}
        value={enteredName}
        ref={inputRef}
      />
      <button onClick={findHandler}>Find User!</button>
      <div>{`User name is: ${user?.name || ``} User age is: ${
        user?.age || ``
      }`}</div>
    </div>
  );
};

export default UserSearch;
