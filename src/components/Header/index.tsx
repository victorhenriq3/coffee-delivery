import { BadgeCart, BadgeLocation, HeaderActions, HeaderContainer } from "./styles";
import logo from "../../assets/Logo.png"
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header(){
    return (
        <HeaderContainer>
            <img src={logo} alt="" />
            <HeaderActions>
                <BadgeLocation>
                    <MapPin weight="fill"/>
                    Porto Alegre, RS
                </BadgeLocation>
                <BadgeCart>
                    <ShoppingCart weight="fill"/>
                </BadgeCart>
            </HeaderActions>
        </HeaderContainer>
    )
}