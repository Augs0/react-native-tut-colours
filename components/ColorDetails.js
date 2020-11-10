import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Color from 'color';

export default function ColorDetails({ route }) {
    const { color: name } = route.params;
    const color = Color(name);
    const lightness = color.isLight();
    const textColor = {
        fontSize: 24,
        color: lightness ? "black" : "white"
    };
    return (
        <View style={[styles.container, { backgroundColor: name }]} >
            <Text style={[textColor, { textTransform: "uppercase" }]}>{name}</Text>
            <Text style={textColor}>{color.rgb().toString()}</Text>
            <Text style={textColor}>{color.hex().toString()}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    }
});
