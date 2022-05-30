import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        align-items: flex-start;
    };
`;

export const DriverHeaderTitle = styled.div`
    h1 {
        color: #ff4646;
        margin: 0px;
    }
    p {
        color: #949494;
        margin: 0px;
    }
    @media screen and (max-width: 1000px) {
        margin-bottom: 20px;
    }
`;

export const DriverHeaderContainer = styled.div`
    display: flex;
    button {
        color: white;
        display: flex;
        align-items: center;
        outline: none;
        border: none;
        height: 40px;
        background-color: #ff4646;
        border-radius: 4px;
        padding: 10px 10px;
        cursor: pointer;
        svg {
            margin-left: 10px
        }
    }
    @media screen and (max-width: 1000px) {
        flex: 1;
        flex-direction: column;
        width: 100%;
    }
`;

export const DriverHeaderSearch = styled.div`
    position: relative;
    margin-right: 20px;
    input {
        border-radius: 4px;
        outline: none;
        border-width: 1px;
        padding-left: 35px;
        height: 40px;
        box-sizing: border-box;
      
    }
    svg {
        position: absolute;
        left: 10px;
        top: 12px;
        color: #ff4646;
    }
    @media screen and (max-width: 1000px) {
        width: 100%;
        input {
            width: 100%;
        }
        margin-bottom: 20px;
    }
  }
`;




