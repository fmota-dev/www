import { Container } from "./styles";
import propTypes from "prop-types";

export function ButtonText({ title, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {title}
    </Container>
  );
}

ButtonText.propTypes = {
  title: propTypes.string.isRequired,
};
