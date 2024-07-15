import { Container } from "./styles";
import propTypes from "prop-types";

export function Tags({ title }) {
  return <Container>{title}</Container>;
}

Tags.propTypes = {
  title: propTypes.string.isRequired,
};
