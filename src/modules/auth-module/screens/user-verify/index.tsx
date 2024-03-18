import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {AuthLayout, Button, Navbar} from '../../../../components';
import images from '../../../../constants/images';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {styles} from './styles';
import routes from '../../../../constants/routes-name';
import texts from '../../../../constants/texts';

const UserVerify = (props: any) => {
  const {
    navigation,
    route: {
      params: {phone},
    },
  } = props;
  const [value, setValue] = useState<any>('');
  const ref = useBlurOnFulfill({value, cellCount: 6});
  const [codeError, setCodeError] = useState('');
  const [otpProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const onVerify = () => {
    navigation.navigate(routes.VerifiedSuccess, {phone});
  };

  const onEndEditing = async (event: any) => {
    if (event.nativeEvent.text === '123456') {
      onVerify();
    } else {
      setCodeError('Please enter correct otp');
    }
  };

  const onChangeCode = (text: any) => {
    setValue(text);
    codeError && setCodeError('');
  };

  const _renderCell = ({index, symbol, isFocused}: any) => {
    const mstart =
      index === 0 ? {marginStart: 0} : {marginStart: index === 3 ? 25 : 12};

    return (
      <View
        onLayout={getCellOnLayoutHandler(index)}
        key={index}
        style={[styles.cellRoot, isFocused && styles.focusCell, mstart]}>
        <Text style={styles.cellText}>
          {symbol || (isFocused ? <Cursor /> : null)}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <AuthLayout style={styles.view}>
        <Image source={images.verify_icon} />
        <Text style={styles.title}>{texts.verification}</Text>
        <Text style={styles.desc}>
          {texts.sent} {phone}
        </Text>
        <CodeField
          ref={ref}
          {...otpProps}
          value={value}
          onChangeText={onChangeCode}
          cellCount={6}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={_renderCell}
          onEndEditing={onEndEditing}
        />
        <Text style={styles.error}>{codeError ? codeError : ''}</Text>
        <Text style={styles.resend}>Resend code</Text>
        <View style={styles.flex} />
        <Button title={'Verify'} style={styles.btn} onClick={onEndEditing} />
      </AuthLayout>
    </View>
  );
};

export default UserVerify;
