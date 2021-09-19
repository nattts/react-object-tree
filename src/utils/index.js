const getCategoryObjectByName = (categories, title) => categories.find(x => x.name === title)

const getBrandsByCategoryName = (categoriesArray, categoryName) => {
  return getCategoryObjectByName(categoriesArray, categoryName)?.brands
}

const getBrandObjectByName = (categoriesArray, categoryName, brandName) => {
  let brandsArray = getBrandsByCategoryName(categoriesArray, categoryName)
  return brandsArray.find(x => x.name === brandName)
}

function getChildrenPropName(node) {
  for(let each in node) {
    if(Array.isArray(node[each])) {
      return each
    } 
  }
}

const generateRandomStr = () => Math.random().toString(20).substring(2)


const deleteProduct = (state, topParentId,  nodeName, nodeId ) => {
  let category = state.categories.find(x => x.id === topParentId)
  for(let brand of category.brands) {
    for(let product of brand.products) {
      if(product.id === nodeId && product.name === nodeName) {
        brand.products = brand.products.filter(x => x.id !== nodeId && x.name !== nodeName)
       return state
       }

     }
  }
}

const deleteBrand = (state, topParentId,  nodeName, nodeId ) => {
  let category = state.categories.find(x => x.id === topParentId)
  for(let brand of category.brands) {
      if(brand.id === nodeId && brand.name === nodeName) {
        category.brands = category.brands.filter(x => x.id !== nodeId && x.name !== nodeName)
       return state
       }
  }
}

const deleteCategory = (state, topParentId,  nodeName, nodeId ) => {
  let category = state.categories.find(x => x.id === topParentId)
  if(category.id === nodeId && category.name === nodeName) {
    state.categories = state.categories.filter(x => x.id !== nodeId && x.name !== nodeName)
    return state
  }
}


module.exports = {
  deleteCategory,
  deleteBrand,
  deleteProduct,  
  generateRandomStr,
  getChildrenPropName,
  getCategoryObjectByName, 
  getBrandsByCategoryName,
  getBrandObjectByName,
}