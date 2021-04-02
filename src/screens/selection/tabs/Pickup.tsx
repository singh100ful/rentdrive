import * as React from 'react';
import {View} from 'react-native';
import DatePickerMolecule from 'src/components/molecule/DatePickerMolecule';

interface PickupProps {}

const Pickup: React.FC<PickupProps> = ({}) => {
  return (
    <View>
      <DatePickerMolecule title="Pickup" />
    </View>
  );
};

export default Pickup;
