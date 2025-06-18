import "./Button.css";

const Button = ({ text, type, onClick }) => {
  return (
    <div onClick={onClick} className={`Button Button_${type}`}>
      {text}
    </div>
  );
};
export default Button;
