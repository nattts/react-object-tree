
const InputField = ({ value, fieldName, onChangeHandler }) => {
  return (
    <div>
      <div>{fieldName}</div>
      <input
        category="category"
        value={value}
				onChange={(e) => onChangeHandler(e, e.target.value)}
      />
    </div>
  )
}

export default InputField;