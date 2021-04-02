import * as React from 'react';
import {View} from 'react-native';
import InputAtom from 'src/components/atoms/InputAtom';
import TextAtom from 'src/components/atoms/TextAtom';
import {BACKGROUND} from 'src/styles/colors';
import {SCALE_15} from 'src/styles/spacing';
import {FONT_SIZE_18} from 'src/styles/typography';

interface HomeProps {}

const Home: React.FC<HomeProps> = props => {
  return (
    <View style={{flex: 1, backgroundColor: BACKGROUND, padding: SCALE_15}}>
      <TextAtom
        style={{fontSize: FONT_SIZE_18, marginBottom: SCALE_15}}
        text="Date and Time Selector"
      />
      <View style={{paddingVertical: SCALE_15}}>
        <InputAtom title="Pickup" />
        <InputAtom title="Dropoff" />
      </View>
    </View>
  );
};

export default Home;
