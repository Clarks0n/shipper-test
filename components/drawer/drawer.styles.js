import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 2em;
  a {
    display: flex;
    align-items: center;
    position: relative;
    text-decoration: none;
    font-weight: 500;
    color: black;
    height: 30px;
    margin-bottom: 1em;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const ListIcon = styled.div`
  margin-right: 1em;
  width: 1em;

`;

