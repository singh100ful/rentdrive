import * as React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {BACKGROUND, PRIMARY, TEXTDARK} from 'src/styles/colors';
import {SCALE_15} from 'src/styles/spacing';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Pickup from 'src/screens/selection/tabs/Pickup';
import Drop from 'src/screens/selection/tabs/Drop';
import ButtonAtom from 'src/components/atoms/ButtonAtom';
import TabLabelAtom from 'src/components/atoms/TabLabelAtom';
import {NavigationProp} from '@react-navigation/native';
import {StackParamsList} from 'src/layout/Layout';

interface SelectionProps {
  navigation: NavigationProp<StackParamsList, 'Selection'>;
}

const Selection: React.FC<SelectionProps> = props => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'first', title: 'Pickup Date & Time', state: 'pickup'},
    {key: 'second', title: 'Drop-off Date & Time', state: 'drop'},
  ]);

  const renderScene = SceneMap({
    first: Pickup,
    second: Drop,
  });

  const renderTab = (props: any) => (
    <TabBar
      {...props}
      activeColor={TEXTDARK}
      inactiveColor={'#8CB9C7'}
      indicatorStyle={{backgroundColor: PRIMARY}}
      style={{
        backgroundColor: 'transparent',
        elevation: 0,
      }}
      renderLabel={({route, color}) => (
        <TabLabelAtom route={route} color={color} />
      )}
    />
  );

  const handleSubmit = () => {
    if (index === 0) {
      setIndex(1);
    } else {
      props.navigation.navigate('Home');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: BACKGROUND}}>
      <TabView
        swipeEnabled={false}
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTab}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
      <View style={{paddingHorizontal: SCALE_15}}>
        <ButtonAtom name="Save &amp; Continue" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default Selection;
