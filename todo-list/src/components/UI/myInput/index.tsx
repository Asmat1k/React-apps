import styles from './myInput.module.scss';

interface Props {
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

function MyInput({ type, placeholder, value, onChange }: Props) {
  return (
    <input
      type={type}
      className={styles.input}
      placeholder={placeholder}
      value={value ? value : ''}
      onChange={onChange}
    ></input>
  );
}

export default MyInput;
