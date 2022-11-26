# react-native-custom-buttons

react native custom button based on pure JavaScript with good expansibility.

## Installation

```sh
npm install react-native-custom-buttons

```

## Setup

If you want to use icons
install [react-native-vector-icons ](https://www.npmjs.com/package/react-native-vector-icons)

```sh
npm install react-native-vector-icons

```

## Usage

```js
import Buttons from 'react-native-custom-buttons';

// ...

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Buttons from 'react-native-custom-buttons';
const App = () => {
  return (
    <View style={styles.container}>
      <Buttons
        onPress={() => {}}
        type="Text"
        title="open"
        containerStyles={{
          backgroundColor: '#000',
          width: '60%',
          height: '10%',
          borderRadius: 30,
        }}
        textStyle={{ fontSize: 10, color: '#fff' }}
      />
      <Buttons
        onPress={() => {}}
        type="Ionicons"
        color="#fff"
        iconName="tv"
        size={20}
        containerStyles={{
          backgroundColor: '#000',
          width: 50,
          height: 50,
          borderRadius: 50,
          margin: 20,
        }}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
