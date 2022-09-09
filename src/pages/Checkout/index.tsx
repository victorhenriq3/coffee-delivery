import { OrderInformation } from "./OrderInformation";
import { Container } from "./styles";
import {Payments} from "./Payments";

export function Checkout(){
    return (
        <Container>
            <OrderInformation />
            <Payments />
        </Container>
    )
}