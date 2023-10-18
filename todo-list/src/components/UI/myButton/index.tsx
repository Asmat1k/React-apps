interface Props {
  style: string,
  text: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

function MyButton({style, text, onClick}: Props) {
  return (
    <button className={style} onClick={onClick}>
      {text}
    </button>
  );
}

export default MyButton;
