import { Text, View } from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./style";

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