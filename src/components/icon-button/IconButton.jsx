import "./IconButton.css";

const IconButton = ({ icon, size, link, onClick }) => {
  return (
    <button onClick={onClick}>
      <a
        style={{ fontSize: `${size}` }}
        className="icon"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {icon}
      </a>
    </button>
  );
};

export default IconButton;
