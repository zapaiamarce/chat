import styled from "styled-components";

export const Button = styled.button`
  padding: ${props => props.theme.boxPadding};
  background-color: ${props => props.theme.colors.actionable};
  color: white;
  font-size: 16px;
  font-weight: 500;
  border-radius: 2px;
  border: none;
`;

export const FWButton = styled(Button)`
  width: 100%;
`;

export const FWSecondaryButton = styled(FWButton)`
  background-color: ${props => props.theme.colors.secondaryAction};
`;

export default Button;
