import React from "react";
import "./HomeLogin.scss";

function HomeLogin() {

  const logout = () => {
    sessionStorage.clear();
    window.location.reload();
  };

  const deleteAccount = () => {
    // Adicione aqui a lógica para excluir a conta no servidor
    // ...

    // Limpar dados da sessão
    sessionStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <h1>Home Page</h1>
        <p>Welcome  {sessionStorage.getItem("name")}</p>
        <p>Email:  {sessionStorage.getItem("email")}</p>
        <button onClick={logout} className="logout">
        LogOut
        </button>
        <button onClick={deleteAccount} className="delete">
        Delete
        </button>
    </div>
  );
}

export default HomeLogin;
