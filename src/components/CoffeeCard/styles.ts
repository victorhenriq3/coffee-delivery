import styled from "styled-components";

export const Card = styled.div`
    width: 256px;
    height: 310px;
    background-color: ${props => props.theme["base-card"]};
    border-radius: 6px 36px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-right: 15px;
`

export const CoffeeImage = styled.div`
    margin-top: -20px;
    margin-left: calc(50% - 120px/2);
    
    img{
        width: 120px;
        height: 120px;
    }
`

export const Content = styled.div``

export const Tags = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 4px;
    width: 81px;
    height: 21px;
    margin-left: calc(50% - 81px/2);
    margin-top: 12px;
`

export const Tag = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;       
    border-radius: 100px;
    background-color: ${props => props.theme["yellow-light"]};
    width: 81px;
    height: 21px;
    font-family: 'Roboto';
    color: ${props => props.theme["yellow-dark"]};
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;
`

export const Title = styled.h1`
    height: 26px;
    margin-left: calc(50% - 190px/2);
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    display: flex;
    align-items: flex-end;
    text-align: center;
    color: ${props => props.theme["base-subtitle"]};
`

export const Description = styled.p`
    height: 36px;
    padding: 0 20px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    text-align: center;
    color: ${props => props.theme["base-label"]};
`

export const Buy = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    margin-top: 33px;
    height: 38px;
`

export const Price = styled.div`
    width: 67px;
    height: 31px;

    flex: none;
    order: 0;
    flex-grow: 0;
`

const BasePrice = styled.span`
    text-align: right;
    font-family: 'Roboto';
    font-style: normal;
    line-height: 130%;
    color: ${props => props.theme["base-text"]};
`

export const Currency = styled(BasePrice)`
    font-weight: 400;
    font-size: 0.875rem;
    margin-right: 5px;    
`

export const Value = styled(BasePrice)`
    font-weight: bold;
    font-size: 1.375rem;
`

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    width: 118px;
`

export const Counter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 4px;
    border-radius: 6px;
    background-color: ${props => props.theme["base-button"]};
    width: 64px;    

    svg{
        color: #8047F8;
    }
`

export const Count = styled.span`
   font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    text-align: center;
    margin: 0 4px;
    color: ${props => props.theme["base-title"]};
`

export const CartContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    /* width: 38px; */
    gap: 8px;
    background: ${props => props.theme["purple-dark"]};
    border-radius: 6px;

    svg{
        color: ${props => props.theme["base-card"]}
    }
`