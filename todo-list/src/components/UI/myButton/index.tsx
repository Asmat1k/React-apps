import { useContext } from "react";
import { Context } from "../../../context";

interface Props {
  style: string;
  text: string;
  onClick?: React.MouseEventHandler;
}

function MyButton({style, text, onClick}: Props) {
  const { saveInLocalStorage } = useContext(Context);

  return (
    <button className={style} onClick={onClick ? onClick : saveInLocalStorage}>
      {text}
    </button>
  );
}

export default MyButton;
