import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const CardHead = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
      color: #949494;
  }
`;

export const CardBody =  styled.div`
  border-top: 1px solid #949494;
  padding: 1em;
`;

export const CardBodyIcon = styled.div`
  font-size: 5rem;
  margin-bottom: 30px;
  color: #949494;
`;

export const CardHeadInfo = styled.div`
  span {
      &:nth-child(1) {
          color: #949494;
      }
      &:nth-child(2) {
          color: #ff4646;
      }
  }
`;

export const CardBodyList = styled.div`
  margin-bottom: 10px;
  p {
    margin: 0px;
    &:nth-child(1) {
      color: #949494;
      font-size: 0.9rem;
    }
  }
  @media screen and (max-width: 700px) {
    p {
      margin: 0px;
      &:nth-child(1) {
        color: #949494;
        font-size: 0.9rem;
      }
    }
  }

`;



