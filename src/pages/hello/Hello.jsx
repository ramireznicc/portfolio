import { Memoji, Title, Subtitle } from "../../components";

import "./Hello.css";

const Hello = () => {
  return (
    <div className="container">
      <Memoji />
      <div className="title-container">
        <Title>NICOLÁS RAMIREZ</Title>
        <Subtitle>Frontend Developer</Subtitle>
      </div>
    </div>
  );
};

export default Hello;
