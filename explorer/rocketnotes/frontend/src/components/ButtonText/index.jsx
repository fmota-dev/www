import { Container } from "./styles";
import propTypes from "prop-types";

export function ButtonText({ title, isActive = false, ...rest }) {
  return (
    <Container type="button" {...rest} $isActive={isActive}>
      {title}
    </Container>
  );
}

ButtonText.propTypes = {
  title: propTypes.string.isRequired,
  isActive: propTypes.bool,
};
