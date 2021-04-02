import React from 'react';
import {Text, TextProps, TextStyle, View} from 'react-native';
import {TEXTDARK} from 'src/styles/colors';

interface TextAtomProps extends TextProps {
  text: string | number | undefined;
  style?: TextStyle;
}

const TextAtom: React.FC<TextAtomProps> = props => {
  return (
    <View>
      <Text
        {...props}
        maxFontSizeMultiplier={1}
        allowFontScaling={false}
        style={[
          {
            flexShrink: 1,
            flexWrap: 'wrap',
            color: TEXTDARK,
          },
          props.style,
        ]}>
        {props.text}
      </Text>
    </View>
  );
};

export default TextAtom;
