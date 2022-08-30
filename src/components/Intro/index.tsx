import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { IconRounded, IntroContainer, Item, Items, ItemsContainer, LeftContainer, RightContainer, Title } from "./styles";
import intro from "../../assets/intro.png"

export function Intro(){
    return (
        <IntroContainer>
            <LeftContainer>
                <Title>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p> 
                </Title>
                <ItemsContainer>
                    <Items>
                        <Item>
                            <IconRounded circleColor="yellow_dark">
                                <ShoppingCart weight="fill"/>   
                            </IconRounded>
                            <span>Compra simples e segura</span>
                        </Item>
                        <Item>
                            <IconRounded circleColor="yellow">
                                <Timer weight="fill"/>   
                            </IconRounded>
                            <span>Entrega rápida e rastreada</span>
                        </Item>
                    </Items>
                    <Items>
                        <Item>
                            <IconRounded circleColor="grey">
                                <Package weight="fill"/>   
                            </IconRounded>
                            <span>Embalagem mantém o café intacto</span>
                        </Item>
                        <Item>
                            <IconRounded circleColor="purple">
                                <Coffee weight="fill"/>   
                            </IconRounded>
                            <span>O café chega fresquinho até você</span>
                        </Item>
                    </Items>
                </ItemsContainer>
            </LeftContainer>
            <RightContainer>
                <img src={intro} alt="" />
            </RightContainer>
        </IntroContainer>
    )
}