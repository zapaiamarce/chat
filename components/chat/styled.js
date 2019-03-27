import styled from "styled-components";

export const Root = styled.div`
  background-image: url("/static/img/bg.jpg");
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
`;

export const Messages = styled.div`
  padding: 0 10px;
  @media (min-width: ${props => props.theme.screenSizes.small}) {
    padding: 0 50px;
  }
`;


export const MessageBoxContainer = styled.div`
  margin: 10px 0;
  text-align: ${props => (props.mine ? "right" : "inherit")};
`;

export const MessageBox = styled.div`
  background-color: ${props =>
    props.mine ? props.theme.colors.secondary : "white"};
  border: solid 1px #ddd;
  display: inline-block;
  padding: 15px;
  border-radius: ${props => props.theme.boxBorderRadius};
`;

export const MessageSenderName = styled.div`
  color: #ccc;
  font-size: 12px;
`;

export const MessageText = styled.div`
  font-size: 16px;
  color: #555;
  margin: 5px 0;
  max-width: 400px;
`;

export const MessageTime = styled(MessageSenderName)`
  text-align: ${props => (props.mine ? "right" : "inherit")};
`;


export const SendMessage = styled(Messages)`
  background-color: ${props => props.theme.colors.primary};
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
  grid-column-gap: 10px;
  /* padding: 10 10px; */
  @media (min-width: ${props => props.theme.screenSizes.small}) {
    padding: 5px 50px;
  }
`;