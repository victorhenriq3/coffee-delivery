import styled from "styled-components";

export const IntroContainer = styled.div`
    padding: 94px 0 108px 0;
    display: flex;
`

export const LeftContainer = styled.div``

export const Title = styled.div`
    width: 588px;
    h1{
        font-family: 'Baloo 2', cursive;
        font-size: 3rem;
        line-height: 130%;
        color: ${props => props.theme["base-title"]};
        align-self: stretch;
    }
    p{
        margin-top: 16px;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 26px;
    }
`

export const ItemsContainer = styled.div`
    display: flex;
    margin-top: 66px;
`

export const Items = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 40px;
`

export const Item = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    span{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 130%;
        margin-left: 12px;

        color: ${props => props.theme["base-text"]};
    }
`

const CIRCLE_COLORS = {
    yellow_dark: 'yellow-dark',
    yellow: 'yellow',
    grey: 'base-text',
    purple: 'purple'
  } as const

interface IconRoundedProps {
    circleColor: keyof typeof CIRCLE_COLORS
}

export const IconRounded = styled.div<IconRoundedProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme[CIRCLE_COLORS[props.circleColor]]};
    width: 32px;
    height: 32px;
    border-radius: 1000px;
    padding: 8px;
    gap: 8px;

    svg{
        color: white;
        width: 22px;
        height: 22px;
    }
`

export const RightContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    img{
        width: 476px;
        height: 360px;
    }
`