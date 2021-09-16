import { generateRandomStr, deleteProduct, deleteBrand, deleteCategory } from "../../utils/index";

const reducer = (state={}, action) => {
  if(action.type === "import") {
    return {
      ...state,
      ...action.payload
      }
  }

  if(action.type === "add category") {
    let { categoryName } = action.payload
    let newData = {...state }
      newData.categories.push({
        id: generateRandomStr(),
        name: categoryName,
        brands: []
    })
    return {
      ...newData
    }
  }

  if(action.type === "add brand") {
    let { brandName, categoryName } = action.payload
    let newData = {...state }
      newData.categories
      .find(x => x.name === categoryName)?.brands
      .push({
        id: generateRandomStr(),
        name: brandName,
        products: []
    })
    return {
      ...newData
    }
  }

  if(action.type === "add product") {
    let { brandName, categoryName,  productName } = action.payload
    let newData = {...state }
    newData.categories
    .find(x => x.name === categoryName)?.brands
    .find(x => x.name === brandName)?.products
    .push({
      id: generateRandomStr(),
      name: productName
    })
    return {
      ...newData
    }
  }


  if(action.type === "delete product") {
    let { nodeName, topParentId, nodeId } = action.payload
    let newData = {...state }
    let result = deleteProduct(newData, topParentId, nodeName, nodeId )
    return {
      ...result
    }
  }

  if(action.type === "delete brand") {
    let { nodeName, topParentId, nodeId } = action.payload
    let newData = {...state }
    let result = deleteBrand(newData, topParentId, nodeName, nodeId)
    return {
      ...result
    }
  }
     
  if(action.type === "delete category") {
    let { nodeName, topParentId, nodeId } = action.payload
    let newData = {...state }
    let result = deleteCategory(newData, topParentId, nodeName, nodeId)
    return {
      ...result
    }
  } 
  
  return state
}


export default reducer;
