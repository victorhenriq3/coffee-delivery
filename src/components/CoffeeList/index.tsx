import { CoffeeCard } from "../CoffeeCard";
import { Container, Title } from "./styles";

export function CoffeeList(){
    return (
        <>
            <Title>Nossos Cafés</Title>
            <Container>
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
            </Container>
        </>
    )
}