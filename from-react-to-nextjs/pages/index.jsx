import { useState } from "react";

const Header = ({ title }) => {
  return <h1>{title ? title : "Default title"}</h1>;
};

const HomePage = () => {
  const names = ["Ada", "Grace", "Margaret", "New Member"];

  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <Header title="Develop. Preview. Ship. 💖" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
};

export default HomePage
