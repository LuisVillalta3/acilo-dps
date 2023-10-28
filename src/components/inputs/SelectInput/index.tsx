import { View } from 'react-native';
import React, { useState } from 'react';
import { SelectTextInputProps } from './types';
import DropDown from "react-native-paper-dropdown";

const data = [
  { id: '1', label: 'Option 1' },
  { id: '2', label: 'Option 2' },
  { id: '3', label: 'Option 3' },
  { id: '4', label: 'Option 4' },
  { id: '5', label: 'Option 5' },
];

const SelectInput = ({
  label,
  mode,
  options,
  value,
  onChange
}: SelectTextInputProps) => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <View>
      <DropDown
        label={label}
        mode={mode}
        visible={showDropDown}
        showDropDown={() => setShowDropDown(true)}
        onDismiss={() => setShowDropDown(false)}
        value={value}
        setValue={onChange ?? (() => {})}
        list={options}
      />
    </View>
  );
};

export default SelectInput;
