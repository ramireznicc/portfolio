import "./Button.css";

const Button = ({ children }) => {
  return (
    <button className="button">
      <span className="button-text">{children}</span>
    </button>
  );
};

export default Button;
