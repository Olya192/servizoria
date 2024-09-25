import { useNavigate } from "react-router-dom";

export const Homepage = () => {
  const navigate = useNavigate();
  const userExit = () => {
    console.log('3')
    localStorage.removeItem("name");
    navigate("/");
  };

  return (
    <>
      <p>Добро пожаловать, {localStorage.getItem("name")}</p>
      <button onClick={userExit}>выйти</button>
    </>
  );
};
