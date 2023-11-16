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

## Buttons Component

### Props

| Prop            | Required                       | Type                          | Description                                       |
| --------------- | ------------------------------ | ----------------------------- | ------------------------------------------------- |
| onPress         | Yes                            | Function                      | Callback function to be executed on button press. |
| containerStyles | No                             | ViewStyle                     | Custom styles for the button container.           |
| type            | Yes                            |  `"Text"`, `"SVG"`, or `"vector Icon"` | Type of button. Choose one |

### iconProps

| Prop       | Required | Type                 | Description                        |
| ---------- | -------- | -------------------- | ---------------------------------- |
| fontFamily | Yes      | `'AntDesign'`, `'Entypo'`, ... | Font family for the icon. |
| iconSize   | No       | Number               | Size of the icon. Default is `20`. |
| iconName   | Yes      | String               | Name of the icon.                  |
| iconColor  | Yes      | ColorValue           | Color of the icon.                 |

### textProps

| Prop      | Required | Type      | Description                  |
| --------- | -------- | --------- | ---------------------------- |
| title     | No       | String    | Text content for the button. |
| textStyle | No       | TextStyle | Custom styles for the text.  |

### svgProps

| Prop     | Required | Type      | Description                          |
| -------- | -------- | --------- | ------------------------------------ |
| children | No       | ReactNode | Child components for the SVG button. |

### loadingProps

| Prop        | Required | Type                                      | Description                                        |
| ----------- | -------- | ----------------------------------------- | -------------------------------------------------- |
| isLoading   | No       | Boolean                                   | Indicates if the button is in a loading state.     |
| loaderColor | No       | ColorValue                                | Color of the loading indicator.                    |
| loaderSize  | No       | Number or 'small' or 'large' or undefined | Size of the loading indicator. Default is `small`. |


### Example Usage

```jsx
import Buttons from 'path/to/Buttons';

const IconButton = () => (
  <Buttons
    onPress={() => console.log('Icon button pressed')}
    type="vector Icon"
    fontFamily="FontAwesome"
    iconSize={30}
    iconName="star"
    iconColor="yellow"
  />
);

const TextButton = () => (
  <Buttons
    onPress={() => console.log('Text button pressed')}
    type="Text"
    title="Click me"
    textStyle={{ color: 'white' }}
  />
);

const SVGButton = () => (
  <Buttons
    onPress={() => console.log('SVG button pressed')}
    type="SVG"
  >
    {/* Your SVG component here */}
  </Buttons>
);

```

For a usage example, refer to the [example directory](https://github.com/abhi3691/react-native-custom-buttons/tree/master/example) in the repository.



## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
```
