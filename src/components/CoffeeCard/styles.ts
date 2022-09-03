import styled from "styled-components";

export const Card = styled.div`
    width: 256px;
    height: 310px;
    background-color: ${props => props.theme["base-card"]};
    border-radius: 6px 36px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: absolute;
`

export const CoffeeImage = styled.div`
    position: absolute;
    top: -20px;
    left: calc(50% - 120px/2);
    

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
    position: absolute;
    padding: 0px;
    gap: 4px;
    width: 81px;
    height: 21px;
    left: calc(50% - 81px/2);
    top: 112px;
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