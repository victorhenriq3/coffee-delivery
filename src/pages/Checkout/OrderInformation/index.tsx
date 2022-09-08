import { MapPinLine } from "phosphor-react";
import { 
    OrderContainer, 
    Title,
    AddressContainer,
    HeaderAddress,
    TitleContainer,
    FormContainer,
    CepInput,
    StreetInput,
    NumberInput,
    ComplementInput,
    DistrictInput,
    CityInput,
    UfInput
} from "./styles";

export function OrderInformation(){
    return (
        <OrderContainer>
            <Title>Complete seu pedido</Title>
            <AddressContainer>
                <HeaderAddress>
                    <MapPinLine />
                    <TitleContainer>
                        <span>Endereço de entrega</span>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                    </TitleContainer>
                </HeaderAddress>
                <FormContainer>
                    <div className="column-input">
                        <CepInput type="text" placeholder="CEP"/>
                        <StreetInput type="text" placeholder="Rua"/>
                    </div>
                    <div className="inline-input">
                        <NumberInput type="text" placeholder="Número"/>
                        <ComplementInput type="text" placeholder="Complemento"/>
                    </div>
                    <div className="inline-input">
                        <DistrictInput type="text" placeholder="Bairro"/>
                        <CityInput type="text" placeholder="Cidade"/>
                        <UfInput type="text" placeholder="UF"/>
                    </div>
                </FormContainer>
            </AddressContainer>
        </OrderContainer>
    )
}