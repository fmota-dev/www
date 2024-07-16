import { Container } from "./styles";
import propTypes from "prop-types";

export function Tags({ title, ...rest }) {
  return <Container {...rest}>{title}</Container>;
}

Tags.propTypes = {
  title: propTypes.string.isRequired,
};
