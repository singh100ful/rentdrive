import * as React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from 'src/provider/store';
import {convertDate} from 'src/shared/convertDate';
import {FONT_SIZE_16, FONT_SIZE_12} from 'src/styles/typography';
import TextAtom from './TextAtom';

interface TabLabelAtomProps {
  route: any;
  color: string;
}

const TabLabelAtom: React.FC<TabLabelAtomProps> = props => {
  const date = useSelector((state: RootState) => state.date);
  return (
    <View style={{alignItems: 'baseline', justifyContent: 'flex-start'}}>
      <TextAtom
        text={
          props.route.state === 'pickup'
            ? convertDate(date.pickup)
            : convertDate(date.drop)
        }
        style={{
          fontSize: FONT_SIZE_16,
          color: props.color,
          paddingHorizontal: 5,
        }}
      />
      <TextAtom
        text={props.route.title}
        style={{
          fontSize: FONT_SIZE_12,
          color: props.color,
          paddingHorizontal: 5,
        }}
      />
    </View>
  );
};

export default TabLabelAtom;
