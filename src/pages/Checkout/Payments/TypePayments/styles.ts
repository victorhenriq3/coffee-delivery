import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 51px;
  gap: 12px;
  
  border-radius: 6px;
  background: ${props => props.theme["base-button"]};

  min-width: 178.67px;
  
  svg{
    width: 16px;
    height: 16px;
    color: ${props => props.theme.purple};
    padding-left: 16px;
  }
  
  span{
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    color: ${props => props.theme["base-text"]};
    text-transform: uppercase;
  }
`