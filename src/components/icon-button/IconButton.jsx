import "./IconButton.css";

const IconButton = ({ icon, link }) => {
  return (
    <a className="icon" href={link} target="_blank" rel="noreferrer">
      {icon}
    </a>
  );
};

export default IconButton;
