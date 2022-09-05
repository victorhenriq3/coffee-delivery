import styled from "styled-components";

export const HeaderContainer = styled.header`
    padding: 32px 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const HeaderActions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;                                
    gap: 12px;
    height: 38px;
    padding: 0px;
`

export const BadgeLocation = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    width: 143px;
    /* height: 38px; */
    gap: 4px;
    border-radius: 6px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 0.875rem;
    color: ${props => props.theme["purple-dark"]};
    background-color: ${props => props.theme["purple-light"]};

    svg{
        width: 22px;
        height: 22px;

        color: ${props => props.theme.purple};
    }
`

export const BadgeCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 4px;
    border-radius: 6px;
    background-color: ${props => props.theme["yellow-light"]};

    svg{
        width: 22px;
        height: 22px;

        color: ${props => props.theme["yellow-dark"]}
    }
`