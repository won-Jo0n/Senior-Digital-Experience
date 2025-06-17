const Button = ({ text, type, onClick }) => {
  return (
    <div>
      <div onClick={onClick} className={`Button Button_${type}`}>
        {text}
      </div>
    </div>
  );
};
export default Button;
