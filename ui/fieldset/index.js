import styled from "styled-components";

export const Label = styled.label`
  margin-bottom: 10px;
  display: block;
`;

export const Title = styled.p`
  margin-bottom: 5px;
  font-size: 16px;
`;

export default ({ children, label, id }) => (
  <Label>
    <Title>{label}</Title>
    <div>{children}</div>
  </Label>
);
