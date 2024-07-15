import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  main {
    grid-area: content;
    overflow-y: scroll;
    padding: 64px 0;
  }
`;

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 12px;

    a {
      font-size: 16px;
      font-weight: 400;
      text-decoration: none;
      transition: color 0.2s;
    }
  }
`;

export const Content = styled.div`
  max-width: 550px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: flex-end;
  }

  > h1 {
    padding-top: 64px;
    font-size: 36px;
    font-weight: 500;
  }

  > p {
    font-size: 16px;
    margin-top: 16px;
    font-weight: 300;
    line-height: 1.5;
  }
`;
