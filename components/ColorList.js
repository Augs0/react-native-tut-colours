import React from "react";
import { StyleSheet, FlatList } from "react-native";
import ColorButton from "./ColorButton";
import ColorForm from "./ColorForm";
import { useColors } from "../hooks.js";

export default function ColorList({ navigation }) {

    const { colors, addColor } = useColors();
    return (
        <>
            <ColorForm onNewColor={addColor} />
            <FlatList
                style={styles.container}
                data={colors}
                renderItem={({ item }) => {
                    return (
                        <ColorButton
                            key={item.id}
                            backgroundColor={item.color}
                            onPress={() => navigation.navigate("Color Detail", { color: item.color })}
                        />
                    );
                }}
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex"
    }
});
