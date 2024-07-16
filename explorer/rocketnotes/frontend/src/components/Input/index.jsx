import { Container } from "./styles";
import propTypes from "prop-types";

export function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  );
}

Input.propTypes = {
  icon: propTypes.elementType,
};
