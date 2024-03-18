import React, {FC} from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import colors from '../../constants/colors';
import images from '../../constants/images';
import {InputViewProps} from './types';

const InputView: FC<InputViewProps> = (props: InputViewProps) => {
  const {value, onChangeText} = props;
  return (
    <View style={styels.view}>
      <View style={styels.phone}>
        <Image source={images.phone_icon} />
      </View>
      <TextInput
        placeholder="+1 xxxx xxxx xxx"
        style={styels.input}
        value={value || ''}
        keyboardType={'number-pad'}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styels = StyleSheet.create({
  view: {
    height: 56,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.dark_light,
    borderRadius: 16,
  },
  phone: {
    marginLeft: 20,
  },
  input: {
    height: 56,
    flex: 1,
    marginHorizontal: 16,
  },
});

export default InputView;
