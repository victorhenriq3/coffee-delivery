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
`

export const TitleContainer = styled.div`
    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 130%;
    }
`