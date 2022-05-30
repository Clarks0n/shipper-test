
import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
`;

export const ContentBlock = styled.div `
    display: flex;
    padding: 100px 0px 0px 0px;
    height: calc(100% - 100px);
    @media screen and (max-width: 700px) {
      padding-left: 0px;
    }
`;

export const ContentBody = styled.div`
    flex: 1;
    overflow-y: scroll;
`;