import { Text, View } from "react-native";
import { Header } from "../../components/Header";
import { Container, Page } from "./style";
import { Button } from "@components/Button";
export function HomeClient() {
    return (
        <Page>
         <Header showBackButton />
         <Container>
           <Button title="Cliente"  />
           <Button 
           title="Funcionário" 
           onPress={()=>{}} />
         </Container>
       </Page>
    )
}