import { MapPinLine } from "phosphor-react";
import { 
    OrderContainer, 
    Title,
    AddressContainer,
    HeaderAddress,
    TitleContainer
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
            </AddressContainer>
        </OrderContainer>
    )
}