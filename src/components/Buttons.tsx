//import Packages
import { ActivityIndicator, Text, TouchableHighlight } from 'react-native';
import React from 'react';
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
import styles from './styles';

const Buttons = (props: Props) => {
  return (
    <TouchableHighlight
      underlayColor="transprent"
      onPress={props.onPress}
      style={[props.containerStyles, styles.container]}
    >
      {props.isLoading == true ? (
        <ActivityIndicator size={props.loaderSize} color={props.loadercolor} />
      ) : (
        <>
          {props.type === 'vector Icon' ? (
            <>
              {props.fontFamily == 'AntDesign' ? (
                <AntDesign
                  size={FontRatio(props.iconSize ? props.iconSize : 20)}
                  color={props.iconcolor}
                  name={props.iconName}
                />
              ) : props.fontFamily == 'Entypo' ? (
                <Entypo
                  size={FontRatio(props.iconSize ? props.iconSize : 20)}
                  color={props.iconcolor}
                  name={props.iconName}
                />
              ) : props.fontFamily == 'EvilIcons' ? (
                <EvilIcons
                  size={FontRatio(props.iconSize ? props.iconSize : 20)}
                  color={props.iconcolor}
                  name={props.iconName}
                />
              ) : props.fontFamily == 'Feather' ? (
                <Feather
                  size={FontRatio(props.iconSize ? props.iconSize : 20)}
                  color={props.iconcolor}
                  name={props.iconName}
                />
              ) : props.fontFamily == 'FontAwesome' ? (
                <FontAwesome
                  size={FontRatio(props.iconSize ? props.iconSize : 20)}
                  color={props.iconcolor}
                  name={props.iconName}
                />
              ) : props.fontFamily == 'FontAwesome5' ? (
                <FontAwesome5
                  size={FontRatio(props.iconSize ? props.iconSize : 20)}
                  color={props.iconcolor}
                  name={props.iconName}
                />
              ) : props.fontFamily == 'FontAwesome5Pro' ? (
                <FontAwesome5Pro
                  size={FontRatio(props.iconSize ? props.iconSize : 20)}
                  color={props.iconcolor}
                  name={props.iconName}
                />
              ) : props.fontFamily == 'Fontisto' ? (
                <Fontisto
                  size={FontRatio(props.iconSize ? props.iconSize : 20)}
                  color={props.iconcolor}
                  name={props.iconName}
                />
              ) : props.fontFamily == 'Foundation' ? (
                <Foundation
                  size={FontRatio(props.iconSize ? props.iconSize : 20)}
                  color={props.iconcolor}
                  name={props.iconName}
                />
              ) : props.fontFamily == 'Ionicons' ? (
                <Ionicons
                  size={FontRatio(props.iconSize ? props.iconSize : 20)}
                  color={props.iconcolor}
                  name={props.iconName}
                />
              ) : props.fontFamily == 'MaterialCommunityIcons' ? (
                <MaterialCommunityIcons
                  size={FontRatio(props.iconSize ? props.iconSize : 20)}
                  color={props.iconcolor}
                  name={props.iconName}
                />
              ) : props.fontFamily == 'MaterialIcons' ? (
                <MaterialIcons
                  size={FontRatio(props.iconSize ? props.iconSize : 20)}
                  color={props.iconcolor}
                  name={props.iconName}
                />
              ) : props.fontFamily == 'Octicons' ? (
                <Octicons
                  size={FontRatio(props.iconSize ? props.iconSize : 20)}
                  color={props.iconcolor}
                  name={props.iconName}
                />
              ) : (
                <Ionicons
                  size={FontRatio(props.iconSize ? props.iconSize : 20)}
                  color={props.iconcolor}
                  name={props.iconName}
                />
              )}
            </>
          ) : props.type == 'Text' ? (
            <Text style={props.textStyle}>{props.title}</Text>
          ) : (
            props.type == 'SVG' && props.children
          )}
        </>
      )}
    </TouchableHighlight>
  );
};

export default Buttons;
