import {Container} from "./styles";
import {Bank, CreditCard, Money} from "phosphor-react";

const TYPE_PAYMENT = {
    credit_cart: <CreditCard />,
    debit_cart: <Bank />,
    money: <Money />,
} as const

const TITLE_TYPE_PAYMENT = {
    credit_cart: 'CARTÃO DE CRÉDITO',
    debit_cart: 'CARTÃO DE DÉBITO',
    money: 'DINHEIRO',
} as const

interface TYPE_PAYMENTS_PROPS {
    typePayment: keyof typeof TYPE_PAYMENT
}


export function TypePayments({typePayment}: TYPE_PAYMENTS_PROPS){
    return (
        <Container>
            {TYPE_PAYMENT[typePayment]}
            <span>{TITLE_TYPE_PAYMENT[typePayment]}</span>
        </Container>
    )
}