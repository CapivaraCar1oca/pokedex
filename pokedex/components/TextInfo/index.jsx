import { StyleSheet, Text, View } from "react-native";

export default function TextInfo({ label, text }) {
    return (
        <Text style={styles.text}>
            <Text style={styles.bold}>{label}:</Text> {text}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'fff',
        fontSize: 18,
        textAlign: 'justify',
        marginBottom: 10
    },
    bold: {
        fontWeight: 'bold'
    }
});