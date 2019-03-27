import { FullWidthInput } from "ui/input-text";
import FieldSet from "ui/fieldset";
import {FWSecondaryButton} from "ui/button";
import { Root, ButtonContainer } from "./styled";

export default ({ onLogin }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onLogin(e.target.name.value);
  };

  return (
    <Root>
      <form onSubmit={handleSubmit}>
        <FieldSet label="Your Name">
          <FullWidthInput id="name" name="name" />
        </FieldSet>
        <ButtonContainer>
          <FWSecondaryButton>Get In</FWSecondaryButton>
        </ButtonContainer>
      </form>
    </Root>
  );
};
