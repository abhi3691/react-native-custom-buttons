//import Packages
import { Text, TouchableHighlight } from 'react-native';
import React, { FC } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import type Props from './Props';
import FontRatio from '../global_functions/font_ratio/FontRatio';
import styles from './styles,';

const Buttons: FC<Props> = ({
  type,
  size,
  iconName,
  title,
  color,
  onPress,
  containerStyles,
  textStyle,
  children,
}) => {
  return (
    <TouchableHighlight
      underlayColor="transprent"
      onPress={onPress}
      style={[containerStyles, styles.container]}
    >
      {type == 'AntDesign' ? (
        <AntDesign
          size={FontRatio(size ? size : 20)}
          color={color}
          name={iconName ? iconName : ''}
        />
      ) : type == 'Entypo' ? (
        <Entypo
          size={FontRatio(size ? size : 20)}
          color={color}
          name={iconName ? iconName : ''}
        />
      ) : type == 'EvilIcons' ? (
        <EvilIcons
          size={FontRatio(size ? size : 20)}
          color={color}
          name={iconName ? iconName : ''}
        />
      ) : type == 'Feather' ? (
        <Feather
          size={FontRatio(size ? size : 20)}
          color={color}
          name={iconName ? iconName : ''}
        />
      ) : type == 'FontAwesome' ? (
        <FontAwesome
          size={FontRatio(size ? size : 20)}
          color={color}
          name={iconName ? iconName : ''}
        />
      ) : type == 'FontAwesome5' ? (
        <FontAwesome5
          size={FontRatio(size ? size : 20)}
          color={color}
          name={iconName ? iconName : ''}
        />
      ) : type == 'FontAwesome5Pro' ? (
        <FontAwesome5Pro
          size={FontRatio(size ? size : 20)}
          color={color}
          name={iconName ? iconName : ''}
        />
      ) : type == 'Fontisto' ? (
        <Fontisto
          size={FontRatio(size ? size : 20)}
          color={color}
          name={iconName ? iconName : ''}
        />
      ) : type == 'Foundation' ? (
        <Foundation
          size={FontRatio(size ? size : 20)}
          color={color}
          name={iconName ? iconName : ''}
        />
      ) : type == 'Ionicons' ? (
        <Ionicons
          size={FontRatio(size ? size : 20)}
          color={color}
          name={iconName ? iconName : ''}
        />
      ) : type == 'MaterialCommunityIcons' ? (
        <MaterialCommunityIcons
          size={FontRatio(size ? size : 20)}
          color={color}
          name={iconName ? iconName : ''}
        />
      ) : type == 'MaterialIcons' ? (
        <MaterialIcons
          size={FontRatio(size ? size : 20)}
          color={color}
          name={iconName ? iconName : ''}
        />
      ) : type == 'Octicons' ? (
        <Octicons
          size={FontRatio(size ? size : 20)}
          color={color}
          name={iconName ? iconName : ''}
        />
      ) : type == 'Text' ? (
        <Text style={textStyle}>{title}</Text>
      ) : type == 'SVG' ? (
        children
      ) : (
        <Ionicons
          size={FontRatio(size ? size : 20)}
          color={color}
          name={iconName ? iconName : ''}
        />
      )}
    </TouchableHighlight>
  );
};

export default Buttons;
