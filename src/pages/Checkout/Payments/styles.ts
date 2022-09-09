import styled from "styled-components";

export const Container = styled.div`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 40px ;
      gap: 32px;

      width: 640px;
      height: 207px;
  
      background: ${props => props.theme["base-card"]};
      border-radius: 6px;
      margin-top: 12px;
`

export const HeaderPayments = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 8px;
    height: 44px;
  
  svg{
    color: ${props => props.theme["purple"]};
    width: 22px;
    height: 22px;
  }
`

export const TitleContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
  
    span{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 130%;
        color: ${props => props.theme["base-subtitle"]};
        margin-bottom: -10px;
    }
    p{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 130%;
        color: ${props => props.theme["base-text"]};
    }
`