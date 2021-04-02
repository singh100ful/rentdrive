import * as React from 'react';
import {ActivityIndicator, Pressable, PressableProps, View} from 'react-native';
import {GRAY, PRIMARY, WHITE} from 'src/styles/colors';
import {moderateScale} from 'src/styles/mixins';
import {SCALE_5} from 'src/styles/spacing';
import {FONT_SIZE_18} from 'src/styles/typography';
import TextAtom from 'src/components/atoms/TextAtom';

interface ButtonAtomProps extends PressableProps {
  name: string;
  onPress?(): any;
  color?: string;
  disabled?: boolean;
  loading?: boolean;
  size?: string;
}

const ButtonAtom: React.FC<ButtonAtomProps> = props => {
  return (
    <View
      style={{
        paddingVertical: moderateScale(10, 0.25),
      }}>
      <Pressable
        {...props}
        onPress={props.onPress}
        style={({pressed}) => [
          props.disabled
            ? {
                backgroundColor: GRAY,
                padding:
                  props.size === 'small'
                    ? moderateScale(5, 0.25)
                    : moderateScale(10, 0.25),
                borderRadius: 10,
                alignItems: 'center',
              }
            : {
                backgroundColor: pressed
                  ? WHITE
                  : props.color
                  ? props.color
                  : PRIMARY,
                borderColor: props.color ? props.color : PRIMARY,
                borderWidth: 1,
                padding:
                  props.size === 'small'
                    ? moderateScale(5, 0.25)
                    : moderateScale(10, 0.25),
                borderRadius: 10,
                alignItems: 'center',
              },
        ]}>
        {({pressed}) => {
          return props.loading === true ? (
            <ActivityIndicator
              style={{padding: SCALE_5}}
              size="small"
              color={WHITE}
            />
          ) : (
            <TextAtom
              style={{
                color: pressed ? (props.color ? props.color : PRIMARY) : WHITE,
                fontSize: FONT_SIZE_18,
              }}
              text={props.name}
            />
          );
        }}
      </Pressable>
    </View>
  );
};

export default ButtonAtom;
