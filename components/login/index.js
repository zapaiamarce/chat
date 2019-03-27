import { useEffect, useState } from "react";
import Router from "next/router";
import View from "./view";

export default () => {
  const [show, setShow] = useState();

  const handleLogin = userName => {
    localStorage.setItem("userName", userName);
    Router.push("/chat");
  };

  useEffect(() => {
    const currentUserName = localStorage.getItem("userName");
    if (currentUserName) {
      Router.push("/chat");
    } else {
      setShow(true);
    }
  }, []);

  return show ? <View onLogin={handleLogin} /> : null;
};
