import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TextInput as DefaultTextInput,
  TextInputProps as DefaultTextInputProps,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../theme/color/color';
import {typography} from '../../theme/Typography/typography';

const windowWidth = Dimensions.get('screen').width;

interface ITextInput extends DefaultTextInputProps {
  placeholder: string;
  image?: ImageSourcePropType;
  isDarkMode: boolean;
}
const TextInput = (props: ITextInput) => {
  const {image, isDarkMode, placeholder, ...DefaultTextInputProps} = props;
  return (
    <View style={styles.container}>
      {image ? (
        <Image
          source={image}
          style={{height: 24, width: 24, marginHorizontal: 16}}
        />
      ) : null}

      <DefaultTextInput
        {...DefaultTextInputProps}
        placeholder={placeholder}
        style={[styles.input]}
        placeholderTextColor={isDarkMode ? colors.darkCharcoal : colors.black}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    width: windowWidth - 30,
    paddingHorizontal: 10,
    height: 58,
    backgroundColor: colors.whiteSmoke,
  },
  input: {
    height: 58,
    width: windowWidth - 40,
    fontFamily: typography.primary.light,
    fontSize: 14,
    color: colors.text,
  },
});
