
import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
`;

export const ContentBlock = styled.div `
    display: flex;
    height: calc(100% - 100px);
    padding: 100px 0px 0px 0px;
    @media screen and (max-width: 700px) {
      padding-left: 0px;
    }
`;

export const ContentBody = styled.div`
    flex: 1;
    overflow-y: scroll;
    padding: 1em;
`;