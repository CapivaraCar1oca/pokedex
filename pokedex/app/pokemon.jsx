import { useLocalSearchParams } from "expo-router";
import { Dimensions, Image, StyleSheet, ScrollView, View} from "react-native";
import Button from "../components/Button"
import Header from "../components/Header"
import TextInfo from "../components/TextInfo";

const width = Dimensions.get("window").width;

export default function PokemonDetail () {
    const pokemon = useLocalSearchParams();
    const tipos =
        typeof pokemon.Tipo === "string" ? JSON.parse(pokemon.Tipo) : pokemon.Tipo;

    return (
        <View style={styles.oontainer}>
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
                    }}>
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
                    </View>
            </View>
        </View>

    )
}