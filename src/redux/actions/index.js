import { 
  getCategoryObjectByName, 
  getBrandObjectByName
} from "../../utils/index";


export const importData = (data) => {
  return (dispatch) => {
    dispatch({
      type: "import",
      payload: data
    })
  }
}

export const addCategory = ({ categoryName }) => {
  return (dispatch, getState) => {
    const state = getState()
    let categoryObj = getCategoryObjectByName(state?.data?.categories, categoryName)
    if(!categoryObj) {
        dispatch({
          type: "add category",
          payload: { categoryName }
        })
      }
  }
}

export const addBrand = ({ brandName, categoryName }) => {
  return (dispatch, getState) => {
    const state = getState()
      let categoryObj = getCategoryObjectByName(state?.data?.categories, categoryName)
      if(categoryObj && !categoryObj?.brands.find(x => x.name === brandName)?.name) {
        dispatch({
          type: "add brand",
          payload: { brandName, categoryName }
        })
      }
  }
}

export const addProduct = ({ brandName, categoryName,  productName}) => {
  return (dispatch, getState) => {
    const state = getState()
    let productsArray = getBrandObjectByName(state?.data?.categories, categoryName, brandName)?.products
    if(productsArray.every(x => x.name !== productName)) {     
      dispatch({
        type: "add product",
        payload: { brandName, categoryName,  productName }
      })
    }
  }
}

export const deleteProduct = ({ nodeName, topParentId, nodeId }) => {
  return (dispatch) => {
    if(nodeName && topParentId && nodeId) {
      dispatch({
        type: "delete product",
        payload: { nodeName, topParentId, nodeId }
      })
    }
  }
}

export const deleteBrand = ({ nodeName, topParentId, nodeId }) => {
  return (dispatch) => {
    if(nodeName && topParentId && nodeId ) {
      dispatch({
        type: "delete brand",
        payload: { nodeName, topParentId, nodeId }
      })
    }
  }
}

export const deleteCategory = ({ nodeName, topParentId, nodeId }) => {
  return (dispatch) => {
    if(nodeName && topParentId && nodeId) {
      dispatch({
        type: "delete category",
        payload: { nodeName, topParentId, nodeId }
      })
    }
  }
}



