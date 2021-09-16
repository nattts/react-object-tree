
const Button = ({ title, clickHandler }) => {

  return (
      <button onClick={(e) => clickHandler(e)}>{title}</button>
  );
}
 
export default Button;