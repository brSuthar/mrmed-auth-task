import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {AuthLayout, Button, InputView, Navbar} from '../../../../components';
import routes from '../../../../constants/routes-name';
import texts from '../../../../constants/texts';

const UserLogin = (props: any) => {
  const {navigation} = props;
  const [number, setNumber] = useState('');
  const [codeError, setCodeError] = useState('');

  const onPress = () => {
    if (number) {
      navigation.navigate(routes.UserVerify, {phone: number});
    } else {
      setCodeError(texts.enter_number);
    }
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <AuthLayout style={styles.layout}>
        <Text style={styles.hello}>{texts.hello_again}</Text>
        <Text style={styles.welcome}>{texts.welcome_back}</Text>
        <InputView value={number} onChangeText={setNumber} />
        <Text style={styles.error}>{codeError ? codeError : ''}</Text>
        <Button onClick={onPress} style={styles.btn} title={texts.sign_in} />
        <View style={styles.view} />
        <Text style={styles.privacy}>
          By sign in, I accept the{' '}
          <Text style={styles.highlight}>Terms of Service</Text> and{' '}
          <Text style={styles.highlight}>{`Community\n  Guidelines`}</Text> and
          have read <Text style={styles.highlight}>Privacy Policy.</Text>
        </Text>
      </AuthLayout>
    </View>
  );
};

export default UserLogin;
