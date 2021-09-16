import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux/index";
import { generateRandomStr, getChildrenPropName } from "../../utils/index";
import Button from "../form/details/Button"


const Node = ({ node, children }) => {

  const dispatch = useDispatch()
  let { deleteProduct, deleteBrand, deleteCategory } = bindActionCreators(actionCreators, dispatch)

  let methodMap = {
    products: deleteProduct,
    brands: deleteBrand,
    categories: deleteCategory
  }

  const handleDelete = (e, nodeName, nodeId) => {
    e.preventDefault()
    let topParentId = e.target.closest('div').id
    let arrayPropertyName = e.target.parentNode.parentNode.getAttribute("data-propname")
    // methodMap[arrayPropertyName]({ nodeName, topParentId, nodeId, arrayPropertyName })
    methodMap[arrayPropertyName]({ nodeName, topParentId, nodeId })
  }

  let childnodes = null;

  if(children) {      
    childnodes = children.map(x => {
      let arr = null
      for(let prop in x) {
        if(Array.isArray(x[prop]) && x[prop]?.length > 0) {
          arr = x[prop]
        }
      }
     return <Node node={x} children={arr} key={generateRandomStr()} />
   });
  }

  return (<li key={node.id} > 
            {node.name} 
            <span>   </span> 
            <Button clickHandler={(e) => handleDelete(e, node.name, node.id)} title={"delete"}></Button>    
          { childnodes ?
            <ul data-propname={getChildrenPropName(node)} >{childnodes}</ul>
          : null }
        </li>)
}

export default Node;
