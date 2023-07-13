import { Memoji, Title, Subtitle } from "../../components";

import "./Hello.css";

const Hello = () => {
  return (
    <div className="container hello">
      <Memoji />
      <div className="title-container">
        <Title>NICOLÁS RAMIREZ</Title>
        <Subtitle>Front-end Developer</Subtitle>
      </div>
    </div>
  );
};

export default Hello;
