import styled from 'styled-components';

export const HeaderContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: white;
    display: flex;
    z-index: 10;
`;

export const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      width: 150px;
      object-fit: contain;
    }
`;

export const HeaderUser = styled.div`
    display: flex;
    align-items: center;
    p {
      @media screen and (max-width: 700px) {
        display: none;
      }
    }
`;

export const HeaderAvatar = styled.div`
    float: right
    font-size: 2rem;
    margin-left: 15px;
`;
