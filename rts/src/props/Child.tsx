import { FC } from "react";

interface ChildProps {
  ball: string;
  num: number;
  children?: React.ReactNode;
}

const Child: FC<ChildProps> = ({ ball, num, children }) => {
  return (
    <div>
      Child
      <ul>
        <li>{ball}</li>
        <li>{num}</li>
      </ul>
      {children}
    </div>
  );
};

export default Child;
