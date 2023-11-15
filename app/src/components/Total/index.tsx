import { TouchableOpacityProps } from "react-native";
import {  PriceText, Total, TotalText } from "./style";

type Props = TouchableOpacityProps & {
  total: string;
};
export function TotalComponent({total}: Props) {
  return (
    <Total>
    <TotalText>Total</TotalText>
    <PriceText size={32} color="primary">
      <PriceText size={20}>R$:</PriceText>
      {total?.split(",")[0]}
      <PriceText size={20} color="primary">
        ,{total?.split(",")[1]}
      </PriceText>
    </PriceText>
  </Total>
  );
}
