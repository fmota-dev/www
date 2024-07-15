import styled from "styled-components";

export const Container = styled.span`
  font-size: 12px;
  font-weight: 500;
  padding: 5px 14px;
  text-transform: uppercase;

  border-radius: 5px;
  margin-right: 6px;
  color: ${({ theme }) => theme.colors.background_900};
  background-color: ${({ theme }) => theme.colors.primary};
`;
