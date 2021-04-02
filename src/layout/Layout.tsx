import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import Home from 'src/screens/Home';
import Selection from 'src/screens/selection/Selection';
import {TEXTDARK} from 'src/styles/colors';

interface LayoutProps {}

export type StackParamsList = {
  Home: any;
  Selection: any;
};

const Stack = createStackNavigator<StackParamsList>();

const Layout: React.FC<LayoutProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: TEXTDARK,
        }}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{title: 'Select Your Trip Dates'}}
          name="Selection"
          component={Selection}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Layout;
