import Button from "../form/details/Button"
import "./Modal.css";

const Modal = ({ form, show, handleClose, formName }) => {

	let showHideClassName = show? "modal-display-block": "modal-display-none";

  return (
		<div className={showHideClassName}>
		
				<div className="modal-main">
					<div className="wrap">
						<div className="wrap-inner">{formName}
						<Button clickHandler={(e) => handleClose()} title={"x"}></Button>  
					</div>
					
						{form}
						
					</div>
		 		</div>
			
			
		</div>
  );
}

export default Modal;