import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import colors from '../../../../constants/colors';
import {AuthLayout, Navbar} from '../../../../components';
import images from '../../../../constants/images';

const VerifiedSuccess = (props: any) => {
  const {
    route: {
      params: {phone},
    },
  } = props;

  function maskPhoneNumber(number: any) {
    const countryCode = number.substring(0, 3);
    const lastTwoDigits = number.substring(number.length - 2);
    const maskedDigits = '*'.repeat(number.length - 7);
    return '+' + countryCode + maskedDigits + lastTwoDigits;
  }

  return (
    <View style={styles.container}>
      <Navbar />
      <AuthLayout style={styles.view}>
        <Image source={images.success_icon} />
        <Text style={styles.title}>OTP Verified</Text>
        <Text style={styles.desc}>
          Successfully verified your phone number{'\n'}
          <Text style={styles.number}>{maskPhoneNumber(phone)}</Text>
        </Text>
      </AuthLayout>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  view: {
    alignItems: 'center',
    marginTop: 112,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 0.2,
    textAlign: 'center',
    color: colors.font_light,
    marginTop: 40,
    lineHeight: 36,
  },
  desc: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text_dark,
    textAlign: 'center',
    lineHeight: 21,
    marginTop: 8,
  },
  number: {
    fontWeight: '400',
    color: colors.white,
  },
});

export default VerifiedSuccess;
