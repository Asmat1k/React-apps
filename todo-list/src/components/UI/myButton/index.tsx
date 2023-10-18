import styles from './myButton.module.scss'

interface Props {
  text: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

function MyButton({text, onClick}: Props) {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
}

export default MyButton;
