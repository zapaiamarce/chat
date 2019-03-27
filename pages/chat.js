import InputText from "ui/input-text";
import Button from "ui/button";
import { useEffect } from "react";
import Router from "next/router";

export default () => {
  const handleClickChangeUser = e => {
    localStorage.removeItem("userName");
    Router.push("/");
  };

  return (
    <div>
      <button onClick={handleClickChangeUser}>ChangeUser</button>
      <div>
        Chat
      </div>
    </div>
  );
};
