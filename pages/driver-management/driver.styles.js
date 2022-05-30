import styled from 'styled-components';

export const PageBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  > div {
    width: calc(20% - 25px);
    margin-right: 16px;
    box-sizing: border-box;
    @media screen and (max-width: 1000px) {
      width: calc(50% - 16px);
    }
    @media screen and (max-width: 700px) {
      width: calc(100%);
      margin-right: 0px;
    }
  }
`;

export const PagePagination = styled.div`
  display: flex;
  max-width: 300px;
  margin: 20px auto;
  align-items: center;
  justify-content: space-between;
  span {
    cursor: pointer;
    svg {
      margin: 0px 10px;
    }
    &.disabled {
      color:  #838383
    }
  }
`;
