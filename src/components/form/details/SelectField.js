import { generateRandomStr } from "../../../utils/index";

const SelectField = ({ value, selectName, formName, onChangeHandler, state }) => {
  return (
    <div>
      {formName}
      <div>{selectName}</div>
      <select value={value} 
            n="category" 
            id="category" 
            onChange={(e) => onChangeHandler(e)}>
           {[{name: "", id: generateRandomStr()}].concat(state).map(x=> <option key={x.id}>{x.name}</option>)}
      </select>
    </div>
  )
}

export default SelectField;