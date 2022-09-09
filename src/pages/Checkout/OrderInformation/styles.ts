import styled from "styled-components";

export const OrderContainer = styled.div``

export const Title = styled.div`
  font-family: 'Baloo 2', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 130%;
  color: ${props => props.theme["base-subtitle"]};
  margin-bottom: 15px;
`

export const AddressContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 32px;

    width: 640px;
    height: 302px;

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

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    max-width: 560px;
  
    .inline-input{
      display: flex;
      width: 100%;
      max-width: 560px;
      gap: 12px;
    }
  
  .column-input{
    display: flex;
    width: 100%;
    flex-direction: column;
    max-width: 560px;
  }
`

export const BaseInput = styled.input`
  background-color: ${props => props.theme["base-input"]};
  border: 1px solid ${props => props.theme["base-button"]};
  border-radius: 4px;
  padding: 12px;
  
  &::placeholder{
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    
    color: ${props => props.theme["base-label"]};
  }
`

export const CepInput = styled(BaseInput)`
  width: 200px;
`

export const StreetInput = styled(BaseInput)`
  width: 538px;
  margin-top: 16px;
`

export const NumberInput = styled(BaseInput)`
  width: 35.714%;
`

export const ComplementInput = styled(BaseInput)`
  width: 64.286%;
`

export const DistrictInput = styled(BaseInput)`
  width: 35.714%;
`

export const CityInput = styled(BaseInput)`
  width: 49.286%;
`

export const UfInput = styled(BaseInput)`
  width: 10.714%;
`