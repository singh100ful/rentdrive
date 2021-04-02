import {useNavigation} from '@react-navigation/core';
import * as React from 'react';
import {Pressable} from 'react-native';
import {RootState} from 'src/provider/store';
import {convertDate} from 'src/shared/convertDate';
import {GRAY} from 'src/styles/colors';
import {SCALE_5} from 'src/styles/spacing';
import {FONT_SIZE_10, FONT_SIZE_16} from 'src/styles/typography';
import TextAtom from './TextAtom';
import {useSelector} from 'react-redux';

interface InputAtomProps {
  title: string;
}

const InputAtom: React.FC<InputAtomProps> = props => {
  const date = useSelector((state: RootState) => state.date);
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate('Selection')}
      style={{
        marginVertical: SCALE_5,
        padding: SCALE_5,
        backgroundColor: '#FFF',
        borderColor: GRAY,
        borderRadius: SCALE_5,
        borderWidth: 0.5,
      }}>
      <TextAtom
        style={{color: GRAY, fontSize: FONT_SIZE_10}}
        text={props.title}
      />
      <TextAtom
        style={{fontSize: FONT_SIZE_16, paddingTop: SCALE_5}}
        text={
          props.title === 'Pickup'
            ? convertDate(date.pickup)
            : convertDate(date.drop)
        }
      />
    </Pressable>
  );
};

export default InputAtom;
