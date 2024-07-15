import { Container } from "./styles";
import propTypes from "prop-types";

export function Section({title, children}) {
    return (
        <Container>
            <h2>{title}</h2>
            {children}
        </Container>
    );
}

Section.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.node.isRequired
} 