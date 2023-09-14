import { Text, View } from "react-native";
import { Header } from "../../components/Header";
import { Container, Page } from "./style";
import { Button } from "@components/Button";
export function HomeAdmin() {
    return (
        <Page>
         <Header showBackButton admin />
         <Container>
           <Button title="Cardápio"  />
           <Button 
           title="Pedidos" 
           onPress={()=>{}} />
         </Container>
       </Page>
    )
}