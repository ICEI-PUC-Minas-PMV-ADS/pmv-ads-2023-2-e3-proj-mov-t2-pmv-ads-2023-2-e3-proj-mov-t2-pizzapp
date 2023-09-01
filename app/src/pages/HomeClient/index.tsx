import { Text, View } from "react-native";
import { styles } from "./style";
import { Header } from "../../components/Header";

export function HomeClient() {
    return (
        <View>
            <Header/>
            <View style={styles.select}>
                <Text>WORKS</Text>
            </View>
        </View>
    )
}