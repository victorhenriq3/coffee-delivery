import { CoffeeCard } from "../CoffeeCard";
import { Container } from "./styles";

export function CoffeeList(){
    return (
        <Container>
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
        </Container>
    )
}