interface Props {
  checked: boolean,
  onChange: any,
}

function MyCheckBox({checked, onChange}: Props) {
  return (
    <div>
      <input checked={checked} onChange={onChange} type="checkbox" id="check" />
      <label htmlFor="check"></label>
    </div>
  );
}

export default MyCheckBox;
