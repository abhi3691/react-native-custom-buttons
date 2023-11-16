import {View} from 'react-native';
import React, {useState} from 'react';
import Buttons from 'react-native-custom-buttons';
import styles from './styles';
const App = () => {
  const [isLading, setIsLading] = useState(false);

  const buttonFunction = () => {
    setIsLading(true);
    setTimeout(() => {
      setIsLading(false);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Buttons
        type="Text"
        isLoading={isLading}
        loaderSize={20}
        loadercolor={'black'}
        onPress={() => buttonFunction()}
      />
      <Buttons
        onPress={() => {}}
        type="vector Icon"
        fontFamily="Ionicons"
        iconcolor="#fff"
        iconName="tv"
        iconSize={20}
      />
    </View>
  );
};

export default App;
