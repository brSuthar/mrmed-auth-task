import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

const AuthLayout = (props: any) => {
  const {children, style} = props;
  return <View style={[styles.container, style]}>{children}</View>;
};

export default AuthLayout;
