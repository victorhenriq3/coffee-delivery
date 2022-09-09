import {Container, TitleContainer, HeaderPayments} from "./styles"
import {CurrencyDollar} from "phosphor-react";

export function Payments(){
    return (
        <Container>
            <HeaderPayments>
                <CurrencyDollar />
                <TitleContainer>
                    <span>Pagamento</span>
                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </TitleContainer>
            </HeaderPayments>
        </Container>
    )
}