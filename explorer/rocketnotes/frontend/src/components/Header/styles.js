import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.colors.background_700};

  display: flex;
  justify-content: space-between;

  padding: 0 80px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 66px;
    height: 66px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray_100};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const Logout = styled.button`
    border: none;
    background: none;

    > svg {
        color: ${({ theme }) => theme.colors.white};
    }
`