import styled from "styled-components";

export const Input = styled.input`
  padding: ${props => props.theme.boxPadding};
  border: solid 1px black;
  border-radius: ${props => props.theme.boxBorderRadius};
`;

export const FullWidthInput = styled(Input)`
  width: 100%;
`;

export default Input;