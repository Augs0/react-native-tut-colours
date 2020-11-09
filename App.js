import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ColorButton from './components/ColorButton'
import ColorForm from './components/ColorForm'
import DefaultList from './data/defaultColors.json'

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("ivory");

  return (
    <>
      <ColorForm />
      <FlatList style={[styles.container, { backgroundColor }]} data={DefaultList} renderItem={({ item }) => {
        return (
          <ColorButton
            key={item.id}
            backgroundColor={item.color}
            onPress={setBackgroundColor}
          />
        );
      }} />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
  }

})