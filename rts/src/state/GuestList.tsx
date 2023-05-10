import { ChangeEventHandler, FC, useState } from "react";

const GuestList: FC = () => {
  const [guests, setGuests] = useState<string[]>([]);
  const [enteredGuest, setEnteredGuest] = useState(``);

  const AddGuestHandler = (): void => {
    setGuests((prev) => {
      return [...prev, enteredGuest + `, `];
    });
    setEnteredGuest(``);
  };

  const ChangeHandler: ChangeEventHandler<HTMLInputElement> = (e): void => {
    setEnteredGuest(e.target.value);
  };

  return (
    <div>
      <h3>GuestList</h3>
      <div>{guests}</div>
      <input value={enteredGuest} onChange={ChangeHandler} type="text" />
      <button onClick={AddGuestHandler}>Add Guest!</button>
    </div>
  );
};

export default GuestList;
