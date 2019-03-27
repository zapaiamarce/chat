import Router from "next/router";
import View from "./view";

export default () => {
  const onChangeUser = e => {
    localStorage.removeItem("userName");
    Router.push("/");
  };
  return <View onChangeUser={onChangeUser} messages={[
    {
      from: "tom",
      text: "hi",
      timestamp:new Date()
    },
    {
      from: "Marce",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      mine: true,
      timestamp:new Date()
    }
  ]} />;
};
