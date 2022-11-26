import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Buttons from 'react-native-custom-buttons'
const App = () => {
  return (
    <View style={styles.container}>
      <Buttons
        onPress={() => { }}
        type="Text"
        title="open"
        containerStyles={{ backgroundColor: "#000", width: '60%', height: "10%", borderRadius: 30 }}
        textStyle={{ fontSize: 10, color: "#fff" }}
      />
      <Buttons
        onPress={() => { }}
        type="Ionicons"
        color='#fff'
        iconName='tv'
        size={20}
        containerStyles={{ backgroundColor: "#000", width: 50, height: 50, borderRadius: 50, margin: 20 }}
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})