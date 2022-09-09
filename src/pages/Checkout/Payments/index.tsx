import {Container, TitleContainer, HeaderPayments, TypesPayments} from "./styles"
import {CurrencyDollar} from "phosphor-react";
import {TypePayments} from "./TypePayments";

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
            <TypesPayments>
                <TypePayments typePayment="credit_cart"/>
                <TypePayments typePayment="debit_cart"/>
                <TypePayments typePayment="money"/>
            </TypesPayments>
        </Container>
    )
}