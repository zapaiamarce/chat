import {
  Root,
  Messages,
  SendMessage,
  MessageBoxContainer,
  MessageBox,
  MessageSenderName,
  MessageText,
  MessageTime
} from "./styled";
import InputText from "ui/input-text";
import Button from "ui/button";
import moment from "moment";

export default ({ onChangeUser, messages, typingMessage, onMessageChange }) => {
  return (
    <Root>
      <Messages>
        {messages.map(m => (
          <MessageBoxContainer mine={m.mine}>
            <MessageBox mine={m.mine}>
              {!m.mine ? <MessageSenderName>{m.from}</MessageSenderName> : null}
              <MessageText>{m.text}</MessageText>
              <MessageTime mine={m.mine}>
                {moment(m.timestamp).format("D MMM YYYY, hh:mm")}
              </MessageTime>
            </MessageBox>
          </MessageBoxContainer>
        ))}
      </Messages>
      <SendMessage as="form">
        <InputText
          placeholder="Message"
          value={typingMessage}
          onChange={onMessageChange}
        />
        <Button>Send</Button>
      </SendMessage>
    </Root>
  );
};
