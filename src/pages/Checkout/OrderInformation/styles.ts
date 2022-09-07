import styled from "styled-components";

export const OrderContainer = styled.div``

export const Title = styled.div``

export const AddressContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 32px;

    width: 640px;
    height: 372px;

    background-color: ${props => props.theme["base-card"]};
    border-radius: 6px;
`

export const HeaderAddress = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 8px;
    height: 44px;
  
  svg{
    color: ${props => props.theme["yellow-dark"]};
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