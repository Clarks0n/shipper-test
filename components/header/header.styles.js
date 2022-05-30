import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  background-color: white;
  z-index: 10;
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const HeaderUser = styled.div`
  display: flex;
  p {
    @media screen and (max-width: 700px) {
      display: none;
    }
  }
`;

export const HeaderAvatar = styled.div`
  
  margin-left: 1em;
`;
