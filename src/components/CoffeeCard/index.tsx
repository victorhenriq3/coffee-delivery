import { Card, CoffeeImage, Content, Tags, Tag } from "./styles";
import cafe from "../../assets/Americano.png"

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
            </Content>
        </Card>
    )
}