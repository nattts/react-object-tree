import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import responseData from "./responseData.json"
import Modal from "./components/modal/Modal";
import Form from "./components/form/Form";
import Node from "./components/node/Node";
import { actionCreators } from "./redux/index"
import { generateRandomStr } from "./utils/index";


function App() {

  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  let { importData } = bindActionCreators(actionCreators, dispatch)
  
  const [modalState, setModalState] = useState(false)
  const [formName, setFormName] = useState()

  useEffect(() => {
    let data = JSON.parse(JSON.stringify(responseData))
    importData(data)
  }, [])
  
  const handleShowModal = buttonName => {
    setFormName(buttonName)
    setModalState({ show:true })
  };
  const handleHideModal = () => setModalState({ show:false });

  return (
    <div className="App">
      <button onClick={() => handleShowModal("Add Category")}>{"Add Category"}</button>
      <button onClick={() => handleShowModal("Add Brand")}>{"Add Brand"}</button>
      <button onClick={() => handleShowModal("Add Product")}>{"Add Product"}</button>
     
      {modalState.show?
					<Modal
						show={modalState.show}
						handleClose={handleHideModal}
            formName={formName} 
						form={<Form formName={formName} handleClose={handleHideModal}/>}>
					</Modal>
				: null}
       

      {state?.data?.categories?.map(x => {
        let arr = null
          for(let prop in x) {
            if(Array.isArray(x[prop]) && x[prop]?.length > 0) {
              arr = x[prop]
              break
            }
          }
          return (<div
            key={generateRandomStr()} 
             id={x.id}
             data-propname={"categories"}>
              <Node 
                node={x} 
                children={arr} 
                key={generateRandomStr()}
              />  
            </div>)
      })}
 
    </div>
  );
}

export default App;
