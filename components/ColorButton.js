import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function ColorButton({ backgroundColor, onPress = f => f }) {
    return (
        <Pressable onPress={() => onPress(backgroundColor)} style={styles.button}>
            <View style={styles.row}>
                <View style={[styles.sample, { backgroundColor }]} />
                <Text style={styles.text}>{backgroundColor}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 2,
        borderStyle: "dashed",
        borderRadius: 10,
        margin: 10,
        padding: 10,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        alignSelf: "stretch"
    },
    text: {
        color: "#333",
        fontSize: 20,
        textAlign: "center"
    },
    row: {
        flexDirection: "row",
        textAlign: "center"
    },
    sample: {
        height: 20,
        width: 20,
        margin: 10,
        borderRadius: 10,
        backgroundColor: "white"
    }
})