import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux/index";
import { getBrandsByCategoryName, generateRandomStr } from "../../utils/index";
import  InputField  from "./details/InputField"
import  SelectField  from "./details/SelectField"
import  Button  from "./details/Button"

const Form = ({ formName, handleClose }) => {

  const [input, setInput] = useState("")
  const [categorySelect, setCategorySelect] = useState()
  const [brandSelect, setBrandSelect] = useState()


  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  let { addProduct, addBrand, addCategory } = bindActionCreators(actionCreators, dispatch)

  const handleAddCategory = e => {
    e.preventDefault()
    if(input) {
      addCategory({
        categoryName: input
      })
      handleClose()
    } 
  }

  const handleAddBrand = e => {
    e.preventDefault()
    if(input && categorySelect) {
      addBrand({
        categoryName: categorySelect,
        brandName: input
      })
      handleClose()
    } 
  }

  const handleAddProduct = e => {
    e.preventDefault()
    if(input && brandSelect && categorySelect) {
      addProduct({
        brandName: brandSelect,
        categoryName: categorySelect,
        productName: input
      })
      handleClose()
    } 
  }

let addCategoryForm = 
  <form>
    <InputField 
        value={input} 
        onChangeHandler={(e) => setInput(e.target.value)}
        />
    <Button clickHandler={handleAddCategory} title={"add"}></Button>
  </form>

let addBrandForm = 
  <form>
    <SelectField 
      selectName={"Category"}
      value={categorySelect} 
      onChangeHandler={(e) => setCategorySelect(e.target.value)}
      state={state?.data?.categories}
      />
    <InputField 
        fieldName={"Brand"} 
        value={input} 
        onChangeHandler={(e) => setInput(e.target.value)}
    />
   <Button clickHandler={handleAddBrand} title={"add"}></Button>
  </form>

let addProductdForm = 
  <form>
    <SelectField 
      selectName={"Category"}
      value={categorySelect} 
      onChangeHandler={(e) => setCategorySelect(e.target.value)}
      state={state?.data?.categories}
    />
    <SelectField 
      selectName={"Brand"}
      value={brandSelect} 
      onChangeHandler={(e) => setBrandSelect(e.target.value)}
      state={categorySelect ? getBrandsByCategoryName(state?.data?.categories, categorySelect): 
        [{name: "", id: generateRandomStr()}]}
    />
    <InputField 
        fieldName={"Name"} 
        value={input} 
        onChangeHandler={(e) => setInput(e.target.value)}
    />
    <Button clickHandler={handleAddProduct} title={"add"}></Button>
  </form>
  

  return (<div>
    {
      formName === "Add Category" ? addCategoryForm : 
      formName === "Add Brand" ? addBrandForm : 
      formName === "Add Product"? addProductdForm : null
    }
      </div>);
}
 
export default Form;


