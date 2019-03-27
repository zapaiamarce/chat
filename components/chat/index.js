import Router from "next/router";
import View from "./view";
import { useState, useEffect } from "react";
import * as chatClient from "lib/chat";

export default () => {
  const [typingMessage, setTypingMessage] = useState("");
  const [messages, setLastMessages] = useState([]);
  const [userName, setUserName] = useState();

  const onLogoutUser = e => {
    localStorage.removeItem("userName");
    Router.push("/");
  };
  const syncMessages = async () => {
    const messages = await chatClient.getMessages();
    setLastMessages(messages);
    console.log("messages sync");
  };

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    if (userName) {
      setUserName(userName);
      setInterval(syncMessages, 2000);
    } else {
      onLogoutUser();
    }
  }, []);

  const handleSubmitMessage = async message => {
    setTypingMessage("");
    await chatClient.sendMessage({
      message,
      author: userName
    });
    syncMessages();
  };

  return (
    <View
      typingMessage={typingMessage}
      onMessageChange={setTypingMessage}
      onMessageSubmit={handleSubmitMessage}
      onLogoutUser={onLogoutUser}
      currentUserName={userName}
      messages={messages}
    />
  );
};
