interface Props {
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function MyCheckBox({ checked, onChange }: Props) {
  return (
    <input checked={checked} onChange={onChange} type="checkbox" id="check" />
  );
}

export default MyCheckBox;
