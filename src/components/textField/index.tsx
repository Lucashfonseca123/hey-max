import React, {forwardRef} from 'react';
import {TextInputProps} from 'react-native';

import {TextInput} from './styles';

interface ITextField extends TextInputProps {
  borderFocus?: boolean;
}

const TextField = ({borderFocus, ...rest}: ITextField, ref: any) => {
  return (
    <TextInput
      placeholderTextColor={borderFocus ? '#59B1F0' : '#ADB0B3'}
      border={borderFocus}
      maxLength={40}
      {...rest}
    />
  );
};

export default forwardRef(TextField);
