import * as React from 'react';
import {View} from 'react-native';
import DatePickerMolecule from 'src/components/molecule/DatePickerMolecule';

interface DropProps {}

const Drop: React.FC<DropProps> = ({}) => {
  return (
    <View>
      <DatePickerMolecule title="Drop-off" />
    </View>
  );
};

export default Drop;
