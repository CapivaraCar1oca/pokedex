import { useLocalSearchParams } from "expo-router";
import { Dimensions, Image, StyleSheet, ScrollView, View } from "react-native";
import Button from "../components/Button";
import Header from "../components/Header";
import TextInfo from "../components/TextInfo";

const width = Dimensions.get("window").width;

export default function PokemonDetail() {
    const pokemon = useLocalSearchParams();
    const tipos =
        typeof pokemon.Tipo === "string" ? JSON.parse(pokemon.Tipo) : pokemon.Tipo;

    return (
        <View style={styles.container}>
            <Header
                title={`#${pokemon.Numero} - ${pokemon.Nome}`}
                back={true}
            />
            <View style={[styles.card, { backgroundColor: tipos[0].Cor }]}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: pokemon.Imagem }}
                        style={styles.image}
                    />
                </View>
                <ScrollView
                    horizontal
                    contentContainerStyle={{
                        flexGrow: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {tipos.map((tipo) => (
                        <Button
                            tipo={tipo}
                            key={tipo.Nome}
                            Large={true}
                        />
                    ))}
                </ScrollView>
                <View style={styles.dataContainer}>
                    <TextInfo label='Descrição' text={pokemon.Descricao} />
                    <TextInfo label='Espécie' text={pokemon.Especie} />
                    <TextInfo label='Altura' text={pokemon.Altura + ' mts'} />
                    <TextInfo label='Peso' text={pokemon.Peso + ' kg'} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "column",
    },
    card: {
        flex: 1,
        width: width - 30,
        margin: 15,
        borderRadius: 8,
        borderColor: "black",
        borderWidth: 1,
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: width - 60,
        height: width - 60,
    },
    dataContainer: {
        height: 260,
        paddingHorizontal: 20,
    },
});