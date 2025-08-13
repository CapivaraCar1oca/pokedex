import { Text, View } from "react-native";
import { darken } from "polished";
import { styles } from "./styles";

export default function Button({ tipo, large = false }) {
    const buttonStyle = {
        backgroundColor: darken(0.2, tipo.Cor),
        minWidth: large ? 60 : 40,
        height: large ? 45 : 30,
        paddingHorizontal: large ? 20 : 10,
        borderRadius: large ? 8 : 4,
    };

    const textStyle = {
        fontSize: large ? 24 : 14,
    };

    return (
        <View style={[styles.button, buttonStyle]}>
            <Text style={[styles.buttonText, textStyle]}>{tipo.Nome}</Text>
        </View>
    );
}