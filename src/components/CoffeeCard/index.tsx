import { 
    Card, 
    CoffeeImage, 
    Content, 
    Tags, 
    Tag,
    Title, 
    Description, 
    Buy,
    Price, 
    Actions, 
    Currency, 
    Value,
    Counter,
    Count,
    CartContainer
} from "./styles";
import cafe from "../../assets/Americano.png"
import { Minus, Plus, ShoppingCart } from "phosphor-react";

export function CoffeeCard(){
    return(
        <Card>
            <CoffeeImage>
                <img src={cafe} alt="" />   
            </CoffeeImage>
            <Content>
                <Tags>
                    <Tag>
                        TRADICIONAL
                    </Tag>
                </Tags>
                <Title> 
                    Expresso Tradicional
                </Title>
                <Description>
                    O tradicional café feito com água quente e grãos moídos
                </Description>
                <Buy>
                    <Price>
                        <Currency>R$</Currency>
                        <Value>9,90</Value>
                    </Price>
                    <Actions>
                        <Counter>
                            <Minus size={14} weight="bold"/>
                            <Count>1</Count>
                            <Plus size={14} weight="bold"/>
                        </Counter>
                        <CartContainer>
                            <ShoppingCart weight="fill" size={22}/>    
                        </CartContainer>
                    </Actions>
                </Buy>
            </Content>
        </Card>
    )
}