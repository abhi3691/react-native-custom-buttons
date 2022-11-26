import type { TextStyle, ViewStyle } from 'react-native';
interface Props {
  type?:
    | 'AntDesign'
    | 'Entypo'
    | 'EvilIcons'
    | 'Feather'
    | 'FontAwesome'
    | 'FontAwesome5'
    | 'FontAwesome5Pro'
    | 'Fontisto'
    | 'Foundation'
    | 'Ionicons'
    | 'MaterialCommunityIcons'
    | 'MaterialIcons'
    | 'Octicons'
    | 'Text'
    | 'SVG';
  size?: number;
  color?: string;
  iconName?: string;
  onPress(): void;
  title?: string;
  containerStyles?: ViewStyle;
  textStyle?: TextStyle;
}

export default Props;
