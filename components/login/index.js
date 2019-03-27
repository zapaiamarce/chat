import InputText from "ui/input-text";
import Button from "ui/button";
import { useEffect } from "react";
import Router from "next/router";

export default () => {
  const handleSubmit = e => {
    e.preventDefault();
    const userName = e.target.name.value;
    localStorage.setItem("userName", userName);
    Router.push("/chat");
  };

  useEffect(() => {
    const currentUserName = localStorage.getItem("userName");
    if (currentUserName) {
      Router.push("/chat");
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Your Name
        <div>
          <InputText id="name" name="name" />
        </div>
        <Button>Get In</Button>
      </label>
    </form>
  );
};
