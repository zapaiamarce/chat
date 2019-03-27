import {
  Root,
  Messages,
  SendMessage,
  MessageBoxContainer,
  MessageBox,
  MessageSenderName,
  MessageText,
  MessageTime,
  ChangeUserButton
} from "./styled";
import InputText from "ui/input-text";
import Button from "ui/button";
import moment from "moment";

export default ({
  onLogoutUser,
  messages,
  typingMessage,
  onMessageChange,
  onMessageSubmit,
  currentUserName
}) => {
  const handleMessageSubmit = e => {
    e.preventDefault();
    onMessageSubmit(e.target.message.value)
  };
  const handleTypingMessage = e => {
    onMessageChange(e.target.value)
  };
  const messagesWithExtras = messages.map(m=>({
    ...m,
    mine:m.author == currentUserName
  }))

  return (
    <Root>
      <ChangeUserButton onClick={onLogoutUser}>{currentUserName} (Logout)</ChangeUserButton>
      <Messages>
        {messagesWithExtras.map(m => (
          <MessageBoxContainer mine={m.mine} key={m._id}>
            <MessageBox mine={m.mine}>
              {!m.mine ? <MessageSenderName>{m.author}</MessageSenderName> : null}
              <MessageText>{m.message}</MessageText>
              <MessageTime mine={m.mine}>
                {moment(m.timestamp).format("D MMM YYYY, hh:mm")}
              </MessageTime>
            </MessageBox>
          </MessageBoxContainer>
        ))}
      </Messages>
      <SendMessage as="form" onSubmit={handleMessageSubmit}>
        <InputText
          name="message"
          placeholder="Message"
          value={typingMessage}
          onChange={handleTypingMessage}
        />
        <Button>Send</Button>
      </SendMessage>
    </Root>
  );
};
