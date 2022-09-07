import { MapPinLine } from "phosphor-react";
import { 
    OrderContainer, 
    Title,
    AddressContainer,
    HeaderAddress,
    TitleContainer,
    FormContainer,
    CepInput,
    StreetInput
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
                    <CepInput type="text" placeholder="CEP"/>
                    <StreetInput type="text" placeholder="Rua"/>
                </FormContainer>
            </AddressContainer>
        </OrderContainer>
    )
}