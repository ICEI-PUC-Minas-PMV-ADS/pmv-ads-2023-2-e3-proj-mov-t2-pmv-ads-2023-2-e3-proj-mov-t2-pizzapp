
import styled from "styled-components/native";


export const StyledButton = styled.TouchableOpacity`
    color: ${({theme}) => theme.COLORS.YELLOW_300};
    font-size: ${({theme}) => theme.FONT_SIZE.XL};
    width: 280px;
    height: 61px;
    border-radius: 10px;
    background-color:  ${({theme}) => theme.COLORS.RED};
    align-items: center;
    justify-content: center;
`;

export const StyledButtonText = styled.Text`  
    color: ${({theme}) => theme.COLORS.YELLOW_300};
    font-size: ${({theme}) => theme.FONT_SIZE.XL};
    font-weight: bold;
    text-align: center;
`;