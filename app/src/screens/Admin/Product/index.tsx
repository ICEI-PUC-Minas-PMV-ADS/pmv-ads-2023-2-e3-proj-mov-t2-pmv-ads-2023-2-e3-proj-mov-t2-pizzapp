import { Text } from "react-native";
import { IProducts } from "src/providers/groups-services";

type Props = {
    product: IProducts;
}
export function ProductAdmin ({product}: Props){
    return (
        <Text>{product.name}</Text>
    )
}